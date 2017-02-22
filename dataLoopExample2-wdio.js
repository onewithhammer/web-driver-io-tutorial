// dataLoopExample2-wdio.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title

// The example demos how to use an array of data
// Loop through the data to populate form fields, then submit the form
// Wait for results page
// Verify first / last name on the results page

// To Run:
//  $ wdio wdio.conf-dataLoopExample2.js

// Updated to support version >4 of webdriverio 


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
  before( function () {
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

  // loop through each dataArray 
  dataArray.forEach(function(d) {
    it('should populate fields, submit form, wait for results and verify data', function () {
      // make sure you are on the starting page
      driver.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html');
      var title = driver.getTitle();
      // verify title
      (title).should.be.equal("Web Driver IO - Tutorial Test Page");
    
      driver.setValue("#fname", d.firstName);
      var fn = driver.getValue("#fname");
      (fn).should.be.equal(d.firstName);
      console.log("First Name: " + fn);
      
      driver.setValue("#lname", d.lastName);
      var ln = driver.getValue("#lname");
      (ln).should.be.equal(d.lastName);
      console.log("Last Name: " + ln);

      driver.submitForm("#search-form");
      console.log('Submit Search Form');
      driver.waitForVisible("#search-results", 10000);
      console.log('Result Page Found');
  
      var link = driver.getText("//h1");
      console.log('Text found: ' + link);
      (link).should.equal("Welcome " + d.firstName + " " + d.lastName + ".");
    });
  });
});