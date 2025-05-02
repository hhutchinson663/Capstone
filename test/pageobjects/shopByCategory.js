import { $ } from '@wdio/globals'
import Base from './base.js';
import { expect } from '@wdio/globals'

class ShopByCategory extends Base {
  
buttonSelectors(string) {
  return $(`//div[contains(text(),"${string}")]`)
}

headingSelectors(string) {
  return $(`//h1[contains(text(),"${string}")]`)
}

button = ["Special Buy of the Day", "Special Savings", "Appliances", "Bath & Faucets", "Blinds & Window Treatments", "Building Materials", "Cleaning", "Decor & Furniture", "Electrical", "Flooring & Area Rugs", "Hardware", "Heating & Cooling", "Kitchen", "Lawn & Garden", "Lighting & Ceiling Fans", "Outdoor Living", "Paint", "Plumbing", "Storage & Organization", "Tools"]

heading = ["Special Buy of the Day", "SAVINGS CENTER", "Appliances", "Bath", "Window Treatments", "Building Materials", "Cleaning", "Home Decor", "Electrical", "Flooring", "Hardware", "HEATING, VENTING & COOLING", "KITCHEN", "Garden Center", "Lighting", "Outdoors", "Paint", "Plumbing", "Storage and Organization", "Tools"]

async checkDepartments() {
  await expect(this.feedbackButton).toBeDisplayed()
  await browser.scroll(0, 3500)

  for (let i = 0; i < this.button.length; i++) {
    let currentButton = this.button[i]
    let currentHeading = this.heading[i]
    
    //Spring Sale button has appeared on buttons so Blinds isn't there
 
if (this.button[i] === "Blinds & Window Treatments")  {
  const blindsExists = await this.buttonSelectors(currentButton).isExisting()

  //if Blinds doesn't exist use Spring Deals
  if(!blindsExists) {
    const springDealsExists = await this.buttonSelectors("Spring Deals").isExisting()

    if (springDealsExists) {
      currentButton = "Spring Deals"
      currentHeading = "Spring Deals"
    } else {
      continue
    }
  }
} 
      await expect(this.feedbackButton).toBeDisplayed()  
      await expect(this.buttonSelectors(currentButton)).toBeDisplayed()
      await this.buttonSelectors(currentButton).click()
      await expect(this.headingSelectors(currentHeading)).toBeDisplayed()
      await browser.back()
    }
  }

  open() {
    return super.open('https://www.homedepot.com/');
  }

}
  
export default new ShopByCategory();