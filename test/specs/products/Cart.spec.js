
import Cart from 'page-objects/Cart';

describe('Given the Category page is opened', () => {
  beforeEach(() => {
    Category.open();
  });

  describe('when add to cart button is clicked', () => {
    beforeEach(() => {
      Category.findbuttonsAddtoCart.forEach((link) => {
        link.click();
      });
    });
    it('should add the product to the cart list', () => {
      browser.pause(2000);
      expect(Category.findPCart().getText()).toMatch('Cart(4)');
    });
    afterAll(() => {
      Category.findPCartUrk.click();
    });
  });
});
