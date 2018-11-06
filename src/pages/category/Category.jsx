import React from 'react';
import PropTypes from 'prop-types';
import { Master } from 'composables';

const displayName = 'Cart';

const propTypes = {

};

const defaultProps = {

};

function Category() {
  return (
    <Master>
      <h1>Category</h1>
    </Master>
  );
}

Category.displayName = displayName;
Category.propTypes = propTypes;
Category.defaultProps = defaultProps;

export default Category;
