class Category {
  static open() {
    browser.url('/');
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

  static findPCartUrk(name) {
    const links = $$('header a');

    return links;
  }
}

export default Category;
