import { Container } from '@mui/material';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #12321222;
  display: flex;
  align-items: center;
`;

export const TodoListContainer = styled(Container)`
  &&& {
    width: 450px;
    min-height: 300px;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    box-sizing: border-box;
  }
`;

export const TodoListTitleContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px #ccc solid;
`;

export const TodolistItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
