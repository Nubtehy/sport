import {
  compose, withState, withHandlers, setDisplayName, mapProps,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//   addProduct, removeProduct, fetchProducts, changeFilter,
// } from 'actions';
// import { getProducts, getFilter } from 'selectors';
import Category from './Category';

export const enhance = compose(
  setDisplayName('Category'),
  connect(
    state => ({
      // myProducts: getProducts(state),
      // filter: getFilter(state),
    }),
    dispatch => bindActionCreators(
      // {
      //   dispatchChangeFilter: changeFilter,
      //   dispatchAddProduct: addProduct,
      //   dispatchRemoveProduct: removeProduct,
      //   dispatchFetchProducts: fetchProducts,
      // },
      dispatch,
    ),
  ),
  withState('name', 'setName', ''),
  withHandlers({
    // changeName: ({ setName }) => (event) => {
    //   setName(event.currentTarget.value);
    // },
    // handleFetchProducts: ({ dispatchFetchProducts }) => () => {
    //   dispatchFetchProducts();
    // },
    // handleAddProduct: ({ name, dispatchAddProduct }) => () => {
    //   dispatchAddProduct(name);
    // },
    // handleRemoveProduct: ({ dispatchRemoveProduct }) => (id) => {
    //   dispatchRemoveProduct(id);
    // },
    // handleChangeFilter: ({ dispatchChangeFilter }) => ({ currentTarget: { value } }) => {
    //   dispatchChangeFilter(value);
    // },
  }),
  mapProps(props => ({
    ...props,
    // myProducts: props.myProducts.toJS(),
  })),
);

export default enhance(Category);
