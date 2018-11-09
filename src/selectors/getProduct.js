import { createSelector } from 'reselect';

const getCartProduct = id => createSelector(state => state.get('cart'), cart => cart);

export default getCartProduct;
