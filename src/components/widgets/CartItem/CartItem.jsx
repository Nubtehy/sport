import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';
import { CartItemRow, CartItemCol } from './CartItem.styled';

const displayName = 'CartItem';

const propTypes = {
  id: PropTypes.string.isRequired,
};

function CartItem({
  name,
  image,
  quantity,
  id,
  price,
  handlePlusItem,
  handleMinusItem,
}) {
  return (
    id && (
      <CartItemRow data-name={id} key={id}>
        <CartItemCol>{name}</CartItemCol>
        <CartItemCol>{price}</CartItemCol>
        <CartItemCol><Button onClick={handleMinusItem}>-</Button>{quantity}<Button onClick={handlePlusItem}>+</Button></CartItemCol>
        <CartItemCol>{price * quantity}</CartItemCol>
      </CartItemRow>
    )
  );
}

CartItem.displayName = displayName;
CartItem.propTypes = propTypes;

export default CartItem;
