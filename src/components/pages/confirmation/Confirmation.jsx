import React from 'react';
import PropTypes from 'prop-types';
import { Master } from 'components/composables';
import { Link } from 'react-router-dom';

import { Button } from '../../controls';
import { CartItem } from 'components/widgets';
import { CartTable } from '../cart/Cart.styled';

const displayName = 'Confiramtion';

const propTypes = {

};

const defaultProps = {

};

function Confiramtion({
  myProducts,
  total,
  user
}) {
  const totalItems = total ? total.length : 0;

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
          {myProducts.map(product => (
            <CartItem key={product.id} {...product}  controls={false} />
          ))}
          </tbody>
        </CartTable>
      ) : (
        'Cart is empty'
      )}
      {total ? `TOTAL: ${total}` : <Link to="/">Back to catalog</Link>}
      <div>Name: {user.name}</div>
      <div>Address: {user.address}</div>
      <Button>Confirm</Button>
    </Master>
  );
}

Confiramtion.displayName = displayName;
Confiramtion.propTypes = propTypes;
Confiramtion.defaultProps = defaultProps;

export default Confiramtion;
