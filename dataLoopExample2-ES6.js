// dataLoopExample2-ES6.js
//
// This is a simple test script using ES6 Generator that does the following:
//  open a website
//  validate title

// This script demos how to use an array of data
// Loop through the data to populate form fields, then submit the form
// Wait for results page
// Verify first / last name on the results page

// To Run:
//  $ wdio dataLoopExample2-ES6.js

// NOTE: Mocha doesn't support ES6 Generator as a test runner.  You must use WDIO as the runner!


// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Loop Data Form Field Test using ES6 Generator for Web Driver IO - Tutorial Test Page Website', function() {

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
    if(typeof browser === "undefined") {
      done(new Error('Use WDIO as runner: wdio wdio.conf-copyright1-ES6.js'));
    } else {
      // wdio will load the browser driver
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

  // loop through each dataArray 
  dataArray.forEach(function(d) {
    it('should populate fields, submit form, wait for results and verify data', function *() {
      
      // make sure you are on the starting page
      var title = yield driver.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html').getTitle();

      // verify title
      (title).should.be.equal("Web Driver IO - Tutorial Test Page");
      
      var firstName = yield driver.setValue("#fname", d.firstName).getValue("#fname");
      (firstName).should.be.equal(d.firstName);
      console.log("First Name: " + firstName);

      var lastName = yield driver.setValue("#lname", d.lastName).getValue("#lname");
      (lastName).should.be.equal(d.lastName);
      console.log("Last Name: " + lastName);

      yield driver.submitForm("#search-form").waitForVisible("#search-results", 10000);
      
      var link = yield driver.getText("//h1");
      console.log('Text found: ' + link);
      (link).should.equal("Welcome " + d.firstName + " " + d.lastName + ".");
    });
  });

  // a "hook" to run after all tests in this block
	after(function(done) {
    done();
  });
});