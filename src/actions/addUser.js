import { createAction } from 'redux-actions';
import { getCartProduct } from 'selectors';

export const addUserName = createAction('ADD_USER_NAME', name => ({ name }));
export const addUserAddress = createAction('ADD_USER_ADDRES', address => ({ address }));
