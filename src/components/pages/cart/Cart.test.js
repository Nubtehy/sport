import React from 'react';
import { shallow } from 'enzyme';

import Cart from './Cart';

const testProps = {
  myProducts:[],
  total: 12,
  handlePlusItem: jest.fn(),
  handleMinusItem: jest.fn(),
  handleSubmit: jest.fn(),
  handleSetUser: jest.fn(),
  user: {},
  quantity: {},
};

describe('Given a DepositPage component', () => {
	describe('when the component is rendered', () => {
		let component;

		beforeAll(() => {
			component = shallow(<Cart { ...testProps } />);
		});

		it('should match the snapshot', () => {
			expect(component).toMatchSnapshot();
		});
	});
});
