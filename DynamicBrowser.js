// DynamicBrowser.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//
//  Default browser is "firefox"
//  Use the following to dynamically invoke a different browser:
//
//  Supported browsers:
//    IE 8+ (Windows Only)
//      SELENIUM_BROWSER=ie mocha <test script file name>
//    Firefox 10+ (Windows/Max/Linux)
//      SELENIUM_BROWSER=firefox mocha <test script file name>
//    Chrome 12+ (Windows/Max/Linux)
//      SELENIUM_BROWSER=chrome mocha <test script file name>
//    Opera 12+
//      SELENIUM_BROWSER=opera mocha <test script file name>
//    Safari
//      SELENIUM_BROWSER=safari mocha <test script file name>
//
//  For Windows use git bash shell:
//  SELENIUM_BROWSER=chrome mocha <test script file name>
//  $ SELENIUM_BROWSER=chrome mocha DynamicBrowser.js
//
//  For Mac or Linux, open terminal:
//  SELENIUM_BROWSER=chrome mocha <test script file name>
//  $ SELENIUM_BROWSER=chrome mocha DynamicBrowser.js

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Dynamic Browser Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function (done) {
    // load the driver for browser
    driver = webdriverio.remote({ desiredCapabilities: {browserName: process.env.SELENIUM_BROWSER || 'firefox'} });
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

  // a "hook" to run after all tests in this block
	after(function(done) {
    driver.end(done);
  });
});