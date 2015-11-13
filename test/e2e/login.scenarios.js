describe('Login Application', function() {

    beforeEach(function () {
        browser.get('app/index.html');
    });

    describe('user type user', function() {
        it('should see the login page', function() {
            expect(element(by.css('h2')).getText()).toContain('Please login');
        });

        it('should be able to login', function() {

            element(by.css('.username')).sendKeys('user');
            element(by.css('.password')).sendKeys('password');
            element(by.css('.submit-button')).click();
            expect(element(by.css('h2')).getText()).toContain('Logged In');

        });
    });

});