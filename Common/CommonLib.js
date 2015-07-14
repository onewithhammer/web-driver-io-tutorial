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
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]", function(err, e) {
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
        .getText("//ul[@class='alert alert-danger']/li[" + idx + "]", function(err, e) {
            console.log('Error found: ' + e);
            (e).should.be.equal('Please enter last name');
        })
        .call(callback);
};
// export the function
module.exports.verifyLastNameCheckError = verifyLastNameCheckError;
