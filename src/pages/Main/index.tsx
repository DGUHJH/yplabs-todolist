import { Add } from '@mui/icons-material';
import { CircularProgress, IconButton } from '@mui/material';
import TodoItem from 'components/Todo/Item';
import CommonTypography from 'components/Typography/Common';
import { RootState } from 'features';
import { todoAction } from 'features/todo/slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';

const Main = () => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    refreshTodoList();
  }, []);

  const refreshTodoList = () => {
    dispatch(todoAction.refreshTodoListLoad());
  };

  const onDeleteButtonClick = (id: number) => () => {
    dispatch(todoAction.deleteTodoItemLoad({ id }));
  };

  const onUpdateTodoItem = (id: number) => (content: string) => {
    dispatch(todoAction.updateTodoItemLoad({ id, content }));
  };

  const onCreateTodoItem = (content: string) => () => {
    dispatch(todoAction.createTodoItemLoad({ content }));
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
          <>
            <Styled.TodolistItemContainer>
              {store.todoList.map((todoItem) => (
                <TodoItem
                  id={todoItem.id}
                  content={todoItem.content}
                  onDeleteButtonClick={onDeleteButtonClick(todoItem.id)}
                  onUpdateTodoItem={onUpdateTodoItem(todoItem.id)}
                  key={`todo_item_${todoItem.id}`}
                />
              ))}
            </Styled.TodolistItemContainer>
            <Styled.InputContainer>
              <Styled.InputTextField
                autoFocus={true}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    onCreateTodoItem(value)();
                    setValue('');
                  }
                }}
              />
              <IconButton onClick={onCreateTodoItem(value)}>
                <Add />
              </IconButton>
            </Styled.InputContainer>
          </>
        )}
      </Styled.TodoListContainer>
    </Styled.Root>
  );
};

export default Main;
