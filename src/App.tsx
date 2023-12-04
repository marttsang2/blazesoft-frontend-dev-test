import React, { useState } from 'react';
import './App.css';
import AddBookDialog from './components/dialog/add-book-dialog/add-book-dialog';
import { useBook } from './hooks/use-book';
import EditBookDialog from './components/dialog/edit-book-dialog/edit-book-dialog';
import { Book } from './types/common';

export default function App() {
  const { books, addBook, editBook, removeBook } = useBook();
  const [isAddDialogOpen, setAddIsDialogOpen] = useState<boolean>(false);
  const [isEditDialogOpen, setEditIsDialogOpen] = useState<boolean>(false);

  const onAddBook = () => {
    setAddIsDialogOpen(true);
  }

  const onEditBook = () => {
    setEditIsDialogOpen(true);
  }

  const onCloseDialog = () => {
    setAddIsDialogOpen(false);
    setEditIsDialogOpen(false);
  }

  const onRemoveBook = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, book: Book) => {
    e.stopPropagation();
    removeBook(book.id);
  }
  return (
    <div className="home-container">
      <button onClick={onAddBook}>Add Book</button>
      <AddBookDialog isOpen={isAddDialogOpen} onClose={onCloseDialog} addBook={addBook} /> 
      <div className='book-list'>
        {
          books.length === 0 && <p className='no-book'>No book available Now.</p>
        }
        {books.map(book => (
          <>
            <EditBookDialog isOpen={isEditDialogOpen} onClose={onCloseDialog} book={book} editBook={editBook} />
            <div className='book-list-item' onClick={onEditBook}>
              <label key={book.name}>
                {`${book.name} $${book.price}`}
                {book.description && <p className='book-description'>{book.description}</p>}
              </label>
              <div className='action-list'>
                <p className='book-tag'>{book.category}</p>
                <button className='action-button' type='button' onClick={(e) => onRemoveBook(e, book)}>Remove</button>
              </div>
            </div>
            </>
        ))}
        </div>
    </div>
  );
}
