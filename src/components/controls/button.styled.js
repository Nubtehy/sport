import styled from 'styled-components';


const Button = styled.button.attrs({
  className: props => props.className,
})`
 background: ${({ theme: { colorAccent } }) => colorAccent}!important;
  &:hover{
    background: transparent!important;
    color: ${({ theme: { colorHover } }) => colorHover}!important;
    border-color: ${({ theme: { colorHover } }) => colorHover}!important;
    cursor: pointer;
  }
  &:focus{
    outline: none;
  }
  &.large{
    height: 65px;
    font-size: 20px;
  }
`;
export default Button;
