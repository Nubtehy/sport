
import React from 'react';
import { FooterWrapper } from './Footer.styled'

const displayName = 'Footer';

const propTypes = {
};

const defaultProps = {

};

function Footer() {
  return (
    <FooterWrapper>
      <div>
        This is Footer
      </div>
    </FooterWrapper>
  );
}


Footer.displayName = displayName;
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
