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
module.exports.verifyLastNameCheckError = verifyLastNameCheckError;
