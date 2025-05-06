import SavingsCenter from '../pageobjects/savingsCenter.js'

describe('Check Savings Center Tests', () => {

    it('Test special buys', async() => {
        await SavingsCenter.checkSavingsCenterOptions("Special Buy")
    }) 
    
    it('Test new lower price', async() => {
        await SavingsCenter.checkSavingsCenterOptions("New Lower Price")
    })  

    it('Test bulk price', async() => {
        await SavingsCenter.checkSavingsCenterOptions("Bulk Price")
    })    
})