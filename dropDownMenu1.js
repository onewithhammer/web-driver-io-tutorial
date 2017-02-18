// dropDownMenu1.js
//
// This is a simple test script that demonstrates how to test a dropdown menu.
//  It does the following:
//  open a website
//  validate title
//  Verify the menu dropdown items
//

// To Run:
//  $ mocha dropDownMenul1.js

// Updated to support version 4 of webdriverio


// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Dropdown Menu Test for Web Driver IO - Tutorial Test Page Website', function() {

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

  // Verify the menu dropdown items
  it('should verify menu dropdown items', function () {
    return driver
      //  click by id
      .click("#dropdownMenu1").then (function () {
        console.log('Clicked dropdown menu');
      })
      // wait for menu items to be visable
      .waitForVisible(".dropdown-menu", 5000)
      .getText("//ul[@class='dropdown-menu']/li[1]/a").then(function (link) {
        console.log('Link found: ' + link);
        (link).should.equal("Action");
      })
      .getText("//ul[@class='dropdown-menu']/li[2]/a").then(function (link) {
        console.log('Link found: ' + link);
        (link).should.equal("Another action");
      })
      .getText("//ul[@class='dropdown-menu']/li[3]/a").then(function (link) {
        console.log('Link found: ' + link);
        (link).should.equal("Something else here");
      })
      .getText("//ul[@class='dropdown-menu']/li[4]/a").then(function (link) {
        console.log('Link found: ' + link);
        (link).should.equal("Separated link");
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