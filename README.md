
Web Driver IO Tutorial
======================

[![Build Status](https://travis-ci.org/onewithhammer/web-driver-io-tutorial.svg?branch=master)](https://travis-ci.org/onewithhammer/web-driver-io-tutorial)

This is the README for the Web Driver IO Tutorial.

Please see my blog for a complete description of the files and much more
information located at:

[Blog](http://webdriveriotutorial.blogspot.com/)

The live working test site for the tutorial is located at:

[Working Test Site](http://tlkeith.com/WebDriverIOTutorialTest.html)


This project was updated to support version 4 of webdriverio


## Background

I recently had an interesting challenge presented to me. I needed to introduce automated testing to a Q/A department with very little technical experience and no programming experience. 

This was really two (2) separate challenges. The first was to find the technologies to use to do the automated testing. The second was actually training the Q/A department. 

The project will only address the technologies used and what I learned in the process. 

The technologies worked well but I really had to search for information and spent many hours figuring out issues. There doesn't seem to be much on the Internet about this. I wanted to share this information, so I wrote this project along with a web site page to test all the scripts against.

I hope you find this project useful. If you do, please let me know.

## Objectives

Use Technologies That:

* Can test web site functionality
* Can test JavaScript functionality
* Can be run manually from command line
* Can be run automatically with a CI
* Have an easy to learn language for non programmers
	* Q/A personnel with basic knowledge of HTML and JavaScript
* Use open source software (except cloud based testing platforms)

## Technologies

List of technologies I choose:

* mocha – test framework and executes the test scripts (test runner)
* shouldjs –  expressive, readable, assertion library (test if something is true)
* webdriverio – browser control bindings (JS language bindings to communicate with Selenium)
* selenium – browser abstraction and running factory
* grunt - javascript task runner (used as test runner for cloud based testing platform)
* grunt-webdriver - grunt plugin for webdriver (uses wdio as test runner)
* wdio - test runner
* Browser/Mobile drivers + browsers 
	* Firefox (Browser and driver)
	* Chrome (Browser and driver)
	* IE (Browser and driver)
	* Safari (Browser and driver plug-in)

(Not really webdriverio related but very good information)
* supertest - test REST APIs
* json-server - mock REST API server
* mongodb + promise-mongo - test database driven testing
* node-xlsx - Excel parser & builder


## Tutorial Files

| Filename | Description |
| :--|:--|
| tutorial1.js | Title Test - Open page and verify title
| linkTextURL1.js | Link Text/URL Test - Verify Link Text and URL
| copyright1.js | Copyright Test - Verify Copyright Text
| formFillSubmit1.js | Populate Form Fields and Submit
| showHideVerify1.js | Click Show/Hide Button and Verify Text
| dynamicBrowser.js | Dynamically Invoke Different Browsers
| callbackPromise.js | Compares callbacks VS promises
| debugExample1.js  | Example Shows Several Methods on How to Debug
| formFieldValidation.js | Example of Validating Form Field Errors
| commonLib.js | Example of Reusable Functions (library)
| dataLoopExample1.js | Looping Static Data to Validate URL Link/Text
| dataLoopExample2.js | Looping Static Data to Populate Form Fields
| linkTextURL2.js | Link Text/URL Test By Looping Through Elements
| cssValidation1.js | Example how to validate several CSS properties
| dropDownMenu1.js | Example how to validate dropdown menu selections
| carouselExample1.js | Example how to validate image carousels
| screenShot1.js | Example how to take screenshots at different browser widths
| autoComplete1.js | Example how to select and validate autocomplete input field
| iframe1.js | Example how to select / interact multiple iframes on a page
| modal1.js | Example how to interact with a modal window (bootstrap)
| selectBox1.js | Exmample how to interact with selectbox
| saucelabs.js | Example how to use cloud based test site (saucelabs)
| gruntSauceLabs.js | Example how to use grunt + grunt-webdriver + saucelabs
| restAPIExample1.js | Example how to use supertest to test REST APIs
| dbDataLoopExample.js | Example how to use database (mongoDB) driven testing
| excelDataLoopExample.js | Example how to use excel as a data source for test data


## Configuration Files

| Filename | Description |
| :--|:--|
| wdio.conf-gruntfile.js | WDIO config with 3 browser/OS configs against saucelabs
| wdio.conf-saucelabs-dataLoopExample2.js | WDIO config file for dataLoopExample2.js on two different OS/browsers (saucelabs)
| wdio.conf-dataLoopExample2.js | WDIO config file for dataLoopExample2.js on two different browsers (locally)
| Gruntfile.js | Example Gruntfile with grunt-webdriver and 3 browser/OS configs
| Gruntfile-dataLoopExample2.js | Gruntfile for dataLoopExample2.js to run against saucelabs
| Gruntfile-gruntSaucelabs.js | Gruntfile for gruntSaucelabs.js to run against saucelabs


## Data Files

| Filename | Description |
| :--|:--|
| testData1.xlsx | excel spreadsheet with test data

## TEST

Create selenium directory:

```
$ mkdir selenium
```
Install Selenium Stand Alone Server:<br>
Go to http://www.seleniumhq.org/download/<br>
Download jar file (3.0.1 latest at this time)<br>
Save/move into the “selenium” directory.<br>

Start the Selenium Stand Alone Server:

```
 $ java -jar selenium-server-standalone-3.0.1.jar
```

Firefox<br>
Install firefox browser, if not already installed.

Firefox driver (GeckoDriver)<br>

Go to https://github.com/mozilla/geckodriver/releases
Download latest driver
untar
```
$ tar -xvf <drivername>
```
Move to directory in PATH   


```
$ git clone https://github.com/onewithhammer/WebDriverIOTutorial.git
$ cd WebDriverIOTutorial
$ npm install
OR 
$ sudo npm install
```
## RUN TESTS
Run locally single test using mocha as framework and runner:

```
$ mocha [test-script-filename]
```

```
$ mocha tutorial1.js
```

Note: saucelabs.js & gruntSauceLabs.js - You will need a saucelabs account in order to set the environment variables for SAUCE_USERNAME & SAUCE_ACCESS_KEY

```
$ export SAUCE_USERNAME=[your saucelabs username]
$ export SAUCE_ACCESS_KEY=[your saucelabs access key]
```

Run grunt with default config file - Gruntfile.js using mocha as framework & wdio as runner. The config file will run a few test files against saucelabs with different OS/browser combinations.

```
$ grunt [task-name]
```

```
$ grunt webdriver
```

OR

Run grunt specifying a config file:

```
$ grunt --gruntfile <config-filename> [task name]
```

Run locally a single test using mocha as framework and wdio as the runner on 2 OS/browsers:<br>

```
$ grunt --gruntfile Gruntfile-dataLoopExample2.js webdriver
```

Run locally single test using mocha as framework and wdio as the runner:

```
$ wdio [config-filename]
```

```
$ wdio wdio.conf-dataLoopExample2.js
```

Run on saucelabs a single test using mocha as framework and wdio as the runner on 2 OS/browsers:<br>

```
$ wdio [config-filename]
```

```
$ wdio wdio.conf-saucelabs-dataLoopExample2.js
```

## RUN ES6 TESTS

NOTE: Mocha does not support ES6.  You must use wdio to run ES6 test scripts.


```
$ wdio wdio.conf-tutorial1-ES6.js
```

```
$ wdio wdio.conf-copyright1-ES6.js
```

```
$ wdio wdio.conf-dataLoopExample2-ES6.js
```

## TEST REST APIs
Install json-server

```
$ npm install -g json-server
```

Start json-server first with json database file (db.json)

```
$ cd json-server
$ json-server db.json
```

see https://github.com/typicode/json-server for github project.<br>
see http://jsonplaceholder.typicode.com/ for working demo online of json-server.

then run script

```
$ mocha restAPIExample1.js
```

Use a tool like postman to view the data before and after the script is ran.

Use it.skip() to skip specs.

Note: json-server will update the db.json file.

To restore the original file (stop server first):

```
cp db-bak.json db.json
```

## USE DB TEST DATA
Install and make sure mongoDB is running locally then run script

```
$ mocha dbDataLoopExample.js
```

## TO DO

* use WDIO as the test runner - DONE
  * see wdio config files
* show example of CI (Travis) - DONE
	* see .travis.yml file for more details
* show more should assertion lib examples
  * show examples deepEqual() 
  * show examples of property() - DONE
  * show examples of instanceOf() - DONE
* show chai assertion lib examples
* show examples of testing REST API - DONE
	* use custom assertions - DONE
* show examples of screenshots - DONE
* show example of autocomplete field - DONE
* show example using ES6 generator - DONE
* show example using iframe - DONE
* show example using control characters
* show example using modal - DONE
* show example of selectbox - DONE
* show example using excel as a data source - DONE
* show example using custom reporter
* show example using page object
* Update examples to use old async method and V4 - NA
* Write examples of all using sync method and V4 - IN PROGRESS

## Change Log

see the [CHANGELOG](https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/CHANGELOG.md)


## License
MIT © 2015-2017 Tony Keith <tony.keith@yahoo.com> [WEBSITE](http://www.tlkeith.com)



