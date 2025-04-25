import BenefitsButtons from '../pageobjects/benefitsButtons.js'

describe('Check Benefits Buttons Tests', () => {
    it('Benefits buttons', async () => {
        await BenefitsButtons.open()
        await BenefitsButtons.checkHealthWellnessTab()
        await BenefitsButtons.financialPlanningTab.click()
        await BenefitsButtons.checkFinancialPlanningTab()
        await BenefitsButtons.discountForAssociatesTab.click()
        await BenefitsButtons.checkDiscountsTab()
        await BenefitsButtons.learnMoreButton.click() 
    })
})