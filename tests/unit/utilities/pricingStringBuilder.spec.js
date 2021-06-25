/*
  REQUIREMENTS

  The price should be displayed in the view.
  If the price is 0 it should say free.
  If it's a recurring price the price should say "per month/year"
  If it's discounted we should have a before and saving price "Was £234. Now £123"
  If the product is free we should show a banner saying "free"
*/

import pricingStringBuilder from "@/utilities/pricingStringBuilder";
import testProducts from '../../testData/products';


describe('When getting a pricing string', () => {
  it('should return the price with a £ symbol', () => {
    const exampleProduct = {
      price: 1012,
    }
    const result = pricingStringBuilder(exampleProduct);

    expect(result).toBe("£10.12")
  });

  describe('and the price is free', () => {
    it('should return the string "Free"', () => {
      const exampleProduct = {
        price: 0,
      }
      expect(pricingStringBuilder(exampleProduct)).toBe("Free")
    })
  });

  describe('and the payment is recurring', () => {
    it('should return the correct term', () => {
      expect(pricingStringBuilder(testProducts[0]))
        .toBe("£100 each month");
    })
  })
})
