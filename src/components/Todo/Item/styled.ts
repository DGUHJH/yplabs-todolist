import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  max-width: 300px;
  display: flex;
  gap: 10px;
`;

export const ContentTextField = styled.input`
  width: 200px;
  &&& {
    font-family: NotoSansKR-Regular;
    font-size: 14px;
    line-height: 120%;
    color: #111;
    border-color: #fff0;
    border-width: 1px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 10px;
`;
