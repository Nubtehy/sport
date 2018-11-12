import { Map, List } from 'immutable';
import { handleActions } from 'redux-actions';
import { addToCart, removeProduct, fetchProducts, minusItem, plusItem } from 'actions';

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
      return state.merge({ [id]: state.get(strId) ? state.get(strId) - 1 : 1 });
    },
    [minusItem]: (state, action) => {
      const { id } = action.payload;
      const strId = String(id);
      console.log(id)
      return state.merge({ [id]: state.get(strId) ? state.get(strId) + 1 : 1 });
    },

    [plusItem]: (state, action) => {
      const { id } = action.payload;
      const strId = String(id);
      console.log(id)
      return state.merge({ [id]: state.get(strId) ? state.get(strId) + 1 : 1 });
    },
  },
  initialQuantityState,
);

export default cart;
