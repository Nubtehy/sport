import React from 'react';
import PropTypes from 'prop-types';
import Master from 'components/composables';
import { Link } from 'react-router-dom';
import { CartItem } from 'components/widgets';
import { Button } from '../../controls';
import { CartTable } from '../cart/Cart.styled';


const displayName = 'Confiramtion';

const propTypes = {
  myProducts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  user: PropTypes.shape({ name: PropTypes.string, address: PropTypes.string }),
  quantity: PropTypes.objectOf(PropTypes.number),
};

const defaultProps = {
  user: {},
  quantity: {},
};

function Confiramtion({
  myProducts,
  total,
  user,
  quantity,
}) {
  return (
    <Master title="Confirmation">
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
                <CartItem key={product.id} {...product} controls={false} quantity={quantity[product.id]} />
              ))
            }
          </tbody>
        </CartTable>
      ) : (
        'Cart is empty'
      )}
      {total ? `TOTAL: ${total}` : <Link to="/">Back to catalog</Link>}
      {
        user &&
        <div>
          <div data-name="user-info-name">
            Name:
            {' '}
            {` ${user.firstName} ${user.lastName} `}
          </div>
          <div data-name="user-info-address">
            Email:
            {' '}
            {user.email}
          </div>
        </div>
      }
      <Button>Confirm</Button>
    </Master>
  );
}

Confiramtion.displayName = displayName;
Confiramtion.propTypes = propTypes;
Confiramtion.defaultProps = defaultProps;

export default Confiramtion;
