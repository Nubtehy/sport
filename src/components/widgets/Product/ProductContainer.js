import {
  compose, setDisplayName, withHandlers, setPropTypes,
} from 'recompose';
import PropTypes from 'prop-types';
import Product from './Product';

export const enhance = compose(
  setDisplayName('ProductContainer'),
  setPropTypes({
    id: PropTypes.number.isRequired,
    AddToCart: PropTypes.func.isRequired,
  }),
  withHandlers({
    handleAddToCart: ({ id, AddToCart }) => () => AddToCart(id),
  }),
);

export default enhance(Product);
