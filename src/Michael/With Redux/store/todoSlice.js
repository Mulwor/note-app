import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {},
    removeTodo(state, action) {},
    toggleTodoComplete(state, action) {}
  },
});
