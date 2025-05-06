import { $, browser } from '@wdio/globals'
import Base from './base.js';
import { expect } from '@wdio/globals'

class MyStore extends Base {

get myStoreButton() {
     return $('//button[@data-testid="my-store-button"]')
}

get myStoreHeading() {
    return $('//p[@data-testid="header-drawer-title"]') 
}

get map() {
    return $('.labelCanvas') 
}

get zoomOutButton() {
    return $('#ZoomOutButton') 
}

get zoomInButton() {
     return $('#ZoomInButton')
}

get storeOpen() {
     return $('//p[contains(text(),"Open")]')
}

get currentlyShoppingHeading() {
     return $('//p[contains(text(),"You\'re Currently Shopping:")]')
}

get addressHeading() {
     return $('//span[contains(text(),"Address")]')
}

get hoursHeading() {
     return $('//span[contains(text(),"Hours")]')
}

get curbsideButton() {
    return $('//div[@alt="Curbside"]') 
}

get curbsidePickupHeading() {
     return $('//h1[contains(text(),"Curbside Pickup")]')
}

get localAdbutton() {
    return $('//div[@alt="Local Ad"]') 
}

get localAdHeading() {
     return $('//h2[contains(text(),"Local Ad")]')
}

get workshopButton() {
     return $('//div[@alt="Workshops"]')
}

get workshopHeading() {
     return $('//h1[contains(text(),"Free Workshops & Classes")]')
}

async navigateToMyStore() {
     await expect(this.feedbackButton).toBeDisplayed()
     await this.myStoreButton.click()
     await expect(this.myStoreHeading).toBeDisplayed()
}

     async checkMap() {
     await expect(this.map).toBeDisplayed()
     await this.zoomOutButton.click()
     await this.zoomOutButton.click()
     await this.zoomInButton.click()
     }

     async checkMyStoreHeadings() {
     await expect(this.storeOpen).toBeDisplayed()
     await expect(this.currentlyShoppingHeading).toBeDisplayed()
     await expect(this.addressHeading).toBeDisplayed()
     await expect(this.hoursHeading).toBeDisplayed()
          }

     async checkCurbside() {
     await expect(this.curbsideButton).toBeDisplayed()
     await this.curbsideButton.click()
     await expect(this.curbsidePickupHeading).toBeDisplayed()
     await browser.back()
     }

     async checkLocalAd() {
     await expect(this.localAdbutton).toBeDisplayed()
     await this.localAdbutton.click()
     await expect(this.localAdHeading).toBeDisplayed()
     await browser.back()
     }

     async checkWorkshop() {
     await expect(this.workshopButton).toBeDisplayed()
     await this.workshopButton.click()
     await expect(this.workshopHeading).toBeDisplayed()
     }

     async checkMyStore() {
     await this.goTo('https://www.homedepot.com/')
     await this.navigateToMyStore()
     await this.checkMap()
     await this.checkMyStoreHeadings()
     await this.checkCurbside()
     await this.navigateToMyStore()
     await this.checkLocalAd()
     await this.navigateToMyStore()
     await this.checkWorkshop()
     }

}

export default new MyStore();