
import Category from 'page-objects/Category';

describe('Given the Redux page is opened', () => {
  beforeEach(() => {
    Category.open();
  });

  describe('when the Category page is loaded', () => {
    beforeEach(() => {
      browser.pause(1000);
    });

    it('should load products from backend', () => {
      browser.pause(2000);
      expect(Category.findProduct('Item 1').getText()).toMatch('Item 1');
      expect(Category.findProduct('Item 2').getText()).toMatch('Item 2');
      expect(Category.findProduct('Item 3').getText()).toMatch('Item 3');
      expect(Category.findProduct('Item 4').getText()).toMatch('Item 4');
    });
  });
});
