import {
  compose, withState, withHandlers, setDisplayName, mapProps, lifecycle,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart, removeProduct, fetchProducts } from 'actions';
import { getProducts, getTotalCount } from 'selectors';

import Category from './Category';
import { getCartProducts } from '../../../selectors';

export const enhance = compose(
  setDisplayName('CategoryContainer'),
  connect(
    state => ({
      myProducts: getProducts(state),
      total: getCartProducts(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchAddToCart: addToCart,
        dispatchFetchProducts: fetchProducts,
      },
      dispatch,
    ),
  ),
  withState('name', 'setName', ''),
  withHandlers({
    handleFetchProducts: ({ dispatchFetchProducts }) => () => {
      dispatchFetchProducts();
    },
    handleAddToCart: ({ dispatchAddToCart }) => (id) => {
      dispatchAddToCart(id);
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.handleFetchProducts();
    },
  }),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts.toJS(),
    total: props.total,
  })),
);

export default enhance(Category);
