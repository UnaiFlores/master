import React, { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;  // Variable para recordar la última posición del scroll

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Si estamos bajando, ocultamos el footer
      if (currentScroll > lastScrollTop) {
        setVisible(false);  // Ocultamos el footer
      } else {
        setVisible(true);  // Mostramos el footer
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evitamos que el valor sea negativo
    };

    window.addEventListener('scroll', handleScroll);  // Agregamos el listener de scroll

    return () => {
      window.removeEventListener('scroll', handleScroll);  // Limpiamos el listener cuando el componente se desmonte
    };
  }, []);

  return (
    <footer className={`footer ${visible ? 'visible' : 'hidden'}`}>
      <p>&copy; 2024 Relatos de Papel. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;

