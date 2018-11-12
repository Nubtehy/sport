import {
  compose, withState, withHandlers, setDisplayName, mapProps, lifecycle,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart, removeProduct, fetchProducts } from 'actions';
import { getProducts, getTotalCount } from 'selectors';

import Confirmation from './Confirmation';
import { getCartProducts } from '../../../selectors';

export const enhance = compose(
  setDisplayName('ConfirmationContainer'),
  connect(
    state => ({
      myProducts: getCartProducts(state),
      User: getCartProducts(state),
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
  withState('user', 'setUser', {name: 'Vvv', address:'adasdasda'}),
  withHandlers({
    handlesetUser: ({ setUser }) => () => {
      console.log(e)
    },
  }),
  mapProps(props => ({
    ...props,
    user: props.user,
  })),
);

export default enhance(Confirmation);
