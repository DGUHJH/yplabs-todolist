import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import {
  createTodoItem,
  deleteTodoItem,
  getTodoList,
  updateTodoItem,
} from 'api/fetch';
import TodoItem from 'components/Todo/Item';
import CommonTypography from 'components/Typography/Common';
import { useEffect, useState } from 'react';
import { TodoType } from 'types/common';
import * as Styled from './styled';

const Main = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    refreshTodoList();
  }, []);

  const refreshTodoList = () => {
    getTodoList().then((res) => setTodoList(res));
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
