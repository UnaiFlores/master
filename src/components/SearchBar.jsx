// SearchBar.jsx
import React from 'react';
import './SearchBar.css';  // Importamos los estilos para la barra de búsqueda

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)} // Llama a la función de cambio de búsqueda
        placeholder="Buscar libros..."
        className="search-bar__input"
      />
    </div>
  );
}

export default SearchBar;
