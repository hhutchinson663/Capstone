import { $, browser } from '@wdio/globals'
import Base from './base.js';
import { expect } from '@wdio/globals'

class ItemSelections extends Base {
     /**
     * define selectors using getter methods
     */



     open () {
          return super.open('');
      }

}

export default new ItemSelections();