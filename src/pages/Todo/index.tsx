import { Button, CircularProgress } from '@mui/material';
import CommonTypography from 'components/Typography/Common';
import { RootState } from 'features';
import { todoAction } from 'features/todo/slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import * as Styled from './styled';

const Todo = () => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    refreshTodoList();
  }, []);

  const refreshTodoList = () => {
    dispatch(todoAction.refreshTodoListLoad());
  };

  const id = location.pathname.split('/')[2];
  const todoItemData = store.todoList.filter((todo) => todo.id === +id);

  const contentLineList = todoItemData[0]?.content.split('\n');

  return (
    <Styled.Root>
      <Styled.TodoListContainer>
        <Styled.TodoListTitleContainer>
          <CommonTypography fontFamily="NotoSansKR-Bold" fontSize={18}>
            yplabs-todolist-details
          </CommonTypography>
        </Styled.TodoListTitleContainer>
        {store.isLoading ? (
          <Styled.ProgressContainer>
            <CircularProgress />
          </Styled.ProgressContainer>
        ) : (
          <Styled.TodoItemContainer>
            {todoItemData.length === 0
              ? '잘못된 접근입니다.'
              : contentLineList?.map((contentLine, index) => (
                  <CommonTypography
                    fontFamily="NotoSansKR-Regular"
                    fontSize={18}
                    key={`todo_item_content_line_${index}`}
                  >
                    {contentLine}
                  </CommonTypography>
                ))}
          </Styled.TodoItemContainer>
        )}
        <Styled.ButtonWrapper>
          <Button fullWidth={true} onClick={() => (window.location.href = '/')}>
            뒤로가기
          </Button>
        </Styled.ButtonWrapper>
      </Styled.TodoListContainer>
    </Styled.Root>
  );
};

export default Todo;
