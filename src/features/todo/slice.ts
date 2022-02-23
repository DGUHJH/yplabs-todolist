import { createSlice } from '@reduxjs/toolkit';
import { TodoType } from 'types/common';

export type TodoSliceState = {
  isLoading: boolean;
  todoList: TodoType[];
  error: boolean;
};

const initialState: TodoSliceState = {
  isLoading: false,
  todoList: [],
  error: false,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    refreshTodoListLoad: (state) => {
      state.isLoading = true;
    },
    refreshTodoListSuccess: (state, action) => {
      state.isLoading = false;
      state.todoList = action.payload;
    },
    refreshTodoListFail: (state) => {
      state.isLoading = false;
      state.todoList = [];
      state.error = true;
    },
  },
  extraReducers: {},
});
export const todoAction = todoSlice.actions;

export default todoSlice.reducer;
