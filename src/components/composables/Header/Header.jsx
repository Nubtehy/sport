
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeaderWrapper, HeaderTitle } from './Header.styled';


const displayName = 'Header';

const propTypes = {
  title: PropTypes.string,
  total: PropTypes.number,
};

const defaultProps = {
  title: '',
  total: 0,
};

function Header({ title, total }) {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        Sports store
        {' '}
        { title }

      </HeaderTitle>
      {
        (title === 'Products') && (
        <Link to="/cart">
          Cart(
            {total}
          )
        </Link>
        )
      }
    </HeaderWrapper>
  );
}


Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
