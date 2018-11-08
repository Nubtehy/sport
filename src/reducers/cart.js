import { Map, List } from 'immutable';
import { handleActions } from 'redux-actions';
import { addToCart, removeProduct, fetchProducts } from 'actions';

export const initialCartState =  List([Map({ id: 1})]);;


const cart = handleActions(
  {
    [addToCart]: (state, action) => {
        console.log(state);
      return state.concat([action.payload])

    },
  },
  initialCartState,
);


export default cart;
