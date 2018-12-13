import { createSelector } from 'reselect';

const getCartProducts = createSelector(
  state => state.get('cart'),
  state => state.get('products'),
  (cart, products) => {
    const cartItems = products.filter(product => cart.indexOf(product.get('id')) !== -1);
    console.log(cartItems);
    return cartItems;
  },
);

export default getCartProducts;
