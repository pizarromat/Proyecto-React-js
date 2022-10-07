import React from 'react';
import {Link} from 'react-router-dom'

import CartWidget from './CartWidget';
import Index from './paginas/Index';
import Carta from './paginas/Carta';
import Compra from './paginas/Compra';
import Nosotros from './paginas/Nosotros';
import Contacto from './paginas/Contacto';

function BasicExample() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <Link to={'/'}>
          <img src="./PIZZERIA PROVOLETA.png" width='100px' />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to='/' >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to='/Carta' >La Carta</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to='/Compra' >Compra</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to='/Nosotros' >Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to='/Contacto' >Contacto</Link>
            </li>
          </ul>
        </div>
        <CartWidget></CartWidget>
      </div>
    </nav>
  );
}


export default BasicExample;

