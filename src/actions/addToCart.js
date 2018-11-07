import { createAction } from 'redux-actions';

const addToCart = createAction('ADD_TO_CART', name => ({ id }));

export default addToCart;
