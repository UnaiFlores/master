import React, { createContext, useState, useContext } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  // Estado para el carrito

  // Función para agregar un libro al carrito
  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  // Función para eliminar una instancia de un libro del carrito
  const removeOneFromCart = (bookId) => {
    setCart((prevCart) => {
      const bookIndex = prevCart.findIndex((book) => book.id === bookId);
      if (bookIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(bookIndex, 1);  // Eliminar solo una instancia
        return updatedCart;
      }
      return prevCart;
    });
  };

  // Función para eliminar todas las instancias de un libro del carrito
  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);  // Vaciar el carrito
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeOneFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el carrito
export const useCart = () => {
  return useContext(CartContext);
};


