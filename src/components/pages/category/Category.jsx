import React from 'react';
import PropTypes from 'prop-types';
import { Master } from 'components/composables';

import { Product } from 'components/widgets';
import { ProductWrapper } from './Category.styled';

const displayName = 'Category';

const propTypes = {

};

const defaultProps = {

};

function Category({
  myProducts,
  handleAddToCart,
}) {
  return (
    <Master title="Products">
      <ProductWrapper>

        {myProducts.map(product => (
          <Product key={product.id} {...product} AddToCart={handleAddToCart}/>
        ))}
      </ProductWrapper>
    </Master>
  );
}

Category.displayName = displayName;
Category.propTypes = propTypes;
Category.defaultProps = defaultProps;

export default Category;
