import styled from 'styled-components';

export const CarttWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const CartTable = styled.table`
  width: 100%;
  font-size: 14px;
`;

export const TotalContainer = styled.span`
  font-weight: bold;
  font-size: 25px;
`;

export const ControlsWrapper = styled.div`
  width: 30%;
  div{
    margin: 0 0 20px;
  }
  input, button{
    box-sizing:  border-box;
    width: 100%;
  }
`;
