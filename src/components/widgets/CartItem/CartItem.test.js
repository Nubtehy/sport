import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './CartItem';

const testProps = {
  name: 'Product 1',
  image: '',
  quantity: 1,
  id: 1,
  price: 22,
  handlePlusItem: jest.fn(),
  handleMinusItem: jest.fn(),
  controls: true,
};
describe('Given the CartItem component', () => {
  describe('when the component is rendered', () => {
    const component = shallow(<CartItem {...testProps} />);
    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
