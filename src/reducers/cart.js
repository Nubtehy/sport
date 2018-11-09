import { Map, List } from 'immutable';
import { handleActions } from 'redux-actions';
import { addToCart, removeProduct, fetchProducts } from 'actions';

export const initialCartState = List([]);

const cart = handleActions(
  {
    [addToCart]: (state, action) => state.push(action.payload.id),
  },
  initialCartState,
);
export const initialQuantityState = Map({});

export const quantity = handleActions(
  {
    [addToCart]: (state, action) => {
      const { id } = action.payload;
      const strId = String(id);
      return state.merge({ [id]: state.get(strId) ? state.get(strId) + 1 : 1 });
    },
  },
  initialQuantityState,
);

export default cart;
