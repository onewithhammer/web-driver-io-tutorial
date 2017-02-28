// WDIO config file used to build/test my Github project
//
// This WDIO configuration can be run locally or from Travis CL

// To Run:
//  $ wdio wdio.conf-web-driver-io-tutorial.js

var config = {
    specs: [
        'tutorial1-wdio.js',
        'copyright1-wdio.js',
        'dataLoopExample2-wdio.js'
    ],
    exclude: [
    ],
    capabilities: [ {}
    ],
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost',
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    connectionRetryTimeout: 10000,
    connectionRetryCount: 1,
 
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd'
    },
};

// if CI environment setup configuration
if (process.env.CI) {
    config.user = process.env.SAUCE_USERNAME;
    config.key = process.env.SAUCE_ACCESS_KEY;
    config.host = 'localhost';
    config.port = 4445;

    
    config.capabilities.browserName = 'internet explorer';
    config.capabilities.version = '10.0';
    config.capabilities.platform =  'Windows 7';
    config.capabilities.tags[0] = 'saucelabs';
    config.capabilities.name = 'This is an example using wdio + saucelabs - IE, 10.0, Win7';
//    config.capabilities.tunnel-identifier = process.env.TRAVIS_JOB_NUMBER;
    config.capabilities.build = process.env.TRAVIS_BUILD_NUMBER;
} else {
    config.capabilities.browserName = 'firefox';
}

exports.config = config;
