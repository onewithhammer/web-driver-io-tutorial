// WDIO config file used to build/test my Github project
//
// This grunt configuration can be run locally or from Travis CL

// To Run:
//  $ grunt webdriver
exports.config = {

    host: (process.env.BUILD_NUMBER) ? 'localhost':'ondemand.saucelabs.com',
    port: (process.env.BUILD_NUMBER) ? 4445:80,
    //
    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack and Testing Bot (other cloud providers
    // should work too though). These services define specific user and key (or access key)
    // values you need to put in here in order to connect to these services.
    //
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    
    //
    // If you are using Sauce Labs WebdriverIO takes care about updating the job information
    // once the test is done. This option is set to `true` per default.
    //
    updateJob: true,
    
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the location of this
    // file.
    //
    specs: [
        'tutorial1.js',
        'copyright1.js',
        'cssValidation1.js',
        'dataLoopExample2.js',
        //'formFillSubmit1.js',
        //'formFieldValidation.js',
        //'linkTextURL1.js',
        //'linkTextURL2.js',
        //'carouselExample1.js',
        //'showHideVerify1.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilties at the same
    // time. Depending on the number of capabilities WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude option in
    // order to group specific specs to a specific capability.
    //
    // If you have trouble getting all important capabilities together check out Sauce Labs
    // platform configurator. A great tool to configure your capabilities.
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        browserName: 'chrome',
            version: '42.0',
            platform: 'Windows 8',
            name: 'Example using wdio + saucelabs - Chrome V42.0 on Win8'
        },
        {
         browserName: 'internet explorer',
            version: '10.0',
            platform: 'Windows 7',
            name: 'Example using wdio + saucelabs - IE V10.0 on Win7'
        },
        {
            browserName: 'safari',
            version: '8.0',
            platform: 'OS X 10.10',
            name: 'Example using wdio + saucelabs - Safari V8.0 on OSX10.10'
        }
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity.
    logLevel: 'silent',
    //
    // Enables colors for log output
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Shorten url command calls by setting a base url. If your url parameter starts with "/"
    // the base url gets prepended.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 10000,
    //
    // Initialise the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as property. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Framework you want to run your specs with.
    // The following are supported: mocha, jasmine and cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the node package for the specific framework installed before running
    // any tests. If not please install the following package:
    // Mocha: `$ npm install mocha`
    // Jasmine: `$ npm install jasmine`
    // Cucumber: `$ npm install cucumber`
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // The following are supported: dot (default), spec and xunit
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporter: 'spec',
    
    //
    // =====
    // Hooks
    // =====
    // Run functions before or after the test. If one of them return with a promise, WebdriverIO
    // will wait until that promise got resolved to continue.
    // see also: http://webdriver.io/guide/testrunner/hooks.html
    //
    // Gets executed before all workers get launched.
    onPrepare: function() {
        // do something
    },
    //
    // Gets executed before test execution begins. At this point you will have access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before: function() {
        // do something
    },
    //
    // Gets executed after all tests are done. You still have access to all global variables from
    // the test.
    after: function() {
        // do something
    },
    //
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
    onComplete: function() {
        // do something
    }
};