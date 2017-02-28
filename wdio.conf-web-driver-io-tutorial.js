// WDIO config file used to build/test my Github project
//
// This WDIO configuration can be run locally or from Travis CL

// To Run:
//  $ wdio wdio.conf-web-driver-io-tutorial.js

exports.config = {

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    host: 'ondemand.saucelabs.com',
    port: 80,

    specs: [
        'tutorial1-wdio.js'
    ],
    exclude: [
    ],
    capabilities: [ {
         browserName: 'internet explorer',
            version: '10.0',
            platform: 'Windows 7',
            tags: ['saucelabs'],
            name: 'This is an example using wdio + saucelabs - IE, 10.0, Win7',
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER
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
