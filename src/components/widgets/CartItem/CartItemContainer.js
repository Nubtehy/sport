import {
  compose, setDisplayName, withHandlers, setPropTypes,
} from 'recompose';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

export const enhance = compose(
  setDisplayName('ProductContainer'),
  setPropTypes({
    id: PropTypes.number.isRequired,
    AddToCart: PropTypes.func.isRequired,
  }),
  withHandlers({
    handleRemove: ({ id, onRemove }) => () => onRemove(id),
    handleAddToCart: ({ id, AddToCart }) => () => AddToCart(id),
  }),
);

export default enhance(CartItem);
