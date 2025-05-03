import SavingsCenter from '../pageobjects/savingsCenter.js'

describe('Check Savings Center Tests', () => {

    it('Special Buys', async() => {
        await SavingsCenter.goTo()
        await SavingsCenter.checkSpecialBuys()
    })

    it('New Lower Price', async() => {
        await SavingsCenter.goTo()
        await SavingsCenter.checkNewLowerPrices
    })

    it('Bulk Pricing', async() => {
        await SavingsCenter.goTo()
        await SavingsCenter.checkBulkPricing()
    })

})