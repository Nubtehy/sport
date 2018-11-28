
import Category from 'page-objects/Category';
import Cart from 'page-objects/Cart';

Category.open();

describe('Given the Category page is opened', () => {
  describe('when add to cart button is clicked', () => {
    beforeEach(() => {
      Category.findbuttonsAddtoCart.forEach((link) => {
        link.click();
      });
      browser.element('header').click('a*=Cart');
    });


    describe('Given the cart page is opened', () => {
      describe('when plus button is clicked', () => {
        beforeEach(() => {
          Cart.findbuttonsPlus.forEach((link) => {
            console.log(link, 'LINK');
            link.click();
          });
        });
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
