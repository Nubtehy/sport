import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

const testProps = {
  name: 'Product 1',
  image: '',
  handleAddToCart: jest.fn(),
  price: 212,
};
describe('Given the CartItem component', () => {
  describe('when the component is rendered', () => {
    const component = shallow(<Product {...testProps} />);
    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
