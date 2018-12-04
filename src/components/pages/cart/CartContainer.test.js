import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import thunkMiddleware from 'redux-thunk';
import { Map, fromJS, List } from 'immutable';
import { MemoryRouter } from 'react-router-dom';

import {
  getCartProducts, getTotal, getQuantity, getUser,
} from 'selectors';

import {
  initialQuantityState,
  initialProductsState,
  initialUserInfoState,
  initialCartState,
} from 'reducers';
import { enhance, handlers } from './CartContainer';

const testStore = configureStore([thunkMiddleware])(
  Map({
    userInfo: initialUserInfoState,
    products: List([Map({ id: 1, name: 'Ball', image: 'image' })]),
    cart: fromJS([1]),
    quantity: Map({ 1: 1 }),
    user: {
      name: 'test',
      address: 'test',
    },
  }),
);

const testProps = {
  dispatchAddUser: jest.fn(),
  dispatchPlusItem: jest.fn(),
  dispatchMinusItem: jest.fn(),
};

describe('Given a DepositPageContainer enhancer', () => {
  describe('when the handlePlusItem is called', () => {
    const id = 1;

    beforeEach(() => {
      handlers.handlePlusItem(testProps)(id);
    });

    describe('and the action is "PLUS_ITEM"', () => {
      it('should call the plusItem with provided id', () => {
        expect(testProps.dispatchPlusItem).toHaveBeenCalledWith(id);
      });
    });
  });

  describe('when the handleMinusItem is called', () => {
    const id = 1;

    beforeEach(() => {
      handlers.handleMinusItem(testProps)(id);
    });

    describe('and the action is "MINUS_ITEM"', () => {
      it('should call the minusItem with provided id', () => {
        expect(testProps.dispatchMinusItem).toHaveBeenCalledWith(id);
      });
    });
  });
  describe('when the enhancer is rendered', () => {
    let providedProps;

    beforeEach(() => {
      const DummyContainer = enhance(createSink(props => (providedProps = props)));

      mount(
        <MemoryRouter>
          <Provider store={testStore}>
            <DummyContainer {...testProps} />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('should provide the required props', () => {
      expect(providedProps.dispatchPlusItem).toBeInstanceOf(Function);
      expect(providedProps.dispatchMinusItem).toBeInstanceOf(Function);
      expect(providedProps.dispatchAddUser).toBeInstanceOf(Function);
      expect(providedProps.myProducts).toEqual(getCartProducts(testStore.getState()).toJS());
      expect(providedProps.total).toEqual(getTotal(testStore.getState()));
      expect(providedProps.quantity).toEqual(getQuantity(testStore.getState()).toJS());
      expect(providedProps.user).toEqual(getUser(testStore.getState()));
    });
  });
});
