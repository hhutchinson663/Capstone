import { browser } from '@wdio/globals'

export default class Base {
    get feedbackButton() {
        return $('//img[@src="https://pdx1.qualtrics.com/WRQualtricsSiteIntercept/Graphic.php?IM=IM_cUuBXdlHtK4XTdr"]')
    }

    get savingCenterTitle() {
        return $('//h1[contains(text(),"SAVINGS CENTER")]')
    }

        goTo(endpoint) {
            return browser.url(`${endpoint}`)
        }


}
