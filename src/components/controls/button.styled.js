import styled from 'styled-components';


const Button = styled.button`
  &:hover{
    background: transparent!important;
    color: ${({ theme: { colorHover } }) => colorHover}!important;
    border-color: ${({ theme: { colorHover } }) => colorHover}!important;
    cursor: pointer;
  }
  &:focus{
    outline: none;
  }
`;
export default Button;