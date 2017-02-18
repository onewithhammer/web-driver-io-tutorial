// linkTextURL1.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//  verify link text
//  verify link URL
//

// To Run:
//  $ mocha linkTextURL1.js

// Updated to support version >4 of webdriverio

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Link Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 20 seconds
	this.timeout(20000);
  var driver = {};

  // hook to run before tests
  before( function () {
    // check for global browser (grunt + grunt-webdriver)
    if(typeof browser === "undefined") {
      // load the driver for browser
      driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
      return driver.init();
    } else {
      // grunt will load the browser driver
      driver = browser;
      return;
    }
  });

  // a test spec - "specification"
  it('should be load correct page and title', function () {
    // load page, then call function()
    return driver
      .url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
      // get title, then pass title to function()
      .getTitle().then(function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      });
  });

  // Verify Contact Us link text
  it('should contain Contact Us link text', function () {
    return driver
      .getText("//ul[@id='mylist']/li[4]/a").then(function (link) {
        console.log('Link found: ' + link);
        (link).should.equal("Contact Us");
      });
  });

  // Verify Contact Us URL
  it('should contain Contact Us URL', function () {
    return driver
      .getAttribute("//ul[@id='mylist']/li[4]/a", "href").then(function (link) {
        (link).should.equal("http://tlkeith.com/contact.html");
        console.log('URL found: ' + link);
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