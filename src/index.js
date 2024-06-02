import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Roteador from './componentes/roteador';
import { useEffect } from 'react';
import M from 'materialize-css'; // Importa o JavaScript do Materialize CSS
import 'materialize-css/dist/css/materialize.min.css'; // Importa o CSS do Materialize CSS


ReactDOM.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
