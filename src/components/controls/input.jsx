import React from 'react';
import PropTypes from 'prop-types';
import { withStyle } from 'components/HOCs';

const displayName = 'Input';

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

export function InputBase({
  name, onChange, style, placeholder, value
}) {
  return (
    <input name={name} type="text" onChange={onChange} style={style} value={value} placeholder={placeholder}/>
  );
}

InputBase.displayName = displayName;
InputBase.propTypes = propTypes;
InputBase.defaultProps = defaultProps;

export const styleCreator = (theme, { accent }) => ({
  backgroundColor: accent ? theme.colorAccent : theme.colorDefault,
});

export default withStyle(InputBase, styleCreator);
