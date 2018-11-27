class Cart {
  static get findbuttonsPlus() {
    const links = $$('button[name="plus"]');

    return links;
  }

  static findCartProductQuantity(name) {
    return browser.element(`button[data-qa="${name}"]`);
  }
}

export default Cart;
