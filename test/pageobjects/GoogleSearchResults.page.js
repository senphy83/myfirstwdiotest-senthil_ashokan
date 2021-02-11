import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GoogleSearchResultsPage extends Page {
    /**
     * define selectors using getter methods
     */


   /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }

}

export default new GoogleSearchResultsPage();
