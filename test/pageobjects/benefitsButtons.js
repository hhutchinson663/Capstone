import { $ } from '@wdio/globals'
import Base from './base.js';
import { expect } from '@wdio/globals'

class BenefitsButtons extends Base {

   benefitsTabSelector(tab) {
    return $(`#fusion-tab-${tab}`)
   }

   healthInsuranceOrTimeOffTitles(string) {
    return $(`//h3[contains(text(),"${string}")]`)
   }

   healthAndWellnessSelectors(benefitsTitle) {
    return $(`//p[.//strong[contains(text(),"${benefitsTitle}")]]`)
   }

   additionalHealthFinancialPlanningAndDiscountsTabTitles(title) {
    return $(`//h3[contains(text(),"${title}")]`)
   }

   get learnMoreButton() {
    return $('//a[@aria-label="Learn More opens in new tab"]')
   }

async checkHealthWellnessTab() {
    await expect(this.benefitsTabSelector('health\\&wellness')).toBeDisplayed()
    await expect(this.healthInsuranceOrTimeOffTitles("HEALTH INSURANCE")).toBeDisplayed()
    await expect(this.healthInsuranceOrTimeOffTitles("TIME OFF")).toBeDisplayed()
    await expect(this.healthAndWellnessSelectors("Vacation")).toBeDisplayed()
    await browser.scroll(0, 800)
    await expect(this.healthAndWellnessSelectors("Sick Time")).toBeDisplayed()
    await expect(this.healthAndWellnessSelectors("Disability")).toBeDisplayed()
    await expect(this.healthAndWellnessSelectors("Additional Benefits")).toBeDisplayed()
    await expect(this.additionalHealthFinancialPlanningAndDiscountsTabTitles("EMPLOYEE ASSISTANCE PROGRAM")).toBeDisplayed()
    await expect(this.additionalHealthFinancialPlanningAndDiscountsTabTitles("ADDITIONAL RESOURCES FOR A HEALTHY LIFESTYLE")).toBeDisplayed()
}

async checkFinancialPlanningTab() {
    await this.benefitsTabSelector('financialplanning').click()
    await expect(this.additionalHealthFinancialPlanningAndDiscountsTabTitles("401K")).toBeDisplayed()
    await expect(this.additionalHealthFinancialPlanningAndDiscountsTabTitles("COLLEGE PLANNING")).toBeDisplayed()
    await expect(this.additionalHealthFinancialPlanningAndDiscountsTabTitles("TUITION REIMBURSEMENT")).toBeDisplayed()
    await expect(this.additionalHealthFinancialPlanningAndDiscountsTabTitles("EMPLOYEE STOCK PURCHASE PLAN")).toBeDisplayed()
    await browser.scroll(0,500)
    await expect(this.additionalHealthFinancialPlanningAndDiscountsTabTitles("PROFIT-SHARING BONUSES")).toBeDisplayed()
}

async checkDiscountsTab() {
    await this.benefitsTabSelector('discountsforassociates').click()
    await expect(this.additionalHealthFinancialPlanningAndDiscountsTabTitles("GYM")).toBeDisplayed()
    await expect(this.additionalHealthFinancialPlanningAndDiscountsTabTitles("ELECTRONICS")).toBeDisplayed()
    await expect(this.additionalHealthFinancialPlanningAndDiscountsTabTitles("FOOD AND GROCERY")).toBeDisplayed()
}

async verifyOrangeLife(expectedURL) {
    await this.learnMoreButton.click()
    const newWindow = await browser.getWindowHandles()
    expect(newWindow.length).toBeGreaterThan(1)
    await browser.switchToWindow(newWindow[1]) 
    const currentURL = await browser.getUrl()
    await expect(currentURL).toBe(expectedURL)
}

async checkBenefitsButtons() {
    await this.goTo('https://careers.homedepot.com/our-benefits')
    await this.checkHealthWellnessTab()
    await this.checkFinancialPlanningTab()
    await this.checkDiscountsTab()
    await this.verifyOrangeLife('https://learn.bswift.com/orangelife')
}


}

export default new BenefitsButtons();