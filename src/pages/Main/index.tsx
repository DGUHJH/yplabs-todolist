import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { createTodoItem, deleteTodoItem, updateTodoItem } from 'api/fetch';
import TodoItem from 'components/Todo/Item';
import CommonTypography from 'components/Typography/Common';
import { RootState } from 'features';
import { todoAction } from 'features/todo/slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';

const Main = () => {
  const todoList = useSelector((state: RootState) => state.todoList);
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  console.log(todoList);

  useEffect(() => {
    refreshTodoList();
  }, []);

  const refreshTodoList = () => {
    dispatch(todoAction.refreshTodoListLoad());
  };

  const onDeleteButtonClick = (id: number) => () => {
    deleteTodoItem({ id }).then((res) => refreshTodoList());
  };

  const onUpdateTodoItem = (id: number) => (content: string) => {
    updateTodoItem({ id, content }).then((res) => refreshTodoList());
  };

  const onCreateTodoItem = (content: string) => () => {
    createTodoItem({ content }).then((res) => refreshTodoList());
  };

  return (
    <Styled.Root>
      <Styled.TodoListContainer>
        <Styled.TodoListTitleContainer>
          <CommonTypography fontFamily="NotoSansKR-Bold" fontSize={18}>
            yplabs-todolist
          </CommonTypography>
        </Styled.TodoListTitleContainer>
        <Styled.TodolistItemContainer>
          {todoList.map((todoItem) => (
            <TodoItem
              content={todoItem.content}
              onDeleteButtonClick={onDeleteButtonClick(todoItem.id)}
              onUpdateTodoItem={onUpdateTodoItem(todoItem.id)}
              key={`todo_item_${todoItem.id}`}
            />
          ))}
        </Styled.TodolistItemContainer>
        <Styled.InputContainer>
          <Styled.InputTextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onCreateTodoItem(value)()}
          />
          <IconButton onClick={onCreateTodoItem(value)}>
            <Add />
          </IconButton>
        </Styled.InputContainer>
      </Styled.TodoListContainer>
    </Styled.Root>
  );
};

export default Main;
