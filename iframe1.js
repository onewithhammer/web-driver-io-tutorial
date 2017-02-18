// iframe1.js
//
// This is a simple test script that shows how to use multiple iframes on a page.
// It does the following:
//  open a website
//  validate title
//  select "main" iframe
//  validate text
//  select parent
//  select "contact" iframe
//  validate text
//

// To Run:
//  $ mocha iframe1.js

// Updated to support version 4 of webdriverio


// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Iframe Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
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

  it('should be load correct page and title', function () {
    // load page
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

  it('should select iframe "main"', function () {
    // select Iframe
    return driver
      .frame('main')
      .getText("//div[@class='jumbotron']/div/h3").then(function (link) {
        (link).should.be.equal("Welcome and Thank You for Visiting tlkeith.com\n\nHome of Tony Keith's Online Professional Resume and Information Site.");
        // uncomment for console debug
        // console.log('Iframe text: ' + link);
      });
  });

  it('should select iframe "contact"', function () {
    return driver
      // since we are currently on 'main' iframe, select parent then select iframe
      .frameParent()
      // select iframe
      .frame('contact')
      .getText("//h2").then(function (link) {
        (link).should.be.equal("Contact Information");
        // uncomment for console debug
        //console.log('Iframe text: ' + link);
      });
  });

  // a "hook" to run after all tests in this block
	after(function() {
    if(typeof browser === "undefined") {
      driver.end();
    } else {
      return;
    }
  });
});