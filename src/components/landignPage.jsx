import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './landingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, [navigate]);

  return (
    <div className="landing-page">
      <h1 className="landing-page__title">Bienvenido a nuestra tienda de libros</h1>
      <p className="landing-page__description">Descubre el mejor catálogo de libros para ti.</p>
    </div>
  );
}

export default LandingPage;
