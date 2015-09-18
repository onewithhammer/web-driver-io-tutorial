// screenShot1.js
//
// This is a simple test script that does the following tests:
//  open a website
//  validate title
//  set the viewport to 1200x600
//  take a screenshot
//  set the viewport to 992x600
//  take a screenshot
//  set the viewport to 768x400
//  take a screenshot
//  set the viewport to 340x400
//  take a screenshot
//

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Screenshot Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function (done) {
    // check for global browser (grunt + grunt-webdriver)
    if(typeof browser === "undefined") {
      // load the driver for browser
      driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
      driver.init(done);
    } else {
      // grunt will load the browser driver
      driver = browser;
      done();
    }
  });

  // a test spec - "specification"
  it('should be load correct page and title', function () {
    // load page, then call function()
    return driver
      .url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
      // get title, then pass title to function()
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      });
  });

  it('should set viewport size and screenshot for different viewport sizes', function () {
    return driver
      .setViewportSize({ width: 1200, height: 600 })
      .getViewportSize(function(err, size) {
        console.log("ViewportSize W: ", size.width, " H: ", size.height);
        (size.width).should.be.equal(1200);
      })
      .saveScreenshot('./screenshots/shot-1200x600.png')
      .setViewportSize({ width: 992, height: 600 })
      .getViewportSize(function(err, size) {
        console.log("ViewportSize W: ", size.width, " H: ", size.height);
        (size.width).should.be.equal(992);
      })
      .saveScreenshot('./screenshots/shot-992x600.png')
      .setViewportSize({ width: 768, height: 400 })
      .getViewportSize(function(err, size) {
        console.log("ViewportSize W: ", size.width, " H: ", size.height);
        (size.width).should.be.equal(768);
      })
      .saveScreenshot('./screenshots/shot-768x400.png')
      .setViewportSize({ width: 340, height: 400 })
      .getViewportSize(function(err, size) {
        console.log("ViewportSize W: ", size.width, " H: ", size.height);
        (size.width).should.be.equal(340);
      })
      .saveScreenshot('./screenshots/shot-340x400.png');
  });

  // a "hook" to run after all tests in this block
	after(function(done) {
    if(typeof browser === "undefined") {
      driver.end(done);
    } else {
      done();
    }
  });
});