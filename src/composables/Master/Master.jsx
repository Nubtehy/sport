import React from 'react';
import PropTypes from 'prop-types';

import Header from 'composables/Header';

import Footer from 'composables/Footer';


const displayName = 'Master';

const propTypes = {
  children: PropTypes.string.isRequired,
};

const defaultProps = {

};

function Master({
  children
}) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

Master.displayName = displayName;
Master.propTypes = propTypes;
Master.defaultProps = defaultProps;

export default Master;
