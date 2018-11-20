import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Given a Header component', () => {
  describe('when the component is rendered', () => {
    let component;

    beforeEach(() => {
      component = shallow(<Header />);
    });

    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
