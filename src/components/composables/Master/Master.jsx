import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/composables/Header';

import Footer from 'components/composables/Footer';

import { CartContainer } from './Master.styled';

const displayName = 'Master';

const propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const defaultProps = {

};

function Master({ children, count, title }) {
  return (
    <div>
      <CartContainer>
        <Header title={title} count={count} />
        <main>{children}</main>
        <Footer />
      </CartContainer>
    </div>
  );
}

Master.displayName = displayName;
Master.propTypes = propTypes;
Master.defaultProps = defaultProps;

export default Master;
