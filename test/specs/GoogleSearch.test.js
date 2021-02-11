import GoogleHomePage from '../pageobjects/GoogleHome.page';

describe('Google Search Test', () => {

    it('Open Google Home Page', () => {

        GoogleHomePage.open();
        expect(browser.getTitle()).to.equal('Google');
        browser.pause(5000); // can create a method to wait for the locator dynamically
        browser.switchToFrame(0);
        GoogleHomePage.introAgreeButton.click();
        browser.switchToParentFrame();
        GoogleHomePage.googleSearchTextBox.setValue('Selenium');
        browser.pause(1000); // can create a method to wait for the locator dynamically
        GoogleHomePage.googleSearchTextBox.keys('Enter');
        expect(browser.getTitle()).to.equal('Selenium - Google Search');

    });

    it('Count Number of Links', () => {
        expect($$('a')).to.have.lengthOf.above(100);
    });

});


