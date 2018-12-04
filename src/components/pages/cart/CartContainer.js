import {
  compose, withState, withHandlers, setDisplayName, mapProps,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { plusItem, minusItem, addUser } from 'actions';
import { getCartProducts, getTotal } from 'selectors';

import Cart from './Cart';
import getQuantity from '../../../selectors/getQuantity';

export const handlers = {
  handlePlusItem: ({ dispatchPlusItem }) => id => dispatchPlusItem(id),
  handleMinusItem: ({ dispatchMinusItem }) => id => dispatchMinusItem(id),
  handleSubmit: ({ history }) => () => {
    history.push('/confirmation');
  },
};

export const enhance = compose(
  withRouter,
  setDisplayName('CartContainer'),
  connect(
    state => ({
      myProducts: getCartProducts(state),
      total: getTotal(state),
      quantity: getQuantity(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchAddUser: addUser,
        dispatchPlusItem: plusItem,
        dispatchMinusItem: minusItem,
      },
      dispatch,
    ),
  ),
  withState('user', 'setUser', ({ user }) => user),
  withHandlers(handlers),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts.toJS(),
    total: props.total,
    history: props.history,
    quantity: props.quantity.toJS(),
  })),
);

export default enhance(Cart);
