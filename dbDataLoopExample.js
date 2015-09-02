
// dbDataLoopExample.js
//
// This is a simple test script that does the following:
//  Connect to mongoDB database
//  Add records to user collection
//  Read the records from database
//  Loop through each record to populate form fields, then submit the form
//  Wait for results page
//  Verify first / last name on the results page

var webdriverio = require('webdriverio');
var should = require('should');
var Q = require('q');

// use promise-mongo - see https://www.npmjs.com/package/promise-mongo
var PM = require('promise-mongo');
var pm = new PM();
var collectionNames = [ 'user' ];
var db;
var cf;
var cur;

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

describe('Loop Test with DB Data for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 20 seconds
  this.timeout(20000);

  var driver = {};

  before(function (done) {
    // connect to the db
    pm.initDb(collectionNames, 'mongodb://127.0.0.1:27017/test').then(function(mdb) {
      console.log('Connected to db');
      db = pm.cols;
      cf = pm.cf;
      cur = pm.cur;
    });
    // load the driver for browser
    driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
    driver.init(done);
  });

  it('should add data',function(done) {
    db.user.insert({fname: 'Tony', lname: 'Keith'}).then(function() {
      return db.user.findOne({ fname: 'Tony'});
    }).then(function(res) {
      console.log('Added: ' + res.fname + ' ' + res.lname);
      (res.fname).should.be.equal('Tony');
      (res.lname).should.be.equal('Keith');
    });

    db.user.insert({fname: 'John', lname: 'Doe'}).then(function() {
      return db.user.findOne({ fname: 'John'});
    }).then(function(res) {
      console.log('Added: ' + res.fname + ' ' + res.lname);
      (res.fname).should.be.equal('John');
      (res.lname).should.be.equal('Doe');
    });

    db.user.insert({fname: 'Jim', lname: 'Smith'}).then(function() {
      return db.user.findOne({ fname: 'Jim'});
    }).then(function(res) {
      console.log('Added: ' + res.fname + ' ' + res.lname);
      (res.fname).should.be.equal('Jim');
      (res.lname).should.be.equal('Smith');
      // only one done()
      done();
    });
  });

  it('should process data records - sequentially',function() {
    // Special thanks to Christian Bromann <mail@christian-bromann.com> for help with this code.
    var loop = Q();
    return db.user.find().then(cur.toArray).then(function(res) {
      console.log('Records:', res.length);
      res.forEach(function(d) {
        loop = loop.then(function() {
          // execute the next function after the previous has resolved successfully
          console.log(d.fname, d.lname);
          return loopTest(driver, d.fname, d.lname);
        });
      });
      // return last so mocha knows all records are finished.
      return loop;
    });
  });

  // drop the database when finished
  it('should drop database',function(done) {
      pm.mdb.dropDatabase(function(err, result) {
        done();
      });
  });

  // a "hook" to run after all tests in this block
  after(function(done) {
    driver.end(done);
  });
});

