import { useDispatch, useSelector } from "react-redux";
import { addBookAction, editBookAction, removeBookAction } from "../redux/book-slice";
import { Book } from "../types/common";
import { RootState } from "../redux";

export const useBook = () => {
    const books = useSelector((state: RootState) => state.book.books);
    const dispatch = useDispatch();
    const addBook = (book: Book) => {
        dispatch(addBookAction(book));
    };
    const removeBook = (name: string) => {
        dispatch(removeBookAction(name));
    };
    const editBook = (book: Book) => {
        dispatch(editBookAction(book));
    }
    return { books, addBook, editBook, removeBook };
}