// FormFieldValidation.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//
//  verifies the form field errors

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should'),
  // require the reusable command - CommonLib
  common = require('./Common/CommonLib');

// a test script block or suite
describe('Form Field Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function (done) {
    // load the driver for browser
    driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });

    // bind the command
    driver.addCommand('verifyLastNameError', common.verifyLastNameCheckError.bind(driver));

    driver.init(done);
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

  it('should contain last name error', function (done) {
    driver.verifyLastNameError(2).call(done);
  });

  // a "hook" to run after all tests in this block
	after(function(done) {
    driver.end(done);
  });
});