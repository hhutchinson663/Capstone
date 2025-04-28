import ShopByCategory from '../pageobjects/shopByCategory.js'

describe('Shop By Category Tests', () => {
    it('verify all buttons in Shop By Category work and go to the appropriate page', async () => {
        await ShopByCategory.open()
        await ShopByCategory.checkDepartments()
    })
})