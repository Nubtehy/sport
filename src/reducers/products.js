import { List, Map, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { FULFILLED } from 'redux-promise-middleware';
import { fetchProducts } from 'actions';

let id = -1;

export const initialProductsState = List([Map({ id: 1, name: 'Ball', image: 'image' })]);

const products = handleActions(
  {
    [`${fetchProducts}_${FULFILLED}`]: (state, { payload: { data } }) => fromJS(data),
  },
  initialProductsState,
);

export default products;
