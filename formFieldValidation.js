// formFieldValidation.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//
//  verifies the form field errors

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should'),
  // require the reusable command - commonLib
  common = require('./common/commonLib');

// a test script block or suite
describe('Form Field Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 20 seconds
	this.timeout(20000);
  var driver = {};

  // hook to run before tests
  before( function (done) {
    // check for global browser (grunt + grunt-webdriver)
    if(typeof browser === "undefined") {
      // load the driver for browser
      driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });

      // bind the commands
      driver.addCommand('verifyFirstNameError', common.verifyFirstNameCheckError.bind(driver));
      driver.addCommand('verifyLastNameError', common.verifyLastNameCheckError.bind(driver));

      driver.init(done);
    } else {
      // grunt will load the browser driver
      driver = browser;

      // bind the commands
      driver.addCommand('verifyFirstNameError', common.verifyFirstNameCheckError.bind(driver));
      driver.addCommand('verifyLastNameError', common.verifyLastNameCheckError.bind(driver));

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

  it('should contain 2 errors: first/last name', function () {
    // call the reusable function
    driver
      .verifyFirstNameError(1)
      .verifyLastNameError(2);
  });

  it('should contain 5 errors: first/last/address/city/state', function () {

    return driver
     .getText("//ul[@class='alert alert-danger']/li[1]").then(function (e) {
        console.log('Error found: ' + e);
        (e).should.be.equal('Please enter first name');
      })
      .getText("//ul[@class='alert alert-danger']/li[2]").then(function (e) {
        console.log('Error found: ' + e);
        (e).should.be.equal('Please enter last name');
      })
      .getText("//ul[@class='alert alert-danger']/li[3]").then(function (e) {
        console.log('Error found: ' + e);
        (e).should.be.equal('Please enter address');
      })
      .getText("//ul[@class='alert alert-danger']/li[4]").then(function (e) {
        console.log('Error found: ' + e);
        (e).should.be.equal('Please enter city');
      })
      .getText("//ul[@class='alert alert-danger']/li[5]").then(function (e) {
        console.log('Error found: ' + e);
        (e).should.be.equal('Please enter state');
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