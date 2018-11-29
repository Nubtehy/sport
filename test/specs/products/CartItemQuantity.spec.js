
import Category from 'page-objects/Category';
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
      browser.element('header').click('a*=Cart');
    });


    describe('Given the cart page is opened', () => {
      beforeEach(() => {
        Cart.findbuttonsPlus.forEach((link) => {
          link.click();
        });
      });
      describe('when plus button is clicked', () => {
        it('should add quantity 2 to product in cart', () => {
          expect(Cart.findCartProductQuantity('Item 1').getText()).toMatch('-2+');
          expect(Cart.findCartProductQuantity('Item 2').getText()).toMatch('-2+');
          expect(Cart.findCartProductQuantity('Item 3').getText()).toMatch('-2+');
          expect(Cart.findCartProductQuantity('Item 4').getText()).toMatch('-2+');
        });
      });
    });
  });
});
