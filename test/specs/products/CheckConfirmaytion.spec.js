
import Category from 'page-objects/Category';
import Cart from 'page-objects/Cart';
import Confirmation from 'page-objects/Confirmation';


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


    describe('when confirm button is clicked', () => {
      beforeEach(() => {
        Confirmation.inputUserName.setValue('Anna');
        Confirmation.inputUserAddress.setValue('Some st, 12/2');
      });
      describe('when confirm button is clicked', () => {
        beforeEach(() => {
          Confirmation.buttonConfirmation.click();
        });
        it('should show 4 products om confirmation page and user info', () => {
          expect(Cart.findCartProductQuantity('Item 1').getText()).toMatch('Item 1');
          expect(Confirmation.userInfoName.getText()).toMatch('Anna');
          expect(Confirmation.userInfoAddress.getText()).toMatch('Some st, 12/2');
        });
      });
    });
  });
});
