import { getTodoList, GetTodoListResponseType } from 'api/fetch';
import { call, put, takeLatest } from 'redux-saga/effects';
import { todoAction } from './slice';

function* handleGetTodoListLoad() {
  const { refreshTodoListFail, refreshTodoListSuccess } = todoAction;
  try {
    const todoList: GetTodoListResponseType = yield call(getTodoList);
    yield put(refreshTodoListSuccess(todoList.data));
  } catch (err) {
    yield put(refreshTodoListFail());
  }
}

export function* watchGetTodoList() {
  const { refreshTodoListLoad } = todoAction;
  yield takeLatest(refreshTodoListLoad, handleGetTodoListLoad);
}
