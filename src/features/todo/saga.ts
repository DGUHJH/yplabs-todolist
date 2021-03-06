import {
  createTodoItem,
  deleteTodoItem,
  getTodoList,
  GetTodoListResponseType,
  updateTodoItem,
} from 'api/fetch';
import { call, put, takeLatest } from 'redux-saga/effects';
import { todoAction } from './slice';

export function* handleGetTodoListLoad() {
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

export function* handleDeleteTodoListLoad(action: any) {
  const {
    refreshTodoListLoad,
    refreshTodoListFail,
    refreshTodoListSuccess,
    deleteTodoItemFail,
    deleteTodoItemSuccess,
  } = todoAction;
  try {
    yield call(() => deleteTodoItem({ id: action.payload.id }));
    yield put(deleteTodoItemSuccess());
    try {
      yield put(refreshTodoListLoad());
      const todoList: GetTodoListResponseType = yield call(getTodoList);
      yield put(refreshTodoListSuccess(todoList.data));
    } catch (err) {
      yield put(refreshTodoListFail());
    }
  } catch (err) {
    yield put(deleteTodoItemFail());
  }
}

export function* watchDeleteTodoList() {
  const { deleteTodoItemLoad } = todoAction;
  yield takeLatest(deleteTodoItemLoad, handleDeleteTodoListLoad);
}

export function* handleCreateTodoListLoad(action: any) {
  const {
    refreshTodoListLoad,
    refreshTodoListFail,
    refreshTodoListSuccess,
    createTodoItemSuccess,
    createTodoItemFail,
  } = todoAction;
  try {
    yield call(() => createTodoItem({ content: action.payload.content }));
    yield put(createTodoItemSuccess());
    try {
      yield put(refreshTodoListLoad());
      const todoList: GetTodoListResponseType = yield call(getTodoList);
      yield put(refreshTodoListSuccess(todoList.data));
    } catch (err) {
      yield put(refreshTodoListFail());
    }
  } catch (err) {
    yield put(createTodoItemFail());
  }
}

export function* watchCreateTodoList() {
  const { createTodoItemLoad } = todoAction;
  yield takeLatest(createTodoItemLoad, handleCreateTodoListLoad);
}

export function* handleUpdateTodoListLoad(action: any) {
  const {
    refreshTodoListLoad,
    refreshTodoListFail,
    refreshTodoListSuccess,
    updateTodoItemSuccess,
    updateTodoItemFail,
  } = todoAction;
  try {
    yield call(() =>
      updateTodoItem({ id: action.payload.id, content: action.payload.content })
    );
    yield put(updateTodoItemSuccess());
    try {
      yield put(refreshTodoListLoad());
      const todoList: GetTodoListResponseType = yield call(getTodoList);
      yield put(refreshTodoListSuccess(todoList.data));
    } catch (err) {
      yield put(refreshTodoListFail());
    }
  } catch (err) {
    yield put(updateTodoItemFail());
  }
}

export function* watchUpdateTodoList() {
  const { updateTodoItemLoad } = todoAction;
  yield takeLatest(updateTodoItemLoad, handleUpdateTodoListLoad);
}
