import { createAction } from 'redux-actions';

const addItemToCart = createAction('ADD_TO_CART', id => ({ id }));

const addToCart = id => dispatch => dispatch(addItemToCart(id));

addToCart.toString = addItemToCart.toString;


export default addToCart;
