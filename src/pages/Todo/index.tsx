import { CircularProgress } from '@mui/material';
import CommonTypography from 'components/Typography/Common';
import { RootState } from 'features';
import { todoAction } from 'features/todo/slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';

const Todo = () => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    refreshTodoList();
  }, []);

  const refreshTodoList = () => {
    dispatch(todoAction.refreshTodoListLoad());
  };

  return (
    <Styled.Root>
      <Styled.TodoListContainer>
        <Styled.TodoListTitleContainer>
          <CommonTypography fontFamily="NotoSansKR-Bold" fontSize={18}>
            yplabs-todolist
          </CommonTypography>
        </Styled.TodoListTitleContainer>
        {store.isLoading ? (
          <Styled.ProgressContainer>
            <CircularProgress />
          </Styled.ProgressContainer>
        ) : (
          <></>
        )}
      </Styled.TodoListContainer>
    </Styled.Root>
  );
};

export default Todo;
