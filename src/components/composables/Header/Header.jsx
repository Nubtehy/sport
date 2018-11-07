
import React from 'react';
import { HeaderWrapper, HeaderTitle } from './Header.styled';


const displayName = 'Header';

const propTypes = {
};

const defaultProps = {

};

function Header({title}) {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        Sports store {title}
      </HeaderTitle>
    </HeaderWrapper>
  );
}


Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
