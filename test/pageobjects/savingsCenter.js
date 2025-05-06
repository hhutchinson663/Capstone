import { $, browser } from '@wdio/globals'
import Base from './base.js';
import { expect } from '@wdio/globals'

class SavingsCenter extends Base {
    
    get moreWaysToSaveTitle() {
        return $('//h2[contains(text(),"More Ways to Save")]')
    }

    get specialBuyLearnMoreLink() {
        return $('//a[@href="https://www.homedepot.com/b/Special-Buys/N-5yc1vZ1z11ao3"]')
    }

    get newLowerPriceLearnMoreLink() {
        return $('//a[@href="https://www.homedepot.com/b/New-Lower-Prices/N-5yc1vZ1z11adg"]')
    }

    get bulkPriceLearnMoreLink() {
        return $('//a[@aria-label="Navigate to Bulk Price"]')
    }

    get bulkPricingTitle() {
        return $('//h1[contains(text(),"Bulk Pricing")]')
    }

    savingsCenterFilter(MoreWaysToSaveOptions) {
        return $(`(//button[.//span[contains(text(),"Savings Center: ${MoreWaysToSaveOptions}")]])[2]`)
    }

    async checkSavingsCenterPage() { 
        await expect(this.savingCenterTitle).toBeDisplayed()
        await expect(this.feedbackButton).toBeDisplayed()
    }

    async navigateToMoreWaysToSaveSection() {
        await this.checkSavingsCenterPage()
        await browser.scroll(0,2250)
        await expect(this.moreWaysToSaveTitle).toBeDisplayed()
    }

    async checkSavingsCenterFilter(savingsCenterFilter) {
        await expect(this.feedbackButton).toBeDisplayed()
        await this.savingsCenterFilter(savingsCenterFilter).waitForDisplayed({timeout: 10000})
        await expect(this.savingsCenterFilter(savingsCenterFilter)).toBeDisplayed()
    }

    async checkBulkPricePage() {
        await expect(this.feedbackButton).toBeDisplayed()
        await expect(this.bulkPricingTitle).toBeDisplayed()
    }

    async checkSpecialBuys() {
        await this.goTo('https://www.homedepot.com/c/Savings_Center')
        await this.checkSavingsCenterPage()
        await this.navigateToMoreWaysToSaveSection()
        await this.specialBuyLearnMoreLink.click()
        await this.checkSavingsCenterFilter('Special Buys')
    }

    async checkNewLowerPrices() {
        await this.goTo('https://www.homedepot.com/c/Savings_Center')
        await this.checkSavingsCenterPage()
        await this.navigateToMoreWaysToSaveSection() 
        await this.newLowerPriceLearnMoreLink.click()
        await this.checkSavingsCenterFilter('New Lower Prices')
    }

    async checkBulkPricing() {
        await this.goTo('https://www.homedepot.com/c/Savings_Center')
        await this.checkSavingsCenterPage()
        await this.navigateToMoreWaysToSaveSection()
        await this.bulkPriceLearnMoreLink.click()
        await this.checkBulkPricePage()
    }
    
}

export default new SavingsCenter();