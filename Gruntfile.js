// Default Gruntfile - used to build/test my Github project
//
// This grunt configuration can be run locally or from Travis CL
//
// To Run:
//  $ grunt webdriver

// Note: The grunt-webdriver plug calls wdio as the runner.

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		webdriver: {
			test: {
				configFile: 'wdio.conf-gruntfile.js'
			}
		}
	});

grunt.loadNpmTasks('grunt-webdriver');
// Default task(s).
grunt.registerTask('default', ['webdriver']);
};