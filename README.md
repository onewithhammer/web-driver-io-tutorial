# Web Driver IO Tutorial

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

* test web site functionality
* test JavaScript functionality
* can be run manually
* can be run automatically
* easy to learn language for non programmers
	* Q/A personnel with basic knowledge of HTML and JavaScript
* use open source software

## Technologies

List of technologies I choose:

* mocha – test runner - executes the test scripts
* shouldjs – assertion library
* webdriverio – browser control bindings (language bindings)
* selenium – browser abstraction and running factory
* Browser/Mobile drivers + browsers 
	* Firefox (Browser only)
	* Chrome (Browser and driver)
	* IE (Browser and driver)
	* Safari (Browser and driver plug-in)

Tutorial Files:

| Filename            | Description                                     |
| :-------------------|:------------------------------------------------|
| Tutorial1.js 				| Title Test - Open page and verify title
| LinkTextURL1.js 		| Link Text/URL Test - Verify Link Text and URL
| Copyright1.js 			| Copyright Test - Verify Link Text and URL
| FormFillSubmit1.js 	| Populate Form Fields and Submit
| ShowHideVerify1.js 	| Click Show/Hide Button and Verify Text

