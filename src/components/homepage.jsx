import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';
import SearchBar from './SearchBar';
import mockBooks from './mockData';
import './HomePage.css';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setBooks(mockBooks);
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="home-page">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="home-page__books">
        {filteredBooks.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            onClick={() => handleBookClick(book.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;




