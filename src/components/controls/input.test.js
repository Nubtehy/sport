import React from 'react';
import { shallow } from 'enzyme';

import { InputBase } from './input';

const testProps = {
  onClick: jest.fn(),
  style: { background: 'blue' },
  name: 'add-form-input',
};

describe('Given an Input component', () => {
  describe('when the component is rendered', () => {
    let component;

    beforeEach(() => {
      component = shallow(<InputBase {...testProps} />);
    });

    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
