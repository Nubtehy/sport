import { createSelector } from 'reselect';

const getCartProducts = createSelector(
  state => state.get('cart'),
  state => state.get('products'),
  state => state.get('quantity'),
  (cart, products, quantity) => {
    const cartItems = products.filter(product => cart.indexOf(product.get('id')) !== -1);
    return cartItems;
  },
);
export default getCartProducts;
