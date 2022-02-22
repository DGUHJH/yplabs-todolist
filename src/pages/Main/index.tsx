import CommonTypography from 'components/Typography/Common';
import * as Styled from './styled';

const Main = () => {
  return (
    <Styled.Root>
      <Styled.TodoListContainer>
        <Styled.TodoListTitleContainer>
          <CommonTypography fontFamily="NotoSansKR-Bold" fontSize={18}>
            yblabs-todolist
          </CommonTypography>
        </Styled.TodoListTitleContainer>
        <Styled.TodolistItemContainer>
          <CommonTypography fontFamily="NotoSansKR-Regular" fontSize={14}>
            yblabs-todolist
          </CommonTypography>
        </Styled.TodolistItemContainer>
      </Styled.TodoListContainer>
    </Styled.Root>
  );
};

export default Main;
