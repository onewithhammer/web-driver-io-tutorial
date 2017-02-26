// multiWindows1.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//  verify link text
//

// To Run:
//  $ mocha multiWindow1.js

// Updated to support version >4 of webdriverio

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Multiple Window Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(20000);
  var driver = {};
  var handle = {};
  var handle2;



  // hook to run before tests
  before( function () {
    // check for global browser (grunt + grunt-webdriver)
    if(typeof browser === "undefined") {
      // load the driver for browser
      driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
      return driver.init();
    } else {
      // grunt/wdio will load the browser driver
      driver = browser;
      return;
    }
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

  // Verify Click to open new window link text
  it('should contain Click to open link text', function () {
    return driver
      .getText("//div[@id='multiWindows']/a").then(function (link) {
        console.log('Link found: ' + link);
        (link).should.equal("Click to open new window");
      });
  });

  // 
  it('should Click link to open new window and verify text', function () {
    return driver
      //  click button by id
      .click("//div[@id='multiWindows']/a").then (function () {
        console.log('Clicked open window link');
      })
      // use debug to allow the window to open - replace with waitUntil() once working
      .debug()
      .windowHandles().then(function(result) {
        handle = result;
        handle2 = handle.value[1];
        console.log('Window handle: ' + handle.value[0] + ' ' + handle.value[1] + ' ' + handle.value.length + ' ' + typeof handle.value[1]);
      })
      .window(handle2).then(function(result) {
        console.log('Window handle2: ' + handle2 + ' ' + typeof handle2);
      })
      // replace with correct handle value
//     .window('2147483657')
//    .switchTab(handle.value[1])
      // replave with correct handle value
///   .switchTab('2147483657')
      .getTitle().then(function (title) {
        // verify title
        (title).should.be.equal("Tony Keith's Online Professional Resume and Information Site - Contact Page");
        // uncomment for console debug
        console.log('Current Page Title: ' + title);
      });
  });

  // a "hook" to run after all tests in this block
	after(function() {
    if(typeof browser === "undefined") {
      return driver.end();
    } else {
      return;
    }
  });
});