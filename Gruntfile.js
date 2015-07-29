module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      options: {
          host: 'ondemand.saucelabs.com',
          port: 80,
          user: process.env.SAUCE_USERNAME,
          key: process.env.SAUCE_ACCESS_KEY,
          tags: ['saucelabs'],
          name: 'This is an example test script using grunt-driver and saucelabs'
      },
      ieexample: {
        tests: ['gruntSaucelabs.js'],
        options: {
          desiredCapabilities: {
            browserName: 'internet explorer',
            version: '10.0',
            platform: 'Windows 7'
          }
        }
      },
      chromeexample: {
        tests: ['gruntSaucelabs.js'],
        options: {
          desiredCapabilities: {
            browserName: 'chrome',
            version: '42.0',
            platform: 'Windows 8'
          }
        }
      },
      safariexample: {
        tests: ['gruntSaucelabs.js'],
        options: {
          desiredCapabilities: {
            browserName: 'safari',
            version: '8.0',
            platform: 'OS X 10.10'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webdriver');
};