import GoogleHomePage from '../pageobjects/GoogleHome.page';

describe('Google Search Performance Test', () => {

    before(() => {
        browser.enablePerformanceAudits()
    });

    it('Performance Test', () => {

        GoogleHomePage.open();
        expect(browser.getTitle()).to.equal('Google');

        console.log(browser.getMetrics()); // Gets most common used performance metrics
        console.log(browser.getDiagnostics()); // Diagnostics about the page load
        console.log(browser.getMainThreadWorkBreakdown()); // Breakdown of all main thread task and their total duration
        console.log(browser.getPerformanceScore()); // Lighthouse performance scoring
    });

});


