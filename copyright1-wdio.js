// copyright1-wdio.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//  verify copyright text
//


// To Run:
//  $ wdio wdio.conf-copyright1.js

// Updated to support version >4 of webdriverio 

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Copyright Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function () {
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

  // Verify Copyright text using id as element selector
  it('should contain Copyright text', function () {
    var link = driver.getText("#copyright");
    console.log('Copyright found: ' + link);
    (link).should.equal("Tony Keith - tlkeith.com @ 2015-2017 - All rights reserved.");
  });

  // Verify Copyright text using xpath as element selector
  it('should contain Copyright text', function () {
    // use p[1] since there more than on <p> tag
    var link = driver.getText("//footer/center/p[1]");
    console.log('Copyright found: ' + link);
    (link).should.equal("Tony Keith - tlkeith.com @ 2015-2017 - All rights reserved.");
  });
});