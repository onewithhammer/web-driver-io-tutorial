// tutorial1-ES6.js
//
// This is a simple test script that uses ES6 generator
//  open a website
//  validate title
//
// To Run:
//  $ wdio wdio.conf-tutorial1-ES6.js
// 
// NOTE: Mocha doesn't support ES6 Generator as a test runner.  You must use WDIO as the runner!

// required libraries
var webdriverio = require('webdriverio');
var should = require('should');

// a test script block or suite
describe('Title Test using ES6 Generator for Web Driver IO - Tutorial Test Page Website', function () {

  // set timeout to 10 seconds
	this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function(done) {
    if(typeof browser === "undefined") {
      done(new Error('Use WDIO as runner: wdio wdio.conf-tutorial1-ES6.js'));
    } else {
      driver = browser;
      done();
    }
  });

  // a test spec - "specification"
  it('should be load correct page and title', function *() {
    // load page
    var title = yield driver.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html').getTitle();
    (title).should.be.equal("Web Driver IO - Tutorial Test Page");
    console.log('Current Page Title: ' + title);
  });

  // a "hook" to run after all tests in this block
	after(function(done) { 
    done();
  });
});