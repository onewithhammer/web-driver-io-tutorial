// callbackPromise.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//  set/verify first/last name using Promises
//  set/verify first/last name using Callbacks
//

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Callback vs Promise Test for Web Driver IO - Tutorial Test Page Website', function() {

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
      .getTitle().then(function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      });
  });

  // Set/verify first/last name using Promises
  it('should set/verify first/last name using Promises', function () {
    return driver.setValue("#fname", "Tony")
      .getValue("#fname").then( function (e) {
        (e).should.be.equal("Tony");
        console.log("First Name: " + e);
      })
      .setValue("#lname", "Keith")
      .getValue("#lname").then( function (e) {
        (e).should.be.equal("Keith");
        console.log("Last Name: " + e);
      });
  });

  // Set/verify first/last name using Callbacks
  it('should set/verify first/last name using Callbacks', function (done) {
    driver.setValue("#fname", "Tony", function (e) {
      driver.getValue("#fname", function (err, e) {
        (e).should.be.equal("Tony");
        console.log("First Name: " + e);

        driver.setValue("#lname", "Keith", function (e) {
          driver.getValue("#lname", function (err, e) {
            (e).should.be.equal("Keith");
            console.log("Last Name: " + e);
            done();
          });
        });
      });
    });
  });

  // a "hook" to run after all tests in this block
	after(function(done) {
    driver.end(done);
  });
});
