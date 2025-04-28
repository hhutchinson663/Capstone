import { $, browser } from '@wdio/globals'
import Base from './base.js';
import { expect } from '@wdio/globals'

class ItemSelections extends Base {

boxSizeButtons(string) {
     return $(`//button[contains(@class, 'super-sku__inline-tile') and contains(., '${size}')]`)
} 

corrugatedType(string) {
     return $(``)
}




     open () {
          return super.open('https://www.homedepot.com/p/The-Home-Depot-17-in-L-x-11-in-W-x-11-in-D-Small-Moving-Shipping-and-Packing-Box-with-Handles-SBX/316235410');
      }

}

export default new ItemSelections();