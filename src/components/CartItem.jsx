import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item__image" />
      <div className="cart-item__info">
        <h3 className="cart-item__title">{item.title}</h3>
        <p className="cart-item__price">{item.price}€</p>
      </div>
      {/* El botón ahora usará removeFromCart como antes */}
      <button 
        className="cart-item__remove-btn" 
        onClick={() => removeFromCart(item.id)}  // Asegúrate de usar removeOneFromCart desde CartPage
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;


