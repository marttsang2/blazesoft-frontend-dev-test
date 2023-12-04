import React from 'react'
import PopupDialog, { PopupDialogProps } from '../base';
import './add-book-dialog.css'
import { Book } from '../../../types/common';

type AddBookDialogProps = PopupDialogProps & { addBook: (book: Book) => void }

const AddBookDialog: React.FC<AddBookDialogProps> = ({ isOpen, onClose, addBook }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, price, category, description } = e.target as typeof e.target & {
            name: { value: string };
            price: { value: string };
            category: { value: string };
            description: { value: string };
        };
        const book: Book = {
            id: Math.random().toString(36).substr(2, 9),
            name: name.value,
            price: Number(price.value),
            category: category.value,
            description: description.value
        }
        addBook(book);
        onClose();
    }

  return (
    <PopupDialog isOpen={isOpen} onClose={onClose}>
        <h2>Add Book</h2>
        <form className='form_wrapper' onSubmit={handleSubmit}>
            <label>
                <span>Name:</span>
                <input type="text" name="name" />
            </label>
            <label>
                <span>Price:</span>
                <input type="number" name="price" />
            </label>
            <label>
                <span>Category:</span>
                <select name="category">
                    <option value="mystery">Mystery</option>
                    <option value="romance">Romance</option>
                    <option value="science-fiction">Science Fiction</option>
                    <option value="fantasy">Fantasy</option>
                </select>
            </label>
            <label>
                <span>Description:</span>
                <textarea name="description" />
            </label>
            <button type='submit'>Submit</button>
        </form>
    </PopupDialog>
  )
}

export default AddBookDialog