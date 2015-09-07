// Gruntfile for gruntSaucelabs.js to run against saucelabs
//
// To Run:
//  $ grunt --gruntfile Gruntfile-gruntSaucelabs.js webdriver

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      test: {
        configFile: 'wdio.conf-gruntSaucelabs.js'
      }
    }
  });

grunt.loadNpmTasks('grunt-webdriver');
// Default task(s).
grunt.registerTask('default', ['webdriver']);
};
