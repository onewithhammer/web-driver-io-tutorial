// tutorial1-wdio.js
//
// This is a simple test script that does the following tests:
//  open a website
//  validate title
//

// To Run:
//  $ wdio wdio.conf-tutorial1.js

// Updated to support version 4 of webdriverio

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Title Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function() {
    // wdio will load the browser driver
    driver = browser;
  });

  // a test spec - "specification"
  it('should be load correct page and title', function () {
    // load page, then call function()
    driver.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html');
      // get title, then pass title to function()
    var title = driver.getTitle();
    // verify title
    (title).should.be.equal("Web Driver IO - Tutorial Test Page");
    // uncomment for console debug
    // console.log('Current Page Title: ' + title);
 });

});