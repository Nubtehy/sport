import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';
const displayName = 'CartItem';

const propTypes = {
  id: PropTypes.string.isRequired,
};

function CartItem({ id }) {
  return (
    id && (
      <div data-name={id}>
        {id}
        {' - '}
        <Button accent >Add to cart</Button>
      </div>
    )
  );
}

CartItem.displayName = displayName;
CartItem.propTypes = propTypes;

export default CartItem;
