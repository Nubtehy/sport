import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/composables/Header';

import Footer from 'components/composables/Footer';


const displayName = 'Master';

const propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const defaultProps = {

};

function Master({
  children,
  title,
}) {
  return (
    <div>
      <Header title={title}
      />
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
