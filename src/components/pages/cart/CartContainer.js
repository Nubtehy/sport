import {
  compose, withState, withHandlers, setDisplayName, mapProps, lifecycle,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addToCart, removeProduct, fetchProducts,
} from 'actions';
import { getCartProducts } from 'selectors';

import Cart from './Cart';

export const enhance = compose(
  setDisplayName('AboutContainer'),
  connect(
    state => ({
      myProducts: getCartProducts(state),
    }),
  ),
  withState('name', 'setName', ''),
  withHandlers({
    handleFetchCartProducts: ({ dispatchFetchCartProducts }) => () => {
      dispatchFetchCartProducts();
    },
  }),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts.toJS(),
  })),
);

export default enhance(Cart);
