class Category {
  static open() {
    browser.url('/cart');
  }

  static get findbuttonsAddtoCart() {
    const links = $$('button');

    return links;
  }

  static findProduct(name) {
    return browser.element(`[data-name="${name}"]`);
  }

  static findPCart(name) {
    return browser.element('[data-name="header-cart"]');
  }
}

export default Category;
