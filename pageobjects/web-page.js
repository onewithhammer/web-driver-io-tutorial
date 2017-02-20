// search-page.js
var page = require('./page');

var WebPage = Object.create(page, {

   form: { get: function () { return browser.element('#search-form'); } },


		getFirstname: { value: function () {
			return browser.getValue("#fname");
		} },

		setFirstname: { value: function (fn) {
			return browser.setValue("#fname", fn);
		} },

		getLastname: { value: function () {
			return browser.getValue("#lname");
		} },

		setLastname: { value: function (ln) {
			return browser.setValue("#lname", ln);
		} },

		getCopyright: { value: function () {
			return browser.getText("#copyright");
		} },

		waitForResults: { value: function () {
			return browser.waitForVisible("#search-results", 10000);
		} },

		getResults: { value: function () {
			return browser.getText("//h1");
		} },

    open: { value: function() {
         page.open.call(this);
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});
module.exports = WebPage;