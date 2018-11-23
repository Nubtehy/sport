import {
  compose, withState, withHandlers, setDisplayName, mapProps,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { plusItem, minusItem, addUser } from 'actions';
import { getCartProducts, getTotal, getUser } from 'selectors';

import Cart from './Cart';
import getQuantity from '../../../selectors/getQuantity';

export const handlers = {
  handlerPlusItem: ({ dispatchPlusItem }) => id => dispatchPlusItem(id),
  handlerMinusItem: ({ dispatchMinusItem }) => id => dispatchMinusItem(id),
  handlerSetUser: ({ setUser, user }) => (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  },
  handleSubmit: ({ user, dispatchAddUser, history }) => () => {
    history.push('/confirmation');
    return dispatchAddUser({ ...user });
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
      user: getUser(state),
    }),
    dispatch => ({
      dispatchAddUser: bindActionCreators(addUser, dispatch),
      dispatchPlusItem: bindActionCreators(addUser, plusItem),
      dispatchMinusItem: bindActionCreators(addUser, minusItem),
    }),
  ),
  withState('user', 'setUser', ({ user }) => user),
  withHandlers(handlers),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts.toJS(),
    total: props.total,
    history: props.history,
    user: props.user,
    quantity: props.quantity.toJS(),
  })),
);

export default enhance(Cart);
