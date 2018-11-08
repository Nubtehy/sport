import { createSelector } from 'reselect';

const getCartProducts = createSelector(state => state.get('cart'), cart => cart);

export default getCartProducts;
