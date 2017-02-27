// multiWindows1.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//  verify link text
//

// To Run:
//  $ mocha multiWindow1.js


// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Multiple Window Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 20 seconds
	this.timeout(20000);
  var driver = {};
  var handle = {};

  // hook to run before tests
  before( function () {
    driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
    return driver.init();
  });

  // a test spec - "specification"
  it('should be load correct page and title', function () {
    // load page, then call function()
    return driver
//      .url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
      .url('file:///Users/tkeith/Testing/Tutorial/HTML/WebDriverIOTutorialTest.html')
      // get title, then pass title to function()
      .getTitle().then(function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      })
      .windowHandles().then(function(result) {
        handle = result;
        console.log('Window handle: ' + handle.value + ' ' + handle.sessionId );
      });
  });

  // click link to open new window and verify title
  it('should Click link to open new window and verify title', function () {
    return driver
      //  click link to open window
      .click("//div[@id='multiWindows']/a").then (function () {
        console.log('Clicked open window link');
      })
      .pause(5000)
      .windowHandles().then(function(result) {
        handle = result;
        console.log('Window handle: ' + handle.value[0] + ' ' + handle.value[1] + ' ' + handle.value.length + ' ' + typeof handle.value[1]);
      })
      .window(handle.value[1])
      .getTitle().then(function (title) {
        // verify title
        (title).should.be.equal("Tony Keith's Online Professional Resume and Information Site - Contact Page");
        // uncomment for console debug
        console.log('Current Page Title: ' + title);
      });
  });

	after(function() {
    return driver.end();
  });
});