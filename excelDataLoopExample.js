
// excelDataLoopExample.js
//
// This is a simple test script that does the following:
//  Opens excel (xlsx) spreadsheet
//  Read the row data (Column A = first name, Column B = last name)
//  Loop through each row data to populate form fields, then submit the form
//  Wait for results page
//  Verify first / last name on the results page

var webdriverio = require('webdriverio');
var should = require('should');
var parseXlsx = require('excel');
var Q = require('q');

// loopTest()
var loopTest = function (driver, fname, lname) {
    return driver
      .url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
      .getTitle().then( function (title) {
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        //console.log('Current Page Title: ' + title);
      })
      .setValue("#fname", fname)
      .getValue("#fname").then( function (e) {
        (e).should.be.equal(fname);
        console.log("First Name: " + e);
      })
      .setValue("#lname", lname)
      .getValue("#lname").then( function (e) {
        (e).should.be.equal(lname);
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
        (link).should.equal("Welcome " + fname + " " + lname + ".");
      });
};

// getExcelData()
var getExcelData = function(fname) {
  var deferred = Q.defer();
  // turn into async call
  parseXlsx(fname, function(err, res) {
    if (err) { deferred.reject(err); }
    else {
      deferred.resolve(res);
    }
  });
  return deferred.promise;
};

describe('Loop Test with Excel Data for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 20 seconds
  this.timeout(20000);

  var driver = {};

  before(function (done) {
    // load the driver for browser
    driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
    driver.init(done);
  });

  it('should process data records - sequentially', function() {
    var loop = Q();
    return getExcelData('testData1.xlsx').then(function(data)  {
      console.log('Records: ' + data.length);
      data.forEach(function(d) {
        loop = loop.then(function() {
          // execute the next function after the previous has resolved successfully
          console.log('First: ' + d[0] + ' Last: ' + d[1]);
          //  Read the row data (Column A or d[0] = first name, Column B or d[1] = last name)
          return loopTest(driver, d[0], d[1]);
        });
      });
      // return last so mocha knows all records are finished.
      return loop;
    });
  });

  // a "hook" to run after all tests in this block
  after(function(done) {
    driver.end(done);
  });
});

