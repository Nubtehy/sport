import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import thunkMiddleware from 'redux-thunk';
import { Map, fromJS } from 'immutable';
import { MemoryRouter } from 'react-router-dom';
import {
  getCartProducts, getProducts,
} from 'selectors';

import {
  initialUserInfoState,
} from 'reducers';
import { enhance, handlers } from './CategoryContainer';

const testStore = configureStore([thunkMiddleware])(
  Map({
    userInfo: initialUserInfoState,
    products: fromJS([{ id: 1, name: 'Ball', image: 'image' }]),
    cart: fromJS([1]),
    quantity: Map({ 1: 1 }),
    user: {
      name: 'test',
      address: 'test',
    },
  }),
);

const testProps = {
  dispatchFetchProducts: jest.fn(),
  dispatchAddToCart: jest.fn(),
};

describe('Given a DepositPageContainer enhancer', () => {
  describe('and handleFetchProducts have been called ones', () => {
    beforeEach(() => {
      handlers.handleFetchProducts(testProps)();
    });

    it('should call the plusItem with provided id', () => {
      expect(testProps.dispatchFetchProducts).toHaveBeenCalledTimes(1);
    });
  });


  describe('when the enhancer is rendered', () => {
    let providedProps;

    beforeEach(() => {
      const DummyContainer = enhance(createSink(((props) => {
        providedProps = props;
        return providedProps;
      })));

      mount(
        <MemoryRouter>
          <Provider store={testStore}>
            <DummyContainer {...testProps} />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('should provide the required props', () => {
      expect(providedProps.handleFetchProducts).toBeInstanceOf(Function);
      expect(providedProps.handleAddToCart).toBeInstanceOf(Function);
      expect(providedProps.myProducts).toEqual(getProducts(testStore.getState()).toJS());
      expect(providedProps.total).toEqual(getCartProducts(testStore.getState()).toJS());
    });
  });
});
