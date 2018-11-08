import { createSelector } from 'reselect';

const getCartProduct =(id)=> createSelector(state => state.get('cart'), cart => console.log(cart));

export default getCartProduct;
