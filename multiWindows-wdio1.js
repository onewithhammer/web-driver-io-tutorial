// multiWindows-wdio1.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//  verify link text
//  click on link to open window
//  wait until window is open
//  change focus to new window
//  verify title on new window
//

// To Run:
//  $ wdio wdio.conf-multiWindow1.js

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Multiple Window Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 20 seconds
	this.timeout(30000);
  var driver = {};
  var handle = {};

  before( function () {
     // wdio will load the browser driver
    driver = browser;
  });

  it('should be load correct page and title', function () {
    driver.url('file:///Users/tkeith/Testing/Tutorial/HTML/WebDriverIOTutorialTest.html');
//  driver.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html');
    // get title, then pass title to function()
    var title = driver.getTitle();
    // verify title
    (title).should.be.equal("Web Driver IO - Tutorial Test Page");
    // uncomment for console debug
    console.log('Current Page Title: ' + title);
  });

  // click link to open new window and verify title
  it('should click link to open new window and verify title', function () {
    //  click link
    driver.click("//div[@id='multiWindows']/a");
    console.log('Clicked open window link');

    driver.waitUntil(function () {
      handle = driver.windowHandles();
      return (handle.value.length == 2);
    }, 5000);
    //handle = driver.windowHandles();
    console.log('Window handle: ' + handle.value[0] + ' ' + handle.value[1] + ' ' + handle.value.length + ' ' + typeof handle.value[1]);
    driver.window(handle.value[1]);
    var title = driver.getTitle();
    (title).should.be.equal("Tony Keith's Online Professional Resume and Information Site - Contact Page");
    // uncomment for console debug
    console.log('Current Page Title: ' + title);
  });
});