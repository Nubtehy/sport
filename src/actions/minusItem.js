import { createAction } from 'redux-actions';

const minusItem = createAction('MINUS_ITEM', id => ({ id }));
export default minusItem;
