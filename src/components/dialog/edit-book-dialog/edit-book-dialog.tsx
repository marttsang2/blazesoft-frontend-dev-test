import React from 'react'
import PopupDialog, { PopupDialogProps } from '../base';
import './edit-book-dialog.css'
import { Book } from '../../../types/common';

type EditBookDialogProps = PopupDialogProps & { 
    book: Book;
    editBook: (book: Book) => void;
}

const EditBookDialog: React.FC<EditBookDialogProps> = ({ isOpen, onClose, editBook, book: prevBook }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, price, category, description } = e.target as typeof e.target & {
            name: { value: string };
            price: { value: string };
            category: { value: string };
            description: { value: string };
        };
        const book: Book = {
            id: prevBook.id,
            name: name.value,
            price: Number(price.value),
            category: category.value,
            description: description.value
        }
        editBook(book);
        onClose();
    }

  return (
    <PopupDialog isOpen={isOpen} onClose={onClose}>
        <h2>Edit Book</h2>
        <form className='form_wrapper' onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" defaultValue={prevBook.name} />
            </label>
            <label>
                Price:
                <input type="number" name="price" defaultValue={prevBook.price} />
            </label>
            <label>
                Category:
                <select name="category" defaultValue={prevBook.category}>
                    <option value="mystery">Mystery</option>
                    <option value="romance">Romance</option>
                    <option value="science-fiction">Science Fiction</option>
                    <option value="fantasy">Fantasy</option>
                </select>
            </label>
            <label>
                Description:
                <textarea name="description" />
            </label>
            <button type='submit'>Submit</button>
        </form>
    </PopupDialog>
  )
}

export default EditBookDialog