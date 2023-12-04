import { createAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "../types/common";

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [],
};

export const addBookAction = createAction<Book>("add-book");
export const editBookAction = createAction<Book>("edit-book");
export const removeBookAction = createAction<string>("remove-book");

const bookSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBookAction, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(editBookAction, (state, action) => {
        state.books = state.books.map((book) => {
          if (book.id === action.payload.id) {
            return action.payload;
          }
          return book;
        });
      })
      .addCase(removeBookAction, (state, action) => {
        state.books = state.books.filter(
          (book) => book.id !== action.payload
        );
      });
  },
});

export default bookSlice.reducer;
