
Web Driver IO Tutorial
======================

[![Build Status](https://travis-ci.org/onewithhammer/web-driver-io-tutorial.svg?branch=master)](https://travis-ci.org/onewithhammer/web-driver-io-tutorial)

This is the README for the Web Driver IO Tutorial.

Please see my blog for a complete description of the files and much more
information located at:

http://webdriveriotutorial.blogspot.com/

The live working test site for the tutorial is located at:

http://tlkeith.com/WebDriverIOTutorialTest.html


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

* mocha – test framework and executes the test scripts (runner)
* shouldjs – assertion library
* webdriverio – browser control bindings (JS language bindings to communicate with Selenium)
* selenium – browser abstraction and running factory
* grunt - javascript task runner (used as test runner for cloud based testing platform)
* grunt-webdriver - grunt plugin for webdriver
* wdio - test runner
* Browser/Mobile drivers + browsers 
	* Firefox (Browser only)
	* Chrome (Browser and driver)
	* IE (Browser and driver)
	* Safari (Browser and driver plug-in)

(not really webdriverio related but very good information)
* supertest - test REST APIs
* json-server - mock REST API server

Tutorial Files:

| Filename | Description |
| :--|:--|
| tutorial1.js | Title Test - Open page and verify title
| linkTextURL1.js | Link Text/URL Test - Verify Link Text and URL
| copyright1.js | Copyright Test - Verify Link Text and URL
| formFillSubmit1.js | Populate Form Fields and Submit
| showHideVerify1.js | Click Show/Hide Button and Verify Text
| dynamicBrowser.js | Dynamically Invoke Different Browsers
| callbackPromise.js | Compares callbacks VS promises
| debugExample1.js  | Example Shows Several Methods on How to Debug
| formFieldValidation.js | Example of Validating Errors
| commonLib.js | Example of Reusable Functions (library)
| dataLoopExample1.js | Looping Static Data to Validate URL Link/Text
| dataLoopExample2.js | Looping Static Data to Populate Form Fields
| linkTextURL2.js | Link Text/URL Test By Looping Through Elements
| cssValidation1.js | Example how to validate several CSS properties
| saucelabs.js | Example how to use cloud based test site (saucelabs)
| gruntSauceLabs.js | Example how to use grunt + grunt-webdriver + saucelabs
| Gruntfile.js | Example Gruntfile with grunt-webdriver and 3 browser/OS configs
| Gruntfile-dataLoopExample2.js | Gruntfile for dataLoopExample2.js to run against saucelabs
| Gruntfile-gruntSaucelabs.js |Gruntfile for gruntSaucelabs.js to run against saucelabs
| wdio.conf-saucelabs-dataLoopExample2.js | WDIO config file for dataLoopExample2.js on two different OS/browsers (saucelabs)
| wdio.conf-dataLoopExample2.js | WDIO config file for dataLoopExample2.js on two different browsers (locally)
| restAPIExample1.js | Example how to use supertest to test REST APIs

## TEST

Create selenium directory:<br>
```
$ mkdir selenium
```
Install Selenium Stand Alone Server:<br>
Go to http://www.seleniumhq.org/download/<br>
Download jar file.  Save/move into the “selenium” directory.<br>

Start the Selenium Stand Alone Server:
```
 $ java -jar selenium-server-standalone-2.47.1.jar
```

Firefox<br>
Install firefox browser, if not already installed.

```
$ git clone https://github.com/onewithhammer/WebDriverIOTutorial.git
$ cd WebDriverIOTutorial
$ npm install
OR 
$sudo npm install
```
## RUN TESTS
Run locally single test using mocha as framework and runner:<br>
$ mocha [test-script-filename]
```
$ mocha tutorial1.js
```

Note: saucelabs.js & gruntSauceLabs.js - You will need a saucelabs account in order to set the environment variables for SAUCE_USERNAME & SAUCE_ACCESS_KEY

```
$ export SAUCE_USERNAME=[your saucelabs username]
$ export SAUCE_ACCESS_KEY=[your saucelabs access key]
```

Run grunt with default config file (mocha as framework & grunt as runner):<br>
$ grunt [task name]

````
$ grunt webdriver
```

OR

Run grunt specifying a config file:<br>
$ grunt --gruntfile <config-filename> [task name]

```
$ grunt --gruntfile Gruntfile-dataLoopExample2.js webdriver
```

Run locally single test using mocha as framework and wdio as the runner:<br>
$ wdio [config-filename]
```
$ wdio wdio-conf.dataLoopExample2.js
```

Run on saucelabs a single test using mocha as framework and wdio as the runner on 2 OS/browsers:<br>
$ wdio [config-filename]
```
$ wdio wdio-conf-saucelabs.dataLoopExample2.js
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

use a tool like postman to view the data before and after the script is ran.

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


## License
MIT



