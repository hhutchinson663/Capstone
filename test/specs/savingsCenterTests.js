import SavingsCenter from '../pageobjects/savingsCenter.js'

describe('Check Savings Center Tests', () => {

    it('Special Buys', async() => {
        await SavingsCenter.open()
        await SavingsCenter.checkSavingsCenterPage()
        await SavingsCenter.navigateToMoreWaysToSaveSection()
        await SavingsCenter.specialBuyLearnMoreLink.click()
        await SavingsCenter.checkSavingsCenterFilter('Special Buys')
    })

    it('New Lower Price', async() => {
        await SavingsCenter.open()
        await SavingsCenter.checkSavingsCenterPage()
        await SavingsCenter.navigateToMoreWaysToSaveSection() 
        await SavingsCenter.newLowerPriceLearnMoreLink.click()
        await SavingsCenter.checkSavingsCenterFilter('New Lower Prices')
    })

    it('Bulk Pricing', async() => {
        await SavingsCenter.open()
        await SavingsCenter.checkSavingsCenterPage()
        await SavingsCenter.navigateToMoreWaysToSaveSection()
        await SavingsCenter.bulkPriceLearnMoreLink.click()
        await SavingsCenter.checkBulkPricePage()
    })

})