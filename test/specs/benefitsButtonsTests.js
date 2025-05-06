import BenefitsButtons from '../pageobjects/benefitsButtons.js'

describe('Check Benefits Buttons Tests', () => {
    it('Benefits buttons', async () => {
        await BenefitsButtons.checkBenefitsButtons()
    })
})