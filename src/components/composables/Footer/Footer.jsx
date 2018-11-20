
import React from 'react';
import FooterWrapper from './Footer.styled';
import { CartContainer } from '../Master/Master.styled';

const displayName = 'Footer';

const propTypes = {
};

const defaultProps = {

};

function Footer() {
  return (
    <FooterWrapper>
      <CartContainer>
          @onSEO
      </CartContainer>
    </FooterWrapper>
  );
}


Footer.displayName = displayName;
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
