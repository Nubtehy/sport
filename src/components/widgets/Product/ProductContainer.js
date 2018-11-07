import {
  compose, setDisplayName, withHandlers, setPropTypes,
} from 'recompose';
import PropTypes from 'prop-types';
import Product from './Product';

export const enhance = compose(
  setDisplayName('ProductContainer'),
  setPropTypes({
    id: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
  }),
  withHandlers({
    handleRemove: ({ id, onRemove }) => () => onRemove(id),
    handleAddToCart: ({ id, AddToCart }) => () => AddToCart(id),
  }),
);

export default enhance(Product);
