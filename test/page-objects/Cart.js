class Cart {
  static get findbuttonsPlus() {
    const links = $$('button[name="plus"]');

    return links;
  }

  static findCartProductQuantity(name) {
    return browser.element(`tr[data-name="${name}"]`);
  }
}

export default Cart;
