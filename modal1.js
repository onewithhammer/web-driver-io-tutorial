// modal1.js
//
// This is a simple test script that shows how to interact with a modal (bootstrap) using 2 methods (ID/Xpath)
// It does the following:
//  open a website (parent)
//  validate title
//  click on modal button
//  wait for modal to open
//  validate body text
//  click close button
//  wait until modal closes
//  verify copyright (parent)
//

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Modal Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
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

  it('should be load correct page and title', function () {
    // load page
    return driver
      .url('http://tlkeith.com/WebDriverIOTutorialTest.html')
      // get title, then pass title to function()
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
      });
  });


  // easy method - use ID selector
  it('should verify text from modal body and click Close button (easy)', function () {
    return driver
      //  click button by id
      .click("#modalbutton").then (function () {
        console.log('Clicked modal button');
      })
      // wait for modal to be visable
      .waitForVisible("#myModal", 5000)
      .getText("//div[@class='modal-body']").then(function (text) {
        console.log('Text found: ' + text);
        (text).should.equal("I agree to the following...");
      })
      // click the close button
      .click("#closebutton").then (function () {
        console.log('Clicked Close button in modal');
      });
  });

  it('should contain Copyright text', function () {
    return driver
      // wait for modal to close and parent to be visual
      .waitForVisible("#copyright", 5000)
      .getText("#copyright").then(function (link) {
        console.log('Copyright found: ' + link);
        (link).should.equal("Tony Keith - tlkeith.com @ 2015 - All rights reserved.");
      });
  });

  // harder method - use xpath 
  it('should verify text from modal body and click (X) button', function () {
    return driver
      // click button by id
      .click("#modalbutton").then (function () {
        console.log('Clicked modal button');
      })
      // wait for modal to be visable
      .waitForVisible("#myModal", 5000)
      .getText("//div[@class='modal-body']").then(function (text) {
        console.log('Text found: ' + text);
        (text).should.equal("I agree to the following...");
      })
      // click the X close button
      .click("//button[@class='close']").then (function () {
        console.log('Clicked (X) button in modal');
      });
  });

  it('should contain Copyright text', function () {
    return driver
      // wait for modal to close and parent to be visual
      .waitForVisible("#copyright", 5000)
      .getText("#copyright").then(function (link) {
        console.log('Copyright found: ' + link);
        (link).should.equal("Tony Keith - tlkeith.com @ 2015 - All rights reserved.");
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