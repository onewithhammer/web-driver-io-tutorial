// dataLoopExample1.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//  validates page with many links
//
//    each link is validated and the page is loaded

// The example demos how to use an array of data and through the data to verify URL/TEXT and the page exists

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Loop Data URL Test for Web Driver IO - Tutorial Test Page Website', function() {

// Link data - link and text
var linkArray = [
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/tutorial1.js", "name" : "tutorial1.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/linkTextURL1.js", "name" : "linkTextURL1.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/copyright1.js", "name" : "copyright1.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/formFillSubmit1.js", "name" : "formFillSubmit1.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/showHideVerify1.js", "name" : "showHideVerify1.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/dynamicBrowser.js", "name" : "dynamicBrowser.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/callbackPromise.js", "name" : "callbackPromise.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/debugExample1.js", "name" : "debugExample1.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/formFieldValidation.js", "name" : "formFieldValidation.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/common/commonLib.js", "name" : "commonLib.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/dataLoopExample1.js", "name" : "dataLoopExample1.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/dataLoopExample2.js", "name" : "dataLoopExample2.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/cssValidation1.js", "name" : "cssValidation1.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/saucelabs.js", "name" : "saucelabs.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/gruntSaucelabs.js", "name" : "gruntSaucelabs.js"},
{"link" : "https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/Gruntfile.js", "name" : "Gruntfile.js"}
];
  // set timeout to 120 seconds
	this.timeout(120000);
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
      .url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
     // get title, then pass title to function()
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      });
  });

  // loop through each linkArray 
  linkArray.forEach(function(d) {
    it('should contain text/link then goto page - ' + d.name, function() {
      return driver
      // make sure you are on the starting page
      .url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
      })
      // find the URL
      .getAttribute('a=' + d.name, "href").then(function (link) {
        (link).should.equal(d.link);
        console.log('URL found: ' + d.link);
      })
      // go to URL page and verify it exists
      .click('a=' + d.name)
      .waitForVisible("#js-repo-pjax-container", 10000).then(function () {
        console.log('Github Page Found');
      });
    });
  });

  // a "hook" to run after all tests in this block
	after(function(done) {
    if(typeof browser === "undefined") {
      driver.end(done);
    } else {
      done();
    }
  });
});