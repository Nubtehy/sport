import styled from 'styled-components';

const Input = styled.input.attrs({
  'data-name': props => props.name,
  name: props => props.name,
  placeholder: props => props.placeholder,
  onChange: props => props.onChange,
  onBlur: props => props.onBlur,
})`
  height: 40px;
  padding: 0 18px 3px;
  border: 1px solid #dbe2e8;
  border-radius: 22px;
  background-color: #fff!important;
  color: #606975;
  font-family: "Maven Pro", Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus{
    border-color: #fa6800;
    outline: none;
    color: #606975;
    box-shadow: none !important;
  }
`;

export default Input;
