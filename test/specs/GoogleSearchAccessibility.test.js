import GoogleHomePage from '../pageobjects/GoogleHome.page';
const axeSource = require('axe-core').source;

describe('Google Search Accessibility Test', () => {

    it('Accessibility Test', () => {

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

        browser.execute(axeSource);
        let results = browser.executeAsync(function (done) {

            axe.run(function (err, results) {
                if(err) done (err)
                done(results);
            });

        });
        console.log("Accessibility Reports ++++++++++++++++ " + results.violations);

        for(var violationIndex=0; violationIndex<results.violations.length; violationIndex++) {
            console.log(results.violations[violationIndex]);
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        }

    });

});


