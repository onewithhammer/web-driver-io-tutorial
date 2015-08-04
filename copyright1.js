// copyright1.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//  verify copyright text
//

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Copyright Test for Web Driver IO - Tutorial Test Page Website', function() {

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
      .url('http://www.tlkeith.com/WebDriverIOTutorialTest.html').then()
      // get title, then pass title to function()
      .getTitle().then(function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      });
  });

  // Verify Copyright text using id as element selector
  it('should contain Copyright text', function () {
    return driver
      .getText("#copyright").then(function (link) {
        console.log('Copyright found: ' + link);
        (link).should.equal("Tony Keith - tlkeith.com @ 2015 - All rights reserved.");
      });
  });

  // Verify Copyright text using xpath as element selector
  it('should contain Copyright text', function () {
    return driver
      // use p[1] since there more than on <p> tag
      .getText("//footer/center/p[1]").then(function (link) {
        console.log('Copyright found: ' + link);
        (link).should.equal("Tony Keith - tlkeith.com @ 2015 - All rights reserved.");
      });
  });

  // a "hook" to run after all tests in this block
	after(function(done) {
    driver.end(done);
  });
});