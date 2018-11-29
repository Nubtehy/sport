import React from 'react';
import PropTypes from 'prop-types';
import { withStyle } from 'components/HOCs';
import Input from './input.styled';

const displayName = 'Input';

const propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

const defaultProps = {
  onChange: () => '',
  style: {},
  placeholder: '',
  name: '',
  value: '',
};

export function InputBase({
  name, onChange, style, placeholder, value,
}) {
  return (
    <Input name={name} data-name={name} type="text" onChange={onChange} style={style} value={value} placeholder={placeholder} />
  );
}

InputBase.displayName = displayName;
InputBase.propTypes = propTypes;
InputBase.defaultProps = defaultProps;

export const styleCreator = (theme, { accent }) => ({
  backgroundColor: accent ? theme.colorAccent : theme.colorDefault,
});

export default withStyle(InputBase, styleCreator);
