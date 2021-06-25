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
import { shallowMount } from "@vue/test-utils";
import PricingCard from "@/components/PricingCard";


describe('When getting a pricing string', () => {
  it('should return the price with a £ symbol', () => {
    const exampleProduct = {
      price: 1012,
    }
    const result = pricingStringBuilder(exampleProduct);

    expect(result).toBe("£10.12")
  });

  describe('and the price is free', () => {
    it('should return the string "Free" for the price', () => {
      const exampleProduct = {
        price: 0,
      }
      expect(pricingStringBuilder(exampleProduct)).toBe("Free")
    });

    it('should show a ribbon stating the product is free', () => {
      const wrapper = shallowMount(PricingCard, {
        propsData: { product: testProducts[5] },
      });
      const ribbon = wrapper.find('[data-mpth-test-id="offer-ribbon"]');

      expect(ribbon.exists()).toBe(true);
      expect(ribbon.html()).toContain("Free");
    })
  });

  describe('and the payment is recurring', () => {
    it('should return the correct term', () => {
      expect(pricingStringBuilder(testProducts[0]))
        .toBe("£100 each month");
    })
  });
})
