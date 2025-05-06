import Base from './base.js';


class SavingsCenter extends Base {
    
    get moreWaysToSaveTitle() {
        return $('//h2[contains(text(),"More Ways to Save")]')
    }

    get bulkPricingTitle() {
        return $('//h1[contains(text(),"Bulk Pricing")]')
    }

    learnMoreLinks(linkOptions) {
        return $(`//a[@aria-label="Navigate to ${linkOptions}"]`)
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
        await this.savingsCenterFilter(savingsCenterFilter).waitForDisplayed()
        await expect(this.savingsCenterFilter(savingsCenterFilter)).toBeDisplayed()
    }
    
    async checkSavingsCenterOptions(option) {
        await this.goTo('https://www.homedepot.com/c/Savings_Center')
        await this.checkSavingsCenterPage()
        await this.navigateToMoreWaysToSaveSection()
        await this.learnMoreLinks(option).click()
            if( option === "Bulk Price") {
                await expect(this.feedbackButton).toBeDisplayed()
                await expect(this.bulkPricingTitle).toBeDisplayed()
            } else {
                await this.checkSavingsCenterFilter(option)
            }   
    }
}

export default new SavingsCenter();