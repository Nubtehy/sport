import React from 'react';
import PropTypes from 'prop-types';
import { withStyle } from 'components/HOCs';
import Button from './button.styled';

const displayName = 'Button';

const propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.string,
  name: PropTypes.string,
};

const defaultProps = {
  onClick: undefined,
  style: {},
  children: '',
  name: '',
};

export function ButtonBase({
  name, onClick, style, children,
}) {
  return (
    <Button data-name={name} type="button" onClick={onClick} style={style}>
      {children}
    </Button>
  );
}

ButtonBase.displayName = displayName;
ButtonBase.propTypes = propTypes;
ButtonBase.defaultProps = defaultProps;

export const styleCreator = (theme, { accent }) => ({
  backgroundColor: accent ? theme.colorAccent : theme.colorDefault,
  color: '#ffffff',
  height: '36px',
  padding: '0 18px',
  borderRadius: '18px',
  fontSize: '12px',
  lineHeight: '34px',
});

export default withStyle(ButtonBase, styleCreator);
