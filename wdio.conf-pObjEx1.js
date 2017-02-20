exports.config = {
    specs: [
        'pageObjectExample1.js'
    ],
    exclude: [
    ],
    capabilities: [{
        browserName: 'firefox'
    }],
    sync: true,
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    coloredLogs: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd'
    },
};
