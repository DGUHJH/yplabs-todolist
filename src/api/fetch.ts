import { hFetch } from './methods/hFetch';
import { requestUrl } from './url';

export const getTodoList = async (): Promise<any> => {
  return await hFetch(`${requestUrl}todo/`, 'get');
};

type CreateTodoItemRequestType = {
  content: string;
};

export const createTodoItem = async (
  data: CreateTodoItemRequestType
): Promise<any> => {
  return await hFetch(`${requestUrl}todo/`, 'post', data);
};

type DeleteTodoItemRequestType = {
  id: string;
};

export const deleteTodoItem = async (
  data: DeleteTodoItemRequestType
): Promise<any> => {
  return await hFetch(`${requestUrl}todo/${data.id}`, 'delete');
};

type UpdateTodoItemRequestType = {
  id: string;
  content: string;
};

export const updateTodoItem = async (
  data: UpdateTodoItemRequestType
): Promise<any> => {
  return await hFetch(`${requestUrl}todo/${data.id}`, 'patch', {
    content: data.content,
  });
};
