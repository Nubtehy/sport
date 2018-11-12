import {
  compose, setDisplayName, withHandlers, setPropTypes,
} from 'recompose';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


export const enhance = compose(
  setDisplayName('ProductContainer'),
  setPropTypes({
    id: PropTypes.number.isRequired,
  }),
);

export default enhance(CartItem);
