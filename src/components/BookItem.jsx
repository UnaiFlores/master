import React from 'react';
import { Link } from 'react-router-dom';
import './BookItem.css';

function BookItem({ book }) {
  return (
    <div className="book-item">
      <Link to={`/book/${book.id}`} className="book-item__link">
        <img src={book.image} alt={book.title} className="book-item__image" />
        <h3 className="book-item__title">{book.title}</h3>
      </Link>
      <p className="book-item__price">${book.price}</p>
    </div>
  );
}

export default BookItem;
