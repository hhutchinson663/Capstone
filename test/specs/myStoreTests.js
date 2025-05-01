import MyStore from '../pageobjects/myStore.js'


describe('My Store', () => {
    it('check parts of My Store component', async () => {
        await MyStore.open()
        await MyStore.navigateToMyStore()
        await MyStore.checkMap()
        await MyStore.checkMyStoreHeadings()
        await MyStore.checkCurbside()
        await MyStore.navigateToMyStore()
        await MyStore.checkLocalAd()
        await MyStore.navigateToMyStore()
        await MyStore.checkWorkshop()
    })
})