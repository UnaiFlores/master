import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Mantén el CSS global aquí si lo necesitas
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
