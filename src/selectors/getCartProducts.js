import { createSelector } from 'reselect';

const getCartProducts = createSelector(
  state => state.get('cart'),
  state => state.get('products'),
  state => state.get('quantity'),
  (cart, products, quantity) => {
    const cartItems = products.toJS().filter(product => cart.toJS().indexOf(product.id) !== -1);
    cartItems.map(item => (item.quantity = quantity.toJS()[item.id]));

    return cartItems;
  },
);

export const getTotal = createSelector(getCartProducts, getCartProducts => getCartProducts.reduce((total, item) => total + item.price * item.quantity, 0));
export default getCartProducts;
