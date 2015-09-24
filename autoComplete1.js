// autoComplete1.js
//
// This is a simple test script that does the following tests:
//  open a website
//  validate title
//  enter first 2 letter 'Be' to input
//  wait for autocomplete to open
//  click on entry 'Bengals'
//  verify input is 'Cincinnati Bengals'
//  
//

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Autocomplete test for Web Driver IO - Tutorial Test Page Website', function() {

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
      .url('http://tlkeith.com/WebDriverIOTutorialTest.html')
      // get title, then pass title to function()
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      });
  });

  // Set the input to "Be"
  it('should set input to Be', function () {
    return driver
    .setValue("#autocomplete", "Be")
    .getValue("#autocomplete").then( function (e) {
      console.log("Set input to: " + e);
      (e).should.be.equal("Be");
    });
  });

  // Select from auto completion list
  it('should select auto completion', function () {
    // wait for auto complete to open
    return driver
    .waitForVisible("#ui-id-1", 5000)
    // there should be 2 autocomplete items: Bears, Bengals
    // select the second entry: Bengals
    .getText("//ul[@id='ui-id-1']/li[2]").then( function(e) {
      console.log('Text: ' + e);
    })
    .click("//ul[@id='ui-id-1']/li[2]")
    .getValue("#autocomplete").then( function (e) {
      // the autocomplete will add the city name to the 
      console.log("Input: " + e);
      (e).should.be.equal("Cincinnati Bengals");
    });
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