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
  input, label, type, meta: { touched, error }, style,
}) {
  return (
    <div className="input-row">
      <Input {...input} type={type} placeholder={label} style={style} />
      {touched && error && <span>{error}</span>}
    </div>
  );
}

InputBase.displayName = displayName;
InputBase.propTypes = propTypes;
InputBase.defaultProps = defaultProps;

export const styleCreator = (theme, { accent }) => ({
  backgroundColor: accent ? theme.colorAccent : theme.colorDefault,
});

export default withStyle(InputBase, styleCreator);
