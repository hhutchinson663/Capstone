import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Base {
    get feedbackButton() {
        return $('//img[@src="https://pdx1.qualtrics.com/WRQualtricsSiteIntercept/Graphic.php?IM=IM_cUuBXdlHtK4XTdr"]')
    }

    get savingCenterTitle() {
        return $('//h1[contains(text(),"SAVINGS CENTER")]')
    }
    
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

        open(path) {
            return browser.url(`${path}`)
        }


}
