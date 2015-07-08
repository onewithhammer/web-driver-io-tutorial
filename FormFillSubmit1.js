// FormFillSubmit1.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//  fills/validates first name using id
//  clears first name
//  fills/validates first name using xpath from input
//  clears first name
//  fills/validates first name using xpath from form
//  fills/validates last name using id
//  submits the form
//  waits for search results page

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Form Field Test for Web Driver IO - Tutorial Test Page Website', function() {

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
      //.url('file:///Users/tkeith/Testing/Tutorial/HTML/WebDriverIOTutorialTest.html')
      // get title, then pass title to function()
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      });
  });

  // Set the first name using id to: Tony
  it('should set first name to Tony', function () {
    return driver.setValue("#fname", "Tony")
      .getValue("#fname").then( function (e) {
        (e).should.be.equal("Tony");
        console.log("First Name: " + e);
      });
  });

  // Clear the first name using id
  it('should clear first name', function () {
    return driver.clearElement("#fname")
      .getValue("#fname").then( function (e) {
        (e).should.be.equal("");
        console.log("First Name: " + e);
      });
  });

  // Set the first name using xpath from input to: Tony
  it('should set first name to Tony', function () {
    return driver.setValue("//input[@name='fname']", "Tony")
      .getValue("//input[@name='fname']").then( function (e) {
        (e).should.be.equal("Tony");
        console.log("First Name: " + e);
      });
  });

  // Clear the first name using xpath from input
  it('should clear first name', function () {
    return driver.clearElement("//input[@name='fname']")
      .getValue("//input[@name='fname']").then( function (e) {
        (e).should.be.equal("");
        console.log("First Name: " + e);
      });
  });

  // Set the first name using xpath from form to: Tony
  it('should set first name to Tony', function () {
    return driver.setValue("//form[@id='search-form']/input[1]", "Tony")
      .getValue("//form[@id='search-form']/input[1]").then( function (e) {
        (e).should.be.equal("Tony");
        console.log("First Name: " + e);
      });
  });

  // Set the last name using id to: Keith
  it('should set last name to Keith', function () {
    return driver.setValue("#lname", "Keith")
      .getValue("#lname").then( function (e) {
        (e).should.be.equal("Keith");
        console.log("Last Name: " + e);
      });
  });

  // Submit form and wait for search results
  it('should submit form and wait for results', function () {
    return driver.submitForm("#search-form").then( function(e) {
      console.log('Submit Search Form');
      })
      .waitForVisible("#search-results", 10000).then(function (e) {
        console.log('Search Results Found');
      });
  });

  // a "hook" to run after all tests in this block
	after(function(done) {
    driver.end(done);
  });
});