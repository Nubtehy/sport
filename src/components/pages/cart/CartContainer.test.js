import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import thunkMiddleware from 'redux-thunk';
import { Map } from 'immutable';
import { Route, Link, MemoryRouter } from 'react-router-dom';

import {
  getCartProducts,
  getTotal,
  getQuantity,
  getUser,
} from 'selectors';

import {
  initialQuantityState,
  initialProductsState,
  initialUserInfoState,
  initialCartState,
  initialUserState,
} from 'reducers';
import { enhance, handlers } from './CartContainer';


const testStore = configureStore([thunkMiddleware])(
  Map({
    userInfo: initialUserInfoState,
    products: initialProductsState,
    cart: initialCartState,
    quantity: initialQuantityState,
    user: initialUserState,
  }),
);

const testProps = {
  handleSubmit: jest.fn(),
  handlePlusItem: jest.fn(),
  handleMinusItem: jest.fn(),
  handleSetUser: jest.fn(),
};

describe('Given a DepositPageContainer enhancer', () => {
  describe('when the handlePlusItem is called', () => {
    const id = 1;

    beforeEach(() => {
      handlers.handlePlusItem;
    });

    describe('and the action is "PLUS_ITEM"', () => {
      it('should call the plusItem with provided id', () => {
        expect(testProps.handlePlusItem).toHaveBeenCalledWith(id);
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
      expect(providedProps.addUser).toBeInstanceOf(Function);
      expect(providedProps.handlePlusItem).toBeInstanceOf(Function);
      expect(providedProps.minusItem).toBeInstanceOf(Function);
    });
  });
});
