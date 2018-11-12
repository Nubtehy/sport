import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/composables/Header';

import Footer from 'components/composables/Footer';

import { CartContainer } from './Master.styled';

const displayName = 'Master';

const propTypes = {

  title: PropTypes.string.isRequired
};

const defaultProps = {

};

function Master({ children, total, title }) {
  return (
      <CartContainer>
        <Header title={title} total={total} />
        <main>{children}</main>
        <Footer />
      </CartContainer>
  );
}

Master.displayName = displayName;
Master.propTypes = propTypes;
Master.defaultProps = defaultProps;

export default Master;
