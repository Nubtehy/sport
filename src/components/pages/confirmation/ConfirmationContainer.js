import {
  compose, withState, withHandlers, setDisplayName, mapProps, lifecycle,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
    })
  ),
  mapProps(props => ({
    ...props,
    user: props.user,
  })),
);

export default enhance(Confirmation);
