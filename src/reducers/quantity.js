import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { addToCart, minusItem, plusItem } from 'actions';

export const initialQuantityState = Map({});


export const quantity = handleActions(
  {
    [addToCart]: (state, action) => {
      const { id } = action.payload;
      const strId = String(id);
      return state.merge({ [id]: state.get(strId) ? state.get(strId) + 1 : 1 });
    },
    [minusItem]: (state, action) => {
      const { id } = action.payload;
      const strId = String(id);
      let value = 1;
      if (state.get(strId)) {
        if (state.get(strId) === 1) {
          value = state.get(strId);
        } else {
          value = state.get(strId) - 1;
        }
      }
      return state.merge({ [id]: value });
    },
    [plusItem]: (state, action) => {
      const { id } = action.payload;
      const strId = String(id);
      return state.merge({ [id]: state.get(strId) ? state.get(strId) + 1 : 1 });
    },
  },
  initialQuantityState,
);
