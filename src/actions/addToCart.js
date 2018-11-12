import { createAction } from 'redux-actions';
import { getCartProduct } from 'selectors';

const addItemToCart = createAction('ADD_TO_CART', id => ({ id }));
const addToCart = id => (dispatch, getState) => dispatch(addItemToCart(id));
addToCart.toString = addItemToCart.toString;

export const minusItem = createAction('MINUS_ITEM', id=>({id}))
export const plusItem = createAction('PLUS_ITEM', id=>({id}))

export default addToCart;
