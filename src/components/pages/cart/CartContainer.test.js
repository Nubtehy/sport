import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import thunkMiddleware from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { Map } from 'immutable';

import { initialCartState } from './cart';
import { initialQuantityState, quantity } from './quantity';
import { initialProductsState } from './products';
import { initialUserInfoState } from './userInfo';
import { initialUserState } from './user';
import { enhance, handlers } from './CartContainer';

import { getCartProducts, getTotal, getQuantity, getUser } from 'selectors';


const testStore = configureStore([ thunkMiddleware ])(
	Map({
		paymentLobby: initialCartState,
		paymentLobbyConfig: Map({
			memberId: '111',
			sessionTokenId: '222'
		})
	})
);

const testProps = {
	addUser: jest.fn(),
	plusItem: jest.fn(),
	minusItem: jest.fn(),
};

describe('Given a DepositPageContainer enhancer', () => {
	describe('when the enhancer is rendered', () => {
		let providedProps;

		beforeEach(() => {
			const DummyContainer = enhance(createSink(props => (providedProps = props)));

			mount(
				<MemoryRouter>
					<Provider store={ testStore }>
						<DummyContainer />
					</Provider>
				</MemoryRouter>
			);
		});

		it('should provide the required props', () => {
			expect(providedProps.addUser).toBeInstanceOf(Function);
			expect(providedProps.activeActionStages).toEqual([ actionStages.pageLoad, actionStages.paymentAccountSelect ]);
			expect(providedProps.plusItem).toBeInstanceOf(Function);
			expect(providedProps.minusItem).toBeInstanceOf(Function);
		});

	});
});
