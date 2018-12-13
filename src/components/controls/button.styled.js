import styled from 'styled-components';


const Button = styled.button.attrs({
  className: props => props.className,
  disabled: props => props.disabled,
})`
 background: ${({ theme: { colorAccent } }) => colorAccent};
  &:hover{
    background: transparent;
    color: ${({ theme: { colorHover } }) => colorHover};
    border-color: ${({ theme: { colorHover } }) => colorHover};
    cursor: pointer;
  }
  &:focus{
    outline: none;
  }
`;
export default Button;
