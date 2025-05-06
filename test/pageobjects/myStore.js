import Base from './base.js';

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

     get localAdHeading() {
     return $('//h2[contains(text(),"Local Ad")]')
     }

     zoomingButtons(inOrOut) {
     return $(`#Zoom${inOrOut}Button`) 
     }

     storeOpenCurrentlyShoppingHeading(string) {
     return $(`//p[contains(text(),"${string}")]`)
     }

     addressAndHoursHeadings(string) {
     return $(`//span[contains(text(),"${string}")]`)
     }

     curbsideLocalAdWorkshopButtons(buttonOptions) {
     return $(`//div[@alt="${buttonOptions}"]`)
     }

     curbsideAndWorkshopHeadings(string) {
     return $(`//h1[contains(text(),"${string}")]`)
     }

     async navigateToMyStore() {
          await expect(this.feedbackButton).toBeDisplayed()
          await this.myStoreButton.click()
          await expect(this.myStoreHeading).toBeDisplayed()
     }

     async checkMap() {
          await expect(this.map).toBeDisplayed()
          await this.zoomingButtons("Out").click()
          await this.zoomingButtons("Out").click()
          await this.zoomingButtons("In").click()
          await expect(this.map).toBeDisplayed()
     }

     async checkMyStoreHeadings() {
          await expect(this.storeOpenCurrentlyShoppingHeading("Open")).toBeDisplayed()
          await expect(this.storeOpenCurrentlyShoppingHeading("You\'re Currently Shopping:")).toBeDisplayed()
          await expect(this.addressAndHoursHeadings("Address")).toBeDisplayed()
          await expect(this.addressAndHoursHeadings("Hours")).toBeDisplayed()
     }

     async checkCurbside() {
          await expect(this.curbsideLocalAdWorkshopButtons("Curbside")).toBeDisplayed()
          await this.curbsideLocalAdWorkshopButtons("Curbside").click()
          await expect(this.curbsideAndWorkshopHeadings("Curbside Pickup")).toBeDisplayed()
          await browser.back()
     }

     async checkLocalAd() {
          await expect(this.curbsideLocalAdWorkshopButtons("Local Ad")).toBeDisplayed()
          await this.curbsideLocalAdWorkshopButtons("Local Ad").click()
          await expect(this.localAdHeading).toBeDisplayed()
          await browser.back()
     }

     async checkWorkshop() {
          await expect(this.curbsideLocalAdWorkshopButtons("Workshops")).toBeDisplayed()
          await this.curbsideLocalAdWorkshopButtons("Workshops").click()
          await expect(this.curbsideAndWorkshopHeadings("Free Workshops & Classes")).toBeDisplayed()
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