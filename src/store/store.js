import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promiseMiddleware from 'redux-promise-middleware';
import {
  quantity,
  initialQuantityState,
  cart,
  initialCartState,
  products,
  initialProductsState,
  userInfo,
  initialUserInfoState,
} from 'reducers';

import { reducer as reduxFormReducer } from 'redux-form/immutable';
import thunkMiddleware from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware()));

export const initialStoreState = Map({
  userInfo: initialUserInfoState,
  products: initialProductsState,
  cart: initialCartState,
  quantity: initialQuantityState,
});

const store = createStore(
  combineReducers({
    userInfo,
    products,
    cart,
    quantity,
    form: reduxFormReducer, // mounted under "form"
  }),
  initialStoreState,
  enhancer,
);

export default store;
