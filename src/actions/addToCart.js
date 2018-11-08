import { createAction } from 'redux-actions';
import { getCartProduct } from 'selectors';

const addItemToCart = createAction('ADD_TO_CART', id => ({ id }));
const addToCart = (id) => (dispatch, getState) => dispatch(addItemToCart(id));
addToCart.toString = addItemToCart.toString;

export default addToCart;
