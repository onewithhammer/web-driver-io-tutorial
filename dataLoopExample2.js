// dataLoopExample2.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title

// The example demos how to use an array of data
// Loop through the data to populate form fields, then submit the form
// Wait for results page
// Verify first / last name on the results page

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Loop Data Form Field Test for Web Driver IO - Tutorial Test Page Website', function() {

// data array - firstName and lastName
var dataArray = [
{"firstName" : "Tony", "lastName" : "Keith"},
{"firstName" : "John", "lastName" : "Doe"},
{"firstName" : "Jane", "lastName" : "Doe"},
{"firstName" : "Don", "lastName" : "Johnson"}
];
  // set timeout to 30 seconds
	this.timeout(30000);
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

  // loop through each dataArray 
  dataArray.forEach(function(d) {
    it('should populate fields, submit page', function() {
      return driver
      // make sure you are on the starting page
      .url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
      })
      .setValue("#fname", d.firstName)
      .getValue("#fname").then( function (e) {
        (e).should.be.equal(d.firstName);
        console.log("First Name: " + e);
      })
      .setValue("#lname", d.lastName)
      .getValue("#lname").then( function (e) {
        (e).should.be.equal(d.lastName);
        console.log("Last Name: " + e);
      })
      .submitForm("#search-form").then( function() {
        console.log('Submit Search Form');
      })
      .waitForVisible("#search-results", 10000).then(function () {
        console.log('Result Page Found');
      })
      .getText("//h1").then(function (link) {
        console.log('Text found: ' + link);
        (link).should.equal("Welcome " + d.firstName + " " + d.lastName + ".");
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