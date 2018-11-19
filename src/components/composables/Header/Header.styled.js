import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  flex: 0 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 25px 0 rgba(47, 56, 68, 0.22);
  background-color: #cccccc;
  min-height: 84px;
  border-bottom: 1px solid #e1e7ec;
  margin-bottom: 30px;
  background-color: #fff;
  & > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 30px;
`;
