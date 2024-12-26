import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';  // Asegúrate de que esté importado desde tu contexto
import './CheckoutPage.css';

function CheckoutPage() {
  const { cart, clearCart } = useCart();  // Obtener cart y clearCart desde el contexto
  const navigate = useNavigate();

  // Verificar que cart no sea undefined o nulo
  if (!Array.isArray(cart)) {
    return <p className="checkout-page__empty">Tu carrito está vacío o no es válido.</p>;
  }

  const handleCheckout = () => {
    alert('Pedido realizado con éxito');
    clearCart();  // Vaciar el carrito

    // Redirigir a la página principal después de realizar la compra
    navigate('/home');
  };

  if (cart.length === 0) {
    return <p className="checkout-page__empty">Tu carrito está vacío.</p>;
  }

  const total = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="checkout-page">
      <h1 className="checkout-page__title">Resumen del Pedido</h1>
      <div>
        {cart.map((item) => (
          <div key={item.id} className="checkout-page__item">
            <img 
              className="checkout-page__item-image" 
              src={item.image} 
              alt={`${item.title} cover`} 
            />
            <div className="checkout-page__item-details">
              <span className="checkout-page__item-title">{item.title}</span>
              <p className="checkout-page__item-price">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        <div className="checkout-page__total">
          <h3>Total: ${total}</h3>
        </div>
        <button className="checkout-page__button" onClick={handleCheckout}>
          Confirmar Compra
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;



