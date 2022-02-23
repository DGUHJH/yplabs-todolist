import { call, put } from '@redux-saga/core/effects';
import { getTodoList } from 'api/fetch';
import { handleGetTodoListLoad } from './saga';
import { todoAction } from './slice';

describe('handleGetTodoListLoad', () => {
  it('투두리스트를 가져오고 redux에 넣는다.', () => {
    const iterator = handleGetTodoListLoad();
    expect(iterator.next().value).toEqual(call(getTodoList));
    expect(iterator.next().value).toEqual(
      put(todoAction.refreshTodoListSuccess([]))
    );
    expect(iterator.next().value).toEqual(
      put(todoAction.refreshTodoListFail())
    );
    expect(iterator.next().done).toBeTruthy();
  });
});

export {};
