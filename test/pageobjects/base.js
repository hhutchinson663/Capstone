import { expect } from '@wdio/globals'
import { $, browser } from '@wdio/globals'

export default class Base {
    get feedbackButton() {
        return $('img[alt="Feedback Link"]')
    }

    get savingCenterTitle() {
        return $('//h1[contains(text(),"SAVINGS CENTER")]')
    }

    get liveChat() {
        return $('//div[contains(@aria-label, "Open chat")]')
    }

  seasonalValue = "Super Savings"

        goTo(endpoint) {
            return browser.url(`${endpoint}`)
        }


}
