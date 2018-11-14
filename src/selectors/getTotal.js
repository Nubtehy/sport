import { createSelector } from 'reselect';
import getCartProducts from './getCartProducts';
import getQuantity from './getQuantity';

const getTotal = createSelector(getCartProducts, getQuantity, (cartProducts, quantity) =>
  cartProducts.reduce((total, item) => {
  const itemId = String(item.get('id'));
  return total + item.get('price') * quantity.get(itemId);
}, 0));
export default getTotal;
