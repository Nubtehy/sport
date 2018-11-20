import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

const testProps = {
  dataQa: 'parent-form-dataQa',
};

describe('Given a Footer component', () => {
  describe('when the component is rendered', () => {
    let component;

    beforeEach(() => {
      component = shallow(<Footer {...testProps} />);
    });

    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
