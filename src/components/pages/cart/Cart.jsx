import React from 'react';
import PropTypes from 'prop-types';
import { Master } from 'components/composables';
import { Link } from 'react-router-dom';
import { CartItem } from 'components/widgets';
import { CartTable, CarttWrapper } from './Cart.styled';

const displayName = 'Category';

const propTypes = {};

const defaultProps = {};

function Cart({ myProducts, total }) {
  console.log(myProducts);
  return (
    <Master title="Cart">
      {total ? (
        <CartTable>
          <thead>
            <th>Product name</th>

            <th>Price</th>
            <th>Quantity</th>
            <th>total</th>
          </thead>
          {myProducts.map(product => (
            <CartItem key={product.id} {...product} />
          ))}
        </CartTable>
      ) : (
        'Cart is empty'
      )}
      {total ? `TOTAL: ${total}` : <Link to="/">Back to catalog</Link>}
    </Master>
  );
}

Cart.displayName = displayName;
Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
