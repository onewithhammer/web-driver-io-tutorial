// copyright1.js
//
// This is a simple test script using ES6 Generators does the following:
//  open a website
//  validate title
//  verify copyright text
//
//
// To Run:
//  $ wdio wdio.conf-copyright1-ES6.js
// 
// NOTE: Mocha doesn't support ES6 Generator as a test runner.  You must use WDIO as the runner!

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Copyright Test using ES6 Generator for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function (done) {
    if(typeof browser === "undefined") {
      done(new Error('Use WDIO as runner: wdio wdio.conf-copyright1-ES6.js'));
    } else {
      // grunt will load the browser driver
      driver = browser;
      done();
    }
  });

  // a test spec - "specification"
  it('should be load correct page and title', function *() {
    // get title
    var title = yield driver.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html').getTitle();
    
    // verify title
    (title).should.be.equal("Web Driver IO - Tutorial Test Page");
  });

  // Verify Copyright text using id as element selector
  it('should contain Copyright text', function *() {
    var link = yield driver.getText("#copyright");
   
    (link).should.equal("Tony Keith - tlkeith.com @ 2015 - All rights reserved.");
    console.log('Copyright found: ' + link);
  });

  // Verify Copyright text using xpath as element selector
  it('should contain Copyright text', function *v() {
    // use p[1] since there more than on <p> tag
    var link = yield driver.getText("//footer/center/p[1]");

    (link).should.equal("Tony Keith - tlkeith.com @ 2015 - All rights reserved.");
    console.log('Copyright found: ' + link);
  });

  // a "hook" to run after all tests in this block
	after(function(done) {
    done();
  });
});