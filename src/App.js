import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landignPage';
import HomePage from './components/homepage';
import BookPage from './components/bookpage';
import CartPage from './components/cartpage';
import CheckoutPage from './components/checkoutpage';
import Header from './components/Header';  // Importa el Header
import Footer from './components/Footer';  // Importa el Footer
import { CartProvider } from './components/CartContext';  // Asegúrate de que el CartProvider esté importado

function App() {
  return (
    <CartProvider> {/* Proveedor del carrito para compartir el estado */}
      <Router>
        <Header />  {/* El Header con el carrito visible en todo momento */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer /> {/* Colocamos el Footer aquí */}
      </Router>
    </CartProvider>
  );
}

export default App;



