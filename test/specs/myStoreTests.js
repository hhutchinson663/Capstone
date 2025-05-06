import MyStore from '../pageobjects/myStore.js'

describe('My Store', () => {
    it('check parts of My Store component', async () => {
        await MyStore.checkMyStore()
    })
})