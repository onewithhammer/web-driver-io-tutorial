// DebugExample1.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title

//  clicks on "Item 3" -> google
//  waits for google.com to load
//
//  This example shows how to debug using:
//    console.log()
//    debug()
//    getText()

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Link Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 60 seconds
	this.timeout(60000);
  var driver = {};

  // hook to run before tests
  before( function (done) {
    // load the driver for browser
    driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
    driver.init(done);
  });

  // a test spec - "specification"
  it('should be load correct page and title', function () {
    // load page, then call function()
    return driver
      //.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
      .url('file:///Users/tkeith/Testing/Tutorial/HTML/WebDriverIOTutorialTest.html')
      // get title, then pass title to function()
      .getTitle().then(function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
      });
  });

  // Click on the Item 3 from list
  it('should click on Item 3 from list', function () {
    // use getText() to verify the xpath is correct for the element
    return driver
      .getText("//ul[@id='mylist']/li[3]/div/div/a").then(function (link) {
        // use console.log() to output information
        console.log('Link found: ' + link);
        (link).should.equal("Item 3");
      })
      // use debug() to stop action to see what is happening on the browser
      .debug()
      .click("//ul[@id='mylist']/li[3]/div/div/a").then (function () {
        console.log('Link clicked');
      })
      // wait for google search form to appear
      .waitForVisible("#tsf", 20000).then(function (e) {
        console.log('Search Results Found');
      });
  });

  // a "hook" to run after all tests in this block
	after(function(done) {
    driver.end(done);
  });
});