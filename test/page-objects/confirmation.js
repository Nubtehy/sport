class Confirmation {
  static get inputUserName() {
    const input = $('input[data-name="name"]');
    return input;
  }

  static get inputUserAddress() {
    return browser.element('[data-name="address"]');
  }

  static get buttonConfirmation() {
    return browser.element('[data-name="confirm"]');
  }

  static get userInfoName() {
    return browser.element('div[data-name="user-info-name"]');
  }

  static get userInfoAddress() {
    return browser.element('div[data-name="user-info-address"]');
  }
}

export default Confirmation;
