import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GoogleHomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get googleSearchTextBox() { return $("[title='Search']") }
    get googleSearchButton() { return $("[name='btnK']") }
    get introAgreeButton() { return $("#introAgreeButton").$('span') }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new GoogleHomePage();
