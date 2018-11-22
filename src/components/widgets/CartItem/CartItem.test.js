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
  let component;

  beforeEach(() => {
    component = shallow(<CartItem {...testProps} />);
  });
  describe('when the component is rendered with controls', () => {
    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the component is rendered without controls', () => {
    beforeAll(() => {
      testProps.controls = false;
    });
    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
