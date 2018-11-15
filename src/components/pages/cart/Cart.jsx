import React from 'react';
import PropTypes from 'prop-types';
import Master from 'components/composables';
import { Link } from 'react-router-dom';
import { CartItem } from 'components/widgets';
import { Button, Input } from 'components/controls';
import { CartTable } from './Cart.styled';


const displayName = 'Category';

const propTypes = {
  myProducts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  handlePlusItem: PropTypes.func.isRequired,
  handleMinusItem: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSetUser: PropTypes.func.isRequired,
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
  handleSubmit,
  handleSetUser,
  user,
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
          <div>
            <Input
              name="name"
              placeholder="Type your name"
              value={user.name ? user.name : ''}
              onChange={handleSetUser}
            />
            <Input
              name="address"
              placeholder="Type your address"
              value={user.address ? user.address : ''}
              onChange={handleSetUser}
            />
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        ) : ''
      }
    </Master>
  );
}

Cart.displayName = displayName;
Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
