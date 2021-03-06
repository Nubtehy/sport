import React from 'react';
import PropTypes from 'prop-types';
import Master from 'components/composables';
import { Link } from 'react-router-dom';
import { CartItem } from 'components/widgets';
import { CartTable } from './Cart.styled';
import CartForm from './cartForm/CartForm';


const displayName = 'Category';

const propTypes = {
  myProducts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  handlePlusItem: PropTypes.func.isRequired,
  handleMinusItem: PropTypes.func.isRequired,
  handlerSubmit: PropTypes.func.isRequired,
  user: PropTypes.shape({ name: PropTypes.string, address: PropTypes.string }),
  quantity: PropTypes.objectOf(PropTypes.number),


};

const defaultProps = {
  user: {},
  quantity: [{}],
};

function Cart({
  myProducts,
  total,
  handlePlusItem,
  handleMinusItem,
  handlerSubmit,
  quantity,
}) {
  return (
    <Master title="Cart">
      {total ? (
        <CartTable>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {
              myProducts.map(product => (
                <CartItem
                  key={product.id}
                  {...product}
                  plus={handlePlusItem}
                  minus={handleMinusItem}
                  controls="true"
                  quantity={quantity[product.id]}
                />
              ))
            }
          </tbody>
        </CartTable>
      ) : (
        'Cart is empty'
      )}
      {total ? `TOTAL: ${total}` : <Link to="/">Back to catalog</Link>}
      {
        total ? (
          <CartForm onSubmit={handlerSubmit} />
        ) : ''
      }
    </Master>
  );
}

Cart.displayName = displayName;
Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
