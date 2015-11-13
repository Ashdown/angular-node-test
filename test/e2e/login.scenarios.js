describe('Login Application', function() {

    beforeEach(function () {
        browser.get('app/index.html');
    })

    it('should show the page header', function () {
        expect(element(by.css('h1')).getText()).toContain('My Application');
    });
});