import React from 'react';
import { shallow } from 'enzyme';

import Master from './Master';

const testProps ={ children: '', total: 12, title: 'test' }


describe('Given a Master component', () => {
	describe('when the component is rendered', () => {
		let component;

		beforeEach(() => {
			component = shallow(
				<Master { ...testProps }>
					<div>Page</div>
				</Master>
			);
		});

		it('should match the snapshot', () => {
			expect(component).toMatchSnapshot();
		});
	});
});
