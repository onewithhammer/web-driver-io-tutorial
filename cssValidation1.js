// cssValidation1.js
//
// This is a simple test script that does the following:
//  open a website
//  validate title
//
//  Verfiy the following CSS properties:
//    color
//    padding (top, bottom, right, left)
//    background color

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('CSS Property Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function (done) {
    // check for global browser (grunt + grunt-webdriver)
    if(typeof browser === "undefined") {
      // load the driver for browser
      driver = webdriverio.remote({desiredCapabilities: {browserName: 'firefox'} });
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
      //.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
      .url('file:///Users/tkeith/Testing/Tutorial/HTML/WebDriverIOTutorialTest.html')
  
      // get title, then pass title to function()
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      });
  });

  it('should contain correct color of error text', function () {
    return driver
     .getCssProperty("//ul[@class='alert alert-danger']/li[1]", "color").then(function (result) {
        console.log('Color found: ' + result.parsed.hex + " or " + result.value);
        (result.parsed.hex).should.be.equal('#a94442');
      });
  });

  it('should contain correct padding in table cell', function () {
    return driver
      // padding: top right bottom left
      .getCssProperty("//table[@id='filelist']/thead/tr[1]/td[1]", "padding-top").then(function (result) {
        console.log('padding-top found: ' + result.value);
        (result.value).should.be.equal('10px');
      })
      .getCssProperty("//table[@id='filelist']/thead/tr[1]/td[1]", "padding-bottom").then(function (result) {
        console.log('padding-bottom found: ' + result.value);
        (result.value).should.be.equal('10px');
      })
      .getCssProperty("//table[@id='filelist']/thead/tr[1]/td[1]", "padding-right").then(function (result) {
        console.log('padding-right found: ' + result.value);
        (result.value).should.be.equal('5px');
      })
      .getCssProperty("//table[@id='filelist']/thead/tr[1]/td[1]", "padding-left").then(function (result) {
        console.log('padding-left found: ' + result.value);
        (result.value).should.be.equal('5px');
      });
  });

 it('should contain correct background color in table header', function () {
    return driver
     .getCssProperty("//table[@id='filelist']/thead", "background-color").then(function (result) {
        console.log('background color found: ' + result.parsed.hex);
        (result.parsed.hex).should.be.equal('#eeeeee');
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