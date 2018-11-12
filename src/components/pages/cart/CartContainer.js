import {
  compose, withState, withHandlers, setDisplayName, mapProps, setPropTypes,
} from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { plusItem, minusItem, addUserName, addUserAddress } from 'actions';
import { getCartProducts, getTotal } from 'selectors';

import Cart from './Cart';

export const enhance = compose(
  withRouter,
  setDisplayName('CartContainer'),
  connect(
    state => ({
      myProducts: getCartProducts(state),
      total: getTotal(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchPlusItem: plusItem,
        dispatchMinusItem: minusItem,
        dispatchAddUserName: addUserName,
        dispatchAddUserAddress: addUserAddress
      },
      dispatch,
    ),
  ),

  withState('user', 'setUser', {name: 'Vvv', address:'adasdasda'}),
  withHandlers({
    handlePlusItem: ({ id, dispatchPlusItem }) => (id) => dispatchPlusItem(id),
    handleMinusItem: ({ id, dispatchMinusItem }) => (id) => dispatchMinusItem(id),
    handleSetUser: ({ setUser, user }) => (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value})
    },
    handleSubmit: (props)=>()=> props.history.push('/confirmation'),
  }),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts,
    total: props.total,
    history: props.history
  })),
);

export default enhance(Cart);
