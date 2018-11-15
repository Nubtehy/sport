import { createAction } from 'redux-actions';

const addUser = createAction('ADD_USER', user => ({ ...user }));
export default addUser;
