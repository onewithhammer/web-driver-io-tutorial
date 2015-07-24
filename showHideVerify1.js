// showHideVerify1.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title


// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Show/Hide Verify Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
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
      .url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
      // get title, then pass title to function()
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      });
  });

  // click "More Info" button and verify text in expanded element
  it('should click more info button and verify text', function () {
    return driver
      .click("#moreinfo").then (function () {
        console.log('Clicked More Info button');
      })
      .waitForVisible("#collapseExample", 5000)
      .getText("//div[@id='collapseExample']/div").then (function (e) {
        console.log('Text: ' + e);
        (e).should.be.equal("Sometimes the best things are hidden!");
      });
  });

  // a "hook" to run after all tests in this block
	after(function(done) {
    driver.end(done);
  });
});