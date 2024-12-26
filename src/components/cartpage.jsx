import { useCart } from './CartContext';  
import { Link } from 'react-router-dom';  
import CartItem from './CartItem';  
import './CartPage.css';

function CartPage() {
  const { cart, removeOneFromCart } = useCart();  // Asegúrate de usar removeOneFromCart

  // Si no hay libros en el carrito
  if (cart.length === 0) {
    return <div>El carrito está vacío.</div>;
  }

  return (
    <div className="cart-page">
      <h1>Carrito</h1>
      
      {/* Mostrar los libros en el carrito usando CartItem */}
      <div className="cart-page__items">
        {cart.map((book) => (
          <CartItem 
            key={book.id} 
            item={book} 
            removeFromCart={removeOneFromCart}  // Usa removeOneFromCart para eliminar solo una instancia
          />
        ))}
      </div>

      {/* Botón para proceder al checkout */}
      <div className="cart-page__checkout">
        <Link to="/checkout">
          <button className="cart-page__checkout-btn">Proceder al checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default CartPage;





