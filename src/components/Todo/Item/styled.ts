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

export const ContentCheckboxWrapper = styled.div`
  width: 42px;
  height: 42px;
`;

export const ContentTypoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
  cursor: pointer;
`;

export const ContentTextField = styled.textarea`
  width: 300px;
  &&& {
    font-family: NotoSansKR-Regular;
    font-size: 14px;
    line-height: 120%;
    color: #111;
    border-width: 1px;
  }
`;

export const MenuContainer = styled.div`
  height: 42px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
