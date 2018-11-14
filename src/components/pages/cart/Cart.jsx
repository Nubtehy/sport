import React from 'react';
import PropTypes from 'prop-types';
import { Master } from 'components/composables';
import { Link } from 'react-router-dom';
import { CartItem } from 'components/widgets';
import { CartTable } from './Cart.styled';

const displayName = 'Category';

const propTypes = {};

const defaultProps = {};
import { Button, Input } from 'components/controls';
function Cart({
  myProducts,
  total,
  handlePlusItem,
  handleMinusItem,
  handleSubmit,
  handleSetUser,
  user
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
          
            {myProducts.map(product => (
              <CartItem key={product.id} {...product} plus={handlePlusItem} minus={handleMinusItem} controls="true" />
            ))}
          </tbody>
        </CartTable>
      ) : (
        'Cart is empty'
      )}
      {total ? `TOTAL: ${total}` : <Link to="/">Back to catalog</Link>}
      {
        total ?
        <div>
        <Input name="name" placeholder="Type your name" value={ user.name ? user.name : '' } onChange={handleSetUser}/>
        <Input name="address" placeholder="Type your address" value={ user.address ? user.address : '' }  onChange={handleSetUser}/>
        <Button onClick={handleSubmit}>Submit</Button>
        </div>: ''
      }
    </Master>
  );
}

Cart.displayName = displayName;
Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
