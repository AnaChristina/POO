import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Cadastro from './components/Cadastro';
import AtualizarCliente from './components/atualizarCliente';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/atualizar" element={<AtualizarCliente />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
