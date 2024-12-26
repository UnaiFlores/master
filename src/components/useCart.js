import { useState, useEffect } from 'react';

function useCart() {
  const [cart, setCart] = useState(() => {
    // Recuperar el carrito desde localStorage al inicializar
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Actualizar localStorage cuando cambie el carrito
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Función para agregar un libro al carrito
  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  // Función para eliminar un libro del carrito
  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
}

export default useCart;
