//
//  verifyFirstNameCheckError()
//
//    Description:
//      Verifies the first name form validation error message
//
//    Input:
//      number - index of error (1-5)
//    Output:
//      none
//
var verifyFirstNameCheckError = function () {
    var idx = arguments[0],
        callback = arguments[arguments.length - 1];

    this
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Please enter first name');
        })
         .call(callback);
};
// export the function
module.exports.verifyFirstNameCheckError = verifyFirstNameCheckError;

//
//  verifyLastNameCheckError()
//
//    Description:
//      Verifies the last name form validation error message
//
//    Input:
//      number - index of error (1-5)
//    Output:
//      none
//
var verifyLastNameCheckError = function () {
    var idx = arguments[0],
        callback = arguments[arguments.length - 1];

    this
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Please enter last name');
        })
        .call(callback);
};
// export the function
module.exports.verifyLastNameCheckError = verifyLastNameCheckError;

//
//  verifyAddressCheckError()
//
//    Description:
//      Verifies the address form validation error message
//
//    Input:
//      number - index of error (1-5)
//    Output:
//      none
//
var verifyAddressCheckError = function () {
    var idx = arguments[0],
        callback = arguments[arguments.length - 1];

    this
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Please enter address');
        })
        .call(callback);
};

// export the function
module.exports.verifyAddressCheckError = verifyAddressCheckError;


//
//  verifyCityCheckError()
//
//    Description:
//      Verifies the City form validation error message
//
//    Input:
//      number - index of error (1-5)
//    Output:
//      none
//
var verifyCityCheckError = function () {
    var idx = arguments[0],
        callback = arguments[arguments.length - 1];

    this
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Please enter city');
        })
        .call(callback);
};

// export the function
module.exports.verifyCityCheckError = verifyCityCheckError;


//
//  verifyStateCheckError()
//
//    Description:
//      Verifies the state form validation error message
//
//    Input:
//      number - index of error (1-5)
//    Output:
//      none
//
var verifyStateCheckError = function () {
    var idx = arguments[0],
        callback = arguments[arguments.length - 1];

    this
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Please enter state');
        })
        .call(callback);
};

// export the function
module.exports.verifyStateCheckError = verifyStateCheckError;


//
//  verifyInvalidStateError()
//
//    Description:
//      Verifies the state form validation invalid error message
//
//    Input:
//      none
//    Output:
//      none
//
var verifyInvalidStateError = function () {
    var callback = arguments[arguments.length - 1];

    this
        .getAttribute("#state", "placeholder").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Invalid State');
        })
        .call(callback);
};

// export the function
module.exports.verifyInvalidStateError = verifyInvalidStateError;
