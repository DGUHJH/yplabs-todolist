import axios from 'axios';
import { requestUrl } from './url';

export type GetTodoListResponseType = {
  data: {
    id: number;
    content: string;
  }[];
};

export const getTodoList = async () => {
  return axios.get(`${requestUrl}todo/`);
};

type CreateTodoItemRequestType = {
  content: string;
};

type CreateTodoItemResponseType = {
  data: {
    id: 468;
    content: string;
  };
};

export const createTodoItem = async (data: CreateTodoItemRequestType) => {
  return axios.post(`${requestUrl}todo/`, data);
};

type DeleteTodoItemRequestType = {
  id: number;
};

type DeleteTodoItemResponseType = any;

export const deleteTodoItem = async (data: DeleteTodoItemRequestType) => {
  return axios.delete(`${requestUrl}todo/${data.id}`);
};

type UpdateTodoItemRequestType = {
  id: number;
  content: string;
};

type UpdateTodoItemResponseType = any;

export const updateTodoItem = async (data: UpdateTodoItemRequestType) => {
  return axios.patch(`${requestUrl}todo/${data.id}`, {
    content: data.content,
  });
};
