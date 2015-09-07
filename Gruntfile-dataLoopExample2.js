// Gruntfile for dataLoopExample2.js to run against saucelabs
//
// To Run:
//  $ grunt --gruntfile Gruntfile-dataLoopExample2.js webdriver

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      test: {
        configFile: 'wdio.conf-DataLoopExample2.js'
      }
    }
  });

grunt.loadNpmTasks('grunt-webdriver');
// Default task(s).
grunt.registerTask('default', ['webdriver']);
};

