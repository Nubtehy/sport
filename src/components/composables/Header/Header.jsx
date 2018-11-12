
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, HeaderTitle } from './Header.styled';


const displayName = 'Header';

const propTypes = {
};

const defaultProps = {

};

function Header({title, total}) {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        Sports store {title}
        {
          (title == 'Products') && <Link to='/cart'> Cart ({total})</Link>
        }
      </HeaderTitle>
    </HeaderWrapper>
  );
}


Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
