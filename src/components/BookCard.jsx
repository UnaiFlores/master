import React from 'react';
import './BookCard.css';

function BookCard({ book, onClick }) {
  return (
    <div className="book-card" onClick={onClick}>  {/* Usamos onClick pasado desde HomePage */}
      <img 
        className="book-card__cover" 
        src={book.image} 
        alt={`${book.title} cover`} 
      />
      <h2 className="book-card__title">{book.title}</h2>
      <p className="book-card__price">Precio: {book.price}€</p> {/* Mostrar el precio */}
    </div>
  );
}

export default BookCard;

