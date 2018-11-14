import {
  compose, withState, withHandlers, setDisplayName, mapProps, lifecycle,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProducts, getTotal } from 'selectors';

import Confirmation from './Confirmation';
import { getCartProducts, getUser } from '../../../selectors';

export const enhance = compose(
  setDisplayName('ConfirmationContainer'),
  connect(
    state => ({
      myProducts: getCartProducts(state),
      user: getUser(state),
      total: getTotal(state),
    })
  ),
  mapProps(props => ({
    ...props,
    user: props.user,
  })),
);

export default enhance(Confirmation);
