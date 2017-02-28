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
    capabilities: [
        {
            // local default browser
            browserName: 'firefox'
        }
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
    config.host = 'ondemand.saucelabs.com';
    config.port = 80;

    config.capabilities[0].browserName = 'internet explorer';
    config.capabilities[0].version = '10.0';
    config.capabilities[0].platform =  'Windows 7';
    config.capabilities[0].tags[0] = 'saucelabs';
    config.capabilities[0].name = 'This is an example using wdio + saucelabs - IE, 10.0, Win7';
}

exports.config = config;
