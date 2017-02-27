// pageObjectExample1.js

// This is a simple page object pattern example that does the following:
// open page
// verify copyright
// fill in search form and submit
// wait for results on results page
// verify results

// Page objects are used to provide another layer of abstraction between 
// the page information and the actual tests.


// To Run:
//  $ wdio wdio.conf-pObjEx1.js

// Updated to support version >4 of webdriverio

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

var WebPage = require('./pageobjects/web-page');

// a test script block or suite
describe('Page Object Example #1 for Web Driver IO - Tutorial Test Page Website', function() {

  it('should open page using pageObjects', function () {
		WebPage.open();
  });

  it('should verify copyright using pageObjects', function () {
		var cr = WebPage.getCopyright();
		(cr).should.equal("Tony Keith - tlkeith.com @ 2015-2017 - All rights reserved.");
  });

  it('should fill, submit the search form and verfiy results using pageObjects', function () {
		WebPage.setFirstname("John");
		var fn = WebPage.getFirstname();
    (fn).should.be.equal("John");
    console.log("First Name: " + fn);

    WebPage.setLastname('Doe');
    var ln = WebPage.getLastname();
    (ln).should.be.equal("Doe");

    WebPage.submit();

    WebPage.waitForResults();

    var rs = WebPage.getResults();
    (rs).should.equal("Welcome " + "John" + " " + "Doe" + ".");
	});
});