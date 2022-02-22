import { hFetch } from './methods/hFetch';
import { requestUrl } from './url';

type GetTodoListResponseType = {
  id: number;
  content: string;
}[];

export const getTodoList = async (): Promise<GetTodoListResponseType> => {
  return await hFetch(`${requestUrl}todo/`, 'get');
};

type CreateTodoItemRequestType = {
  content: string;
};

type CreateTodoItemResponseType = {
  id: 468;
  content: string;
};

export const createTodoItem = async (
  data: CreateTodoItemRequestType
): Promise<CreateTodoItemResponseType> => {
  return await hFetch(`${requestUrl}todo/`, 'post', data);
};

type DeleteTodoItemRequestType = {
  id: string;
};

type DeleteTodoItemResponseType = any;

export const deleteTodoItem = async (
  data: DeleteTodoItemRequestType
): Promise<DeleteTodoItemResponseType> => {
  return await hFetch(`${requestUrl}todo/${data.id}`, 'delete');
};

type UpdateTodoItemRequestType = {
  id: string;
  content: string;
};

type UpdateTodoItemResponseType = any;

export const updateTodoItem = async (
  data: UpdateTodoItemRequestType
): Promise<UpdateTodoItemResponseType> => {
  return await hFetch(`${requestUrl}todo/${data.id}`, 'patch', {
    content: data.content,
  });
};
