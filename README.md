Web Driver IO Tutorial
======================

This is the README for the Web Driver IO Tutorial.

Please see my blog for a complete description of the files and much more
located at:

http://webdriveriotutorial.blogspot.com/

The live working test site for the tutorial is located at:

http://tlkeith.com/WebDriverIOTutorialTest.html


## Background

I recently had an interesting challenge presented to me. I needed to introduce automated testing to a Q/A department with very little technical experience and no programming experience. 

This was really two (2) separate challenges. The first was to find the technologies to use to do the automated testing. The second was actually training the Q/A department. 

The article will only address the technologies used and what I learned in the process. 

The technologies worked well but I really had to search for information and spent many hours figuring out issues. There doesn't seem to be much on the Internet about this.
I wanted to share this information, so I wrote this article. I hope you find it useful. If you do, please let me know.

## Objectives

Use technologies to:

* Test web site functionality
* Test JavaScript functionality
* Can be run manually
* Can be run automatically
* Easy to learn language for non programmers
	* Q/A personnel with basic knowledge of HTML and JavaScript
* Use open source software

## Technologies

List of technologies I choose:

* mocha – test runner - executes the test scripts
* shouldjs – assertion library
* webdriverio – browser control bindings (language bindings)
* selenium – browser abstraction and running factory
* grunt - task runner
* grunt-webdriver - grunt plugin for webdriver
* Browser/Mobile drivers + browsers 
	* Firefox (Browser only)
	* Chrome (Browser and driver)
	* IE (Browser and driver)
	* Safari (Browser and driver plug-in)

Tutorial Files:

| Filename             | Description                                             |
| :---------------------|:--------------------------------------------------------|
| tutorial1.js          | Title Test - Open page and verify title
| linkTextURL1.js       | Link Text/URL Test - Verify Link Text and URL
| copyright1.js         | Copyright Test - Verify Link Text and URL
| formFillSubmit1.js 	| Populate Form Fields and Submit
| showHideVerify1.js 	| Click Show/Hide Button and Verify Text
| dynamicBrowser.js     | Dymanically Invoke Different Browsers
| callbackPromise.js    | Compares callbacks VS promises
| debugExample1.js      | Example Shows Several Methods on How to Debug
| formFieldValidation.js| Example of Validating Errors
| commonLib.js          | Example of Reusable Functions (library)
| dataLoopExample1.js   | Looping Static Data to Validate URL Link/Text
| dataLoopExample2.js   | Looping Static Data to Populate Form Fields
| linkTextURL2.js       | Link Text/URL Test By Looping Through Elements
| cssValidation1.js     | Example how to validate several CSS properties
| saucelabs.js          | Example how to use cloud based test site (saucelabs)
| gruntSauceLabs.js     | Example how to use grunt + grunt-webdriver + saucelabs

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
 $ java -jar selenium-server-standalone-2.46.0.jar
```

Firefox<br>
Install firefox browser, if not already installed.

```
$ git clone https://github.com/onewithhammer/WebDriverIOTutorial.git
$ cd WebDriverIOTutorial
$ sudo npm install
```

run single test:<br>
$ mocha [test-script-filename]
```
$ mocha tutorial1.js
```

Note: saucelabs.js & gruntSauceLabs.js - You will need a saucelabs account in order to set the environment variables for SAUCE_USERNAME & SAUCE_ACCESS_KEY

```
$ export SAUCE_USERNAME=[your saucelabs username]
$ export SAUCE_ACCESS_KEY=[your saucelabs access key]
```

run grunt:<br>
$ grunt [task name]

````
$ grunt webdriver
```

## License
MIT



