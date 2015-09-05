// carouselExample1.js
//
// This is a simple test script that does the following tests:
//  open a website
//  validate title
//  verify the number of images carousel
//  verify carousel loads images with captions

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Carousel Test for Web Driver IO - Tutorial Test Page Website', function() {

// data array - firstName and lastName
var dataArray = [
{"id" : "1", "caption" : "Caption #1", "image" : "http://placehold.it/250/FF0000"},
{"id" : "2", "caption" : "Caption #2", "image" : "http://placehold.it/250/00FF00"},
{"id" : "3", "caption" : "Caption #3", "image" : "http://placehold.it/250/FFFF00"},
{"id" : "4", "caption" : "Caption #4", "image" : "http://placehold.it/250/0000FF"},
{"id" : "5", "caption" : "Caption #5", "image" : "http://placehold.it/250/CCFFFF"}
];
  // set timeout to 60 seconds
	this.timeout(60000);
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

  // verify the number of images carousel
  it('should count the number of images in carousel', function () {
    return driver
    .elements(".item").then( function (s) {
      (s.value.length).should.be.equal(5);
      console.log('Count: ' + s.value.length);
    });
  });

  // loop through each dataArray 
  dataArray.forEach(function(d) {
    // verify carousel loads images with captions
    it('should load carousel image #' + d.id + ' with caption', function () {
      return driver
        // wait for caption to be visible
        .waitForVisible("//div[@id='item" + d.id + "']/div", 20000).then(function () {
          console.log('Item #' + d.id + ' found');
        })
        // verify caption
        .getText("//div[@id='item" + d.id + "']/div").then(function (link) {
          console.log('Caption Found: ' + link);
          (link).should.equal(d.caption);
        })
        // verify image
        .getAttribute("//div[@id='item" + d.id + "']/img", "src").then(function (link) {
            console.log('Image: ' + link);
            (link).should.equal(d.image);
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