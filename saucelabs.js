// saucelabs.js
//
// This is a simple test script that does the following:
//  open a website using cloud based test site (saucelabs)
//  validate title
//
// To run:
// setup environment with SAUCE_USERNAME & SAUCE_ACCESS_KEY
// export SAUCE_USERNAME="username"
// export SAUCE_ACCESS_KEY="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
//  $ mocha saucelabs.js

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Saucelabs Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(9999999);
  var driver = {};

  // hook to run before tests
  before( function () {
    // load the driver for browser
    driver = webdriverio.remote({
      desiredCapabilities: {
            browserName: 'firefox',
            version: '50.0',
            platform: 'Windows 8',
            tags: ['saucelabs'],
            name: 'This is an example test script using saucelabs w Mocha as runner',
        },
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        updateJob: true,
        logLevel: 'verbose'
      });
      return driver.init();
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
	after(function() {
    return driver.end();
  });
});