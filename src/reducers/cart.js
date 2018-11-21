import { List } from 'immutable';
import { handleActions } from 'redux-actions';
import { addToCart } from 'actions';

export const initialCartState = List([]);

const cart = handleActions(
  {
    [addToCart]: (state, action) => (state.indexOf(action.payload.id) === -1 ? state.push(action.payload.id) : state),

  },
  initialCartState,
);

export default cart;
