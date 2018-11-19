import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ProductContainer = styled.div`
  flex: 0 0 auto;
  width: 250px;
  position: relative;
  padding: 18px;
  border: 1px solid #e1e7ec;
  border-radius: 7px;
  background-color: #fff;
  margin: 20px 0;
  img {
    width: 100%;
  }
`;
export const ProductName = styled.div`
  font-family: 'Poppins', sans-serif;
`;

export const ProductPrice = styled.div`

`;
export const ProductPriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
