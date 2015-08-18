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
    var idx = arguments[0];

    return this
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Please enter first name');
        });
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
    var idx = arguments[0];

    return this
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Please enter last name');
        });
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
    var idx = arguments[0];

    return this
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Please enter address');
        });
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
    var idx = arguments[0];

    return this
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Please enter city');
        });
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
    var idx = arguments[0];

    return this
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Please enter state');
        });
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

    return this
        .getAttribute("#state", "placeholder").then( function(e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Invalid State');
        });
};

// export the function
module.exports.verifyInvalidStateError = verifyInvalidStateError;
