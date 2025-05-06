import Base from './base.js';

class ShopByCategory extends Base {
  
  buttonSelectors(string) {
    return $(`//div[contains(text(),"${string}")]`)
  }

  headingSelectors(string) {
    return $(`//h1[contains(text(),"${string}")]`)
  }

  departments = [
    {button: "Special Buy of the Day", heading: "Special Buy of the Day"}, 
    {button: "Special Savings", heading: "SAVINGS CENTER"}, 
    {button: "Appliances", heading: "Appliances"},
    {button: "Bath & Faucets", heading: "Bath"},
    {button: "Blinds & Window Treatments", heading: "Window Treatments"},
    {button: "Building Materials", heading: "Building Materials"},
    {button: "Cleaning", heading: "Cleaning"},
    {button: "Decor & Furniture", heading: "Home Decor"},
    {button: "Electrical", heading: "Electrical"},
    {button: "Flooring & Area Rugs", heading: "Flooring"},
    {button: "Hardware", heading: "Hardware"},
    {button: "Heating & Cooling", heading: "HEATING, VENTING & COOLING"},
    {button: "Kitchen", heading: "KITCHEN"},
    {button: "Lawn & Garden", heading: "Garden Center"},
    {button: "Lighting & Ceiling Fans", heading: "Lighting"},
    {button: "Outdoor Living", heading: "Outdoors"},
    {button: "Paint", heading: "Paint"},
    {button: "Plumbing", heading: "Plumbing"},
    {button: "Storage & Organization", heading: "Storage and Organization"},
    {button: "Tools", heading: "Tools"}
  ]

  async checkDepartments() {
    await this.goTo('https://www.homedepot.com/')
    await expect(this.feedbackButton).toBeDisplayed()
    await browser.scroll(0, 3500)

  for (const dept of this.departments) {
    let currentButton = dept.button
    let currentHeading = dept.heading
    
  //Spring Sale button has appeared on buttons so Blinds isn't there
 
  if (currentButton === "Blinds & Window Treatments")  {
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
}
  
export default new ShopByCategory();