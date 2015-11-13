describe('Login Application', function() {

    beforeEach(function () {
        browser.get('app/index.html');
    });

    it('should show the login page', function() {
        expect(element(by.css('h2')).getText()).toContain('Please Login');
    });

    describe('user type user', function() {
        it('should be able to login', function() {

            element(by.css('.username')).sendKeys('user');
            element(by.css('.password')).sendKeys('password');
            element(by.css('.submit-button')).click();
            expect(element(by.css('h2')).getText()).toContain('Logged In');

        });
    });

    describe('manager type user', function() {

        it('should be able to login', function() {

            element(by.css('.username')).sendKeys('manager');
            element(by.css('.password')).sendKeys('password');
            element(by.css('.submit-button')).click();
            expect(element(by.css('h2')).getText()).toContain('Logged In');

        });
    });

    describe('invalid type user', function() {

        it('should not be able to login', function() {
            element(by.css('.username')).sendKeys('invalid');
            element(by.css('.password')).sendKeys('password');
            element(by.css('.submit-button')).click();
            expect(element(by.css('h2')).getText()).not.toContain('Logged In');
        });
    });

});