import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Minha Aplicação</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Listar Clientes</Link></li>
          <li><Link to="/cadastro">Cadastrar</Link></li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
