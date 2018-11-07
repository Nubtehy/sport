import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';
const displayName = 'Product';

const propTypes = {
  name: PropTypes.string.isRequired,
};

function Product({ name, image, handleAddToCart }) {
  return (
    name && (
      <div data-name={name}>
      <img src={image}/>
        {name}
        {' - '}
        <Button accent onClick={handleAddToCart}>Add to cart</Button>
      </div>
    )
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
