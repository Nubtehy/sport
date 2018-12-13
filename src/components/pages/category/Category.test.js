import React from 'react';
import { shallow } from 'enzyme';

import Category from './Category';

const testProps = {
  myProducts: [],
  handleAddToCart: jest.fn(),
  total: [],
};

describe('Given a Category component', () => {
  describe('when the component is rendered', () => {
    let component;

    beforeAll(() => {
      component = shallow(<Category {...testProps} />);
    });

    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
