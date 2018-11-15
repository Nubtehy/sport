import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';
import { CartItemRow, CartItemCol, QuantityContainer } from './CartItem.styled';

const displayName = 'CartItem';

const propTypes = {
  id: PropTypes.number.isRequired,
};

function CartItem({
  name,
  image,
  quantity,
  id,
  price,
  handlePlusItem,
  handleMinusItem,
  controls,
}) {
  return (
    id && (
      <CartItemRow data-name={id} key={id}>

        <CartItemCol><img src={image} alt="" /></CartItemCol>
        <CartItemCol>{name}</CartItemCol>
        <CartItemCol>{price}</CartItemCol>
        <CartItemCol>
          {
            controls ? (
              <div>
                <Button onClick={handleMinusItem}>-</Button>
                <QuantityContainer>{quantity}</QuantityContainer>
                <Button onClick={handlePlusItem}>+</Button>
              </div>
            ) : quantity
          }
        </CartItemCol>
        <CartItemCol>
          {price * quantity}
        </CartItemCol>
      </CartItemRow>
    )
  );
}

CartItem.displayName = displayName;
CartItem.propTypes = propTypes;

export default CartItem;
