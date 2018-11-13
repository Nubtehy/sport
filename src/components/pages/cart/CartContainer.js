import {
  compose, withState, withHandlers, setDisplayName, mapProps, setPropTypes,
} from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { plusItem, minusItem, addUser} from 'actions';
import { getCartProducts, getTotal, getUser } from 'selectors';

import Cart from './Cart';

export const enhance = compose(
  withRouter,
  setDisplayName('CartContainer'),
  connect(
    state => ({
      myProducts: getCartProducts(state),
      total: getTotal(state),
      user: getUser(state)
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
  withHandlers({
    handlePlusItem: ({ id, dispatchPlusItem }) => (id) => dispatchPlusItem(id),
    handleMinusItem: ({ id, dispatchMinusItem }) => (id) => dispatchMinusItem(id),
    handleSetUser: ({ setUser, user }) => (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value})
    },
    handleSubmit: ({user,dispatchAddUser, history})=>()=> {
      history.push('/confirmation');
      return dispatchAddUser({...user});
    },
  }),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts,
    total: props.total,
    history: props.history,
    user: props.user
  })),
);

export default enhance(Cart);
