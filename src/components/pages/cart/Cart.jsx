import React from 'react';
import PropTypes from 'prop-types';
import { Master } from 'components/composables';

const displayName = 'Cart';

const propTypes = {

};

const defaultProps = {

};

function Cart() {
  return (
    <Master>
      <h1>Products</h1>
    </Master>
  );
}

Cart.displayName = displayName;
Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
