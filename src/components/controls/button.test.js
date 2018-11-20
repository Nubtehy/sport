import React from 'react';
import { shallow } from 'enzyme';

import { ButtonBase } from './button';

const testProps = {
  onClick: jest.fn(),
  style: { background: 'blue' },
  name: 'add-form-button',
};

describe('Given an Input component', () => {
  describe('when the component is rendered', () => {
    let component;

    beforeEach(() => {
      component = shallow(<ButtonBase {...testProps} />);
    });

    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
