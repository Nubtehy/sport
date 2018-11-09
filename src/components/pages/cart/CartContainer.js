import {
  compose, withState, withHandlers, setDisplayName, mapProps,
} from 'recompose';
import { connect } from 'react-redux';
import { addToCart, removeProduct, fetchProducts } from 'actions';
import { getCartProducts, getTotal } from 'selectors';

import Cart from './Cart';

export const enhance = compose(
  setDisplayName('AboutContainer'),
  connect(state => ({
    myProducts: getCartProducts(state),
    total: getTotal(state),
  })),
  withState('name', 'setName', ''),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts,
    total: props.total,
  })),
);

export default enhance(Cart);