import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';
import {
  ProductContainer, ProductName, ProductPriceBlock, ProductPrice,
} from './Product.styled';

const displayName = 'Product';

const propTypes = {
  name: PropTypes.string.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

function Product({
  name, image, handleAddToCart, price,
}) {
  return (
    name && (
      <ProductContainer data-name={name}>
        <img src={image} alt="" />
        <ProductName>
          {name}
        </ProductName>
        <ProductPriceBlock>
          <ProductPrice>
            {price}
            {' '}
          $
          </ProductPrice>
          <Button accent onClick={handleAddToCart}>
            Add to cart
          </Button>
        </ProductPriceBlock>

      </ProductContainer>
    )
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
