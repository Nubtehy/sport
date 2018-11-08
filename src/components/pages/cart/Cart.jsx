import React from 'react';
import PropTypes from 'prop-types';
import { Master } from 'components/composables';

import { CartItem } from 'components/widgets';
import { ProductWrapper } from './Cart.styled';

const displayName = 'Category';

const propTypes = {

};

const defaultProps = {

};

function Cart({
  myProducts,
}) {
  console.log(myProducts);
  return (
    <Master title="Cart">
      <ProductWrapper>

        {myProducts.map(product => (
          <CartItem key={product.id} {...product} />
        ))}
      </ProductWrapper>
    </Master>
  );
}

Cart.displayName = displayName;
Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
