import { createAction } from 'redux-actions';


const plusItem = createAction('PLUS_ITEM', id => ({ id }));
export default plusItem;
