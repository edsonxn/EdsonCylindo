import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Asumiendo que este es el nombre de tu componente principal
import './index.css'; // Si tienes un archivo CSS para estilos globales

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
