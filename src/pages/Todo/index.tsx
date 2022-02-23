import { Button, CircularProgress } from '@mui/material';
import CommonTypography from 'components/Typography/Common';
import { RootState } from 'features';
import { todoAction } from 'features/todo/slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import * as Styled from './styled';

const Todo = () => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const location = useLocation();
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    refreshTodoList();
  }, []);

  const refreshTodoList = () => {
    dispatch(todoAction.refreshTodoListLoad());
  };

  const id = location.pathname.split('/')[2];
  const todoItemData = store.todoList.filter((todo) => todo.id === +id);

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
            <CommonTypography fontFamily="NotoSansKR-Regular" fontSize={18}>
              {todoItemData.length === 0
                ? '잘못된 접근입니다.'
                : todoItemData[0].content}
            </CommonTypography>
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
