import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import thunkMiddleware from 'redux-thunk';
import { Map, fromJS } from 'immutable';
import { MemoryRouter } from 'react-router-dom';
import {
  getCartProducts, getTotal, getQuantity,
} from 'selectors';
import { getFormValues } from 'redux-form/immutable';

import { enhance } from './ConfirmationContainer';

const testStore = configureStore([thunkMiddleware])(
  Map({
    products: fromJS([{ id: 1, name: 'Ball', image: 'image' }]),
    cart: fromJS([1]),
    quantity: Map({ 1: 1 }),
    form: fromJS(
      {
        cartform: {
          values: {
            firstName: 'eeerwr',
            lastName: 'rwerwer',
            email: 'rwerw@fsdf.ru',
          },
        },
      },
    ),
  }),
);


describe('Given a DepositPageContainer enhancer', () => {
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
            <DummyContainer />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('should provide the required props', () => {
      expect(providedProps.myProducts).toEqual(getCartProducts(testStore.getState()).toJS());
      expect(providedProps.quantity).toEqual(getQuantity(testStore.getState()).toJS());
      expect(providedProps.total).toEqual(getTotal(testStore.getState()));
      expect(providedProps.user).toEqual(getFormValues('cartform')(testStore.getState()).toJS());
    });
  });
});
