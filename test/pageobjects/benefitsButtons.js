import { $ } from '@wdio/globals'
import Base from './base.js';
import { expect } from '@wdio/globals'

class BenefitsButtons extends Base {
   get healthWellnessTab() {
    return $('[id="fusion-tab-health&wellness"]')
   }

   get financialPlanningTab() {
    return $('#fusion-tab-financialplanning')
   }

   get discountForAssociatesTab() {
    return $('#fusion-tab-discountsforassociates')
   }

   get healthInsuranceTitle() {
    return $('//h3[contains(text(),"HEALTH INSURANCE")]')
   }

   get timeOffTitle() {
    return $('//h3[contains(text(),"TIME OFF")]')
   }

   get vacationTitle() {
    return $('//p[.//strong[contains(text(),"Vacation")]]')
   }

   get sickTimeTitle() {
    return $('//p[.//strong[contains(text(),"Sick Time")]]')
   }

   get disabilityTitle() {
    return $('//p[.//strong[contains(text(),"Disability")]]')
   }

   get additionalBenefitsTitle() {
    return $('//p[.//strong[contains(text(),"Additional Benefits")]]')
   }

   get eapTitle() {
    return $('//h3[contains(text(),"EMPLOYEE ASSISTANCE PROGRAM")]')
   }

   get additionalResourcesTitle() {
    return $('//h3[contains(text(),"ADDITIONAL RESOURCES FOR A HEALTHY LIFESTYLE")]')
   }

   get title401k() {
    return $('//h3[contains(text(),"401K")]')
   }

   get collegePlanningTitle() {
    return $('//h3[contains(text(),"COLLEGE PLANNING")]')
   }

   get tuitionReimbursementTitle() {
    return $('//h3[contains(text(),"TUITION REIMBURSEMENT")]')
   }

   get employeeStockPurchasePlanTitle() {
    return $('//h3[contains(text(),"EMPLOYEE STOCK PURCHASE PLAN")]')
   }

   get profitSharingBonusTitle() {
    return $('//h3[contains(text(),"PROFIT-SHARING BONUSES")]')
   }

   get gymTitle() {
    return $('//h3[contains(text(),"GYM")]')
   }

   get electronicsTitle() {
    return $('//h3[contains(text(),"ELECTRONICS")]')
   }

   get foodAndGroceryTitle() {
    return $('//h3[contains(text(),"FOOD AND GROCERY")]')
   }

   get learnMoreButton() {
    return $('//a[@aria-label="Learn More opens in new tab"]')
   }


   open() {
    return super.open('https://careers.homedepot.com/our-benefits');
}

async checkHealthWellnessTab() {
    await expect(this.healthWellnessTab).toBeDisplayed()
    await expect(this.healthInsuranceTitle).toBeDisplayed()
    await expect(this.timeOffTitle).toBeDisplayed()
    await expect(this.vacationTitle).toBeDisplayed()
    await browser.scroll(0, 800)
    await expect(this.sickTimeTitle).toBeDisplayed()
    await expect(this.disabilityTitle).toBeDisplayed()
    await expect(this.additionalBenefitsTitle).toBeDisplayed()
    await expect(this.eapTitle).toBeDisplayed()
    await expect(this.additionalResourcesTitle).toBeDisplayed()
}

async checkFinancialPlanningTab() {
    await expect(this.title401k).toBeDisplayed()
    await expect(this.collegePlanningTitle).toBeDisplayed()
    await expect(this.tuitionReimbursementTitle).toBeDisplayed()
    await expect(this.employeeStockPurchasePlanTitle).toBeDisplayed()
    await browser.scroll(0,500)
    await expect(this.profitSharingBonusTitle).toBeDisplayed()
}

async checkDiscountsTab() {
    await expect(this.gymTitle).toBeDisplayed()
    await expect(this.electronicsTitle).toBeDisplayed()
    await expect(this.foodAndGroceryTitle).toBeDisplayed()
}

}

export default new BenefitsButtons();