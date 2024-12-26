import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';  // Usamos el hook useCart
import './Header.css';

function Header() {
  const [cartVisible, setCartVisible] = useState(false);  // Controla la visibilidad del carrito
  const { cart } = useCart();  // Obtiene el carrito desde el contexto

  const toggleCart = () => {
    setCartVisible(!cartVisible);  // Alterna la visibilidad del carrito
  };

  return (
    <header className="header">
      <h1 className="header__title">Mi Tienda de Libros</h1>
      <div className="header__cart" onClick={toggleCart}>
        <span>Carrito ({cart.length})</span>  {/* Muestra el número de libros en el carrito */}
      </div>

      {cartVisible && (
        <div className="header__cart-dropdown">
          {cart.map((item) => (
            <div key={item.id} className="header__cart-item">
              <img src={item.image} alt={item.title} className="header__cart-item-image" />  {/* Mostrar imagen del libro */}
              <span>{item.title}</span>
            </div>
          ))}
          <Link to="/cart">Ir al carrito</Link>  {/* Enlace al carrito completo */}
        </div>
      )}
    </header>
  );
}

export default Header;

