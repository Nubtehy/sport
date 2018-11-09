import {
  compose, withState, withHandlers, setDisplayName, mapProps,
} from 'recompose';
import { connect } from 'react-redux';
import { addToCart, removeProduct, fetchProducts } from 'actions';
import { getCartProducts, getTotal } from 'selectors';

import Master from './Master';

export const enhance = compose(
  setDisplayName('AboutContainer'),
  connect(state => ({
    count: getCartProducts(state).length,
  })),
  withState('name', 'setName', ''),
  mapProps(props => ({
    ...props,
    count,
  })),
);

export default enhance(Master);
