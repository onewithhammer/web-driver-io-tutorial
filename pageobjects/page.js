function Page () {
}

Page.prototype.open = function () {
    browser.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html');
}

module.exports = new Page();