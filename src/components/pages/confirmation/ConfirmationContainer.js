import {
  compose, setDisplayName, mapProps,
} from 'recompose';
import { connect } from 'react-redux';
import {
  getTotal, getQuantity, getCartProducts, getUser,
} from 'selectors';

import Confirmation from './Confirmation';


export const enhance = compose(
  setDisplayName('ConfirmationContainer'),
  connect(
    state => ({
      myProducts: getCartProducts(state),
      user: getUser(state),
      quantity: getQuantity(state),
      total: getTotal(state),
    }),
  ),
  mapProps(props => ({
    ...props,
    myProducts: props.myProducts.toJS(),
    user: props.user.toJS(),
    quantity: props.quantity.toJS(),
  })),
);

export default enhance(Confirmation);
