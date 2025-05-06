import SavingsCenter from '../pageobjects/savingsCenter.js'

describe('Check Savings Center Tests', () => {

    it('Special Buys', async() => {
        await SavingsCenter.checkSpecialBuys()
    })

    it('New Lower Price', async() => {
        await SavingsCenter.checkNewLowerPrices
    })

    it('Bulk Pricing', async() => {
        await SavingsCenter.checkBulkPricing()
    })

})