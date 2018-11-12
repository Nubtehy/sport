import React from 'react';
import PropTypes from 'prop-types';
import { Master } from 'components/composables';

import { Product } from 'components/widgets';
import { ProductWrapper } from './Confirmation.styled';

const displayName = 'Confiramtion';

const propTypes = {

};

const defaultProps = {

};

function Confiramtion({
  myProducts,
  handleAddToCart,
  total
}) {
  const totalItems = total ? total.length : 0;

  return (
    <Master title="Products" total={ totalItems }>
      <ProductWrapper>

        {myProducts.map(product => (
          <Product key={product.id} {...product} AddToCart={handleAddToCart}/>
        ))}
      </ProductWrapper>
    </Master>
  );
}

Confiramtion.displayName = displayName;
Confiramtion.propTypes = propTypes;
Confiramtion.defaultProps = defaultProps;

export default Confiramtion;
