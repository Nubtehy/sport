import {
  compose, setDisplayName, mapProps,
} from 'recompose';
import { connect } from 'react-redux';
import {
  getTotal, getQuantity, getCartProducts,
} from 'selectors';
import { getFormValues } from 'redux-form/immutable';

import Confirmation from './Confirmation';


export const enhance = compose(
  setDisplayName('ConfirmationContainer'),
  connect(
    state => ({
      myProducts: getCartProducts(state),
      quantity: getQuantity(state),
      total: getTotal(state),
      user: getFormValues('cartform')(state),
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
