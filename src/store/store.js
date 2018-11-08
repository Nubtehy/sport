
import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promiseMiddleware from 'redux-promise-middleware';
import {
  cart, initialCartState,
  products, initialProductsState, userInfo, initialUserInfoState,
} from 'reducers';
import thunkMiddleware from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware()));

export const initialStoreState = Map({
  userInfo: initialUserInfoState,
  products: initialProductsState,
  cart: initialCartState,
});

const store = createStore(
  combineReducers({
    userInfo,
    products,
    cart
  }),
  initialStoreState,
  enhancer,
);

export default store;
