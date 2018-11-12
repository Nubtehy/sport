import { createSelector } from 'reselect';

const getCartProducts = createSelector(
  state => state.get('cart'),
  state => state.get('products'),
  state => state.get('quantity'),
  (cart, products, quantity) => {
    const cartItems = products.toJS().filter(product => cart.toJS().indexOf(product.id) !== -1);
    console.log(quantity.toJS(),'quantity')
    cartItems.map(item => (item.quantity = quantity.toJS()[item.id]));
    console.log(cartItems.map(item => (item.quantity = quantity.toJS()[item.id])));
    return cartItems;
  },
);
export default getCartProducts;

export const getTotal = createSelector(getCartProducts, getCartProducts =>
  getCartProducts.reduce((total, item) => total + item.price * item.quantity, 0));

export const getTotalCount = createSelector(getCartProducts, getCartProducts => getCartProducts.lenght?getCartProducts.lenght:0);

