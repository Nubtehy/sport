
import React from 'react';


const displayName = 'Header';

const propTypes = {
};

const defaultProps = {

};

function Header() {
  return (
    <header>
      <div>
        This is header
      </div>
    </header>
  );
}


Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
