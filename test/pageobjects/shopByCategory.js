import { $ } from '@wdio/globals'
import Base from './base.js';
import { expect } from '@wdio/globals'

class ShopByCategory extends Base {
  
// selector(string) {
//   return $(`//*[@data-contentful-field-id="title"][contains(text(),"${string}")]`)
// }
buttonSelectors(string) {
  return $(`//div[contains(text(),"${string}")]`)
}

headingSelectors(string) {
  return $(`//h1[contains(text(),"${string}")]`)
}


// specialBuysSelector(string) {
//   return $(`//*[contains(text(),"${string}")]`)
// }
"Blinds & Window Treatments"
button = ["Special Buy of the Day", "Special Savings", "Appliances", "Bath & Faucets",  "Building Materials", "Cleaning", "Decor & Furniture", "Electrical", "Flooring & Area Rugs", "Hardware", "Heating & Cooling", "Kitchen", "Lawn & Garden", "Lighting & Ceiling Fans", "Outdoor Living", "Paint", "Plumbing", "Storage & Organization", "Tools"]
"Window Treatments" 
heading = ["Special Buy of the Day", "SAVINGS CENTER", "Appliances", "Bath",  "Building Materials", "Cleaning", "Home Decor", "Electrical", "Flooring", "Hardware", "HEATING, VENTING & COOLING", "KITCHEN", "Garden Center", "Lighting", "Outdoors", "Paint", "Plumbing", "Storage and Organization", "Tools"]

async checkDepartments() {
  await expect(this.feedbackButton).toBeDisplayed()
  await browser.scroll(0, 3500)
  for (let i = 0; i < this.button.length; i++) {
    // console.log(`Checking category: ${this.button[i]}`)
    /* Spring Sale button has appeared on buttons so Blinds isn't there
Adding a statement to skip it */
if (this.button[i] === "Blinds & Window Treatments") {
  const buttonExists = await this.buttonSelectors(this.button[i]).isExisting()
  if(buttonExists == false) {
    continue
  }
} 
      await expect(this.feedbackButton).toBeDisplayed()  
      await expect(this.buttonSelectors(this.button[i])).toBeDisplayed()
      await this.buttonSelectors(this.button[i]).click()
      await expect(this.headingSelectors(this.heading[i])).toBeDisplayed()
      await browser.back()
    }
  }

  open() {
    return super.open('https://www.homedepot.com/');
  }

}
  

  

export default new ShopByCategory();