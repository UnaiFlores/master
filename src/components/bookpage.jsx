import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Para obtener el id de la URL
import mockBooks from './mockData';  // Importar los datos de prueba
import { useCart } from './CartContext';  // Importar el hook useCart
import './BookPage.css';

function BookPage() {
  const { id } = useParams();  // Obtener el id de la URL
  const [book, setBook] = useState(null);  // Estado para almacenar el libro
  const { addToCart } = useCart();  // Obtener la función addToCart desde el CartContext

  useEffect(() => {
    // Buscar el libro que corresponde al id de la URL
    const foundBook = mockBooks.find(b => b.id === parseInt(id));  // Buscar el libro por id
    setBook(foundBook);  // Establecer el libro en el estado
  }, [id]);  // Solo ejecutar este efecto cuando cambie el id

  if (!book) {
    return <div className="book-page__loading">Cargando...</div>;  // Mostrar un mensaje mientras se carga el libro
  }

  return (
    <div className="book-page">
      <div className="book-page__content">
        <img 
          src={book.image} 
          alt={`${book.title} cover`} 
          className="book-page__image" 
        />
        <div className="book-page__details">
          <h1 className="book-page__title">{book.title}</h1>
          <h2 className="book-page__author">Autor: {book.author}</h2>
          <p className="book-page__description">{book.description}</p>
          <p className="book-page__category">Categoría: {book.category}</p>
          <p className="book-page__price">Precio: ${book.price.toFixed(2)}</p>
          <p className="book-page__language">Idioma: {book.language}</p>
          <p className="book-page__year">Año: {book.year}</p>
          <p className="book-page__pages">Páginas: {book.pages}</p>
          <p className="book-page__publisher">Editorial: {book.publisher}</p>
          <button 
            className="book-page__button" 
            onClick={() => addToCart(book)}  // Agregar el libro al carrito al hacer clic
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookPage;


