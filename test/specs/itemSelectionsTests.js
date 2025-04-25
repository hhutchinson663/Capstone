import ItemSelections from '../pageobjects/itemSelections.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
       await ItemSelections.open()
       await ItemSelections.verifyPricingDetails() 
       await ItemSelections.verifyPayPalMessage()
    })
})