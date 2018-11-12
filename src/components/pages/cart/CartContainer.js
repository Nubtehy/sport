import {
  compose, withState, withHandlers, setDisplayName, mapProps, setPropTypes,
} from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { plusItem, minusItem } from 'actions';
import { getCartProducts, getTotal } from 'selectors';

import Cart from './Cart';

export const enhance = compose(
  setDisplayName('AboutContainer'),
  setPropTypes({
    id: PropTypes.number.isRequired,
    plusItem: PropTypes.func.isRequired,
    minusItem: PropTypes.func.isRequired
  }),
  connect(
    state => ({
      myProducts: getCartProducts(state),
      total: getTotal(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchPlusItem: plusItem,
        dispatchMinusItem: minusItem,
      },
      dispatch,
    ),
  ),
  withHandlers({
    handlePlusItem: ({ dispatchPlusItem }) => (id) => dispatchPlusItem(id),
    handleMinusItem : ({ dispatchMinusItem }) => (id) => dispatchMinusItem(id),
  }),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts,
    total: props.total,
  })),
);

export default enhance(Cart);
