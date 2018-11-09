import {
  compose, withState, withHandlers, setDisplayName, mapProps, lifecycle,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart, removeProduct, fetchProducts } from 'actions';
import { getProducts } from 'selectors';

import Category from './Category';

export const enhance = compose(
  setDisplayName('AboutContainer'),
  connect(
    state => ({
      myProducts: getProducts(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchAddToCart: addToCart,
        dispatchRemoveProduct: removeProduct,
        dispatchFetchProducts: fetchProducts,
      },
      dispatch,
    ),
  ),
  withState('name', 'setName', ''),
  withHandlers({
    changeName: ({ setName }) => (event) => {
      setName(event.currentTarget.value);
    },
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
  lifecycle({
    componentDidMount(){
      this.props.handleFetchProducts()
    }
  }),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts.toJS(),
  })),
);

export default enhance(Category);
