import React from 'react';
import {Link} from 'react-router-dom'

import CartWidget from '../CartWidget/CartWidget';
import Index from '../paginas/Index';
import Nosotros from '../paginas/Nosotros';
import Contacto from '../paginas/Contacto';

function BasicExample() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-propio">
      <div className="container-fluid">
        <Link to={'/'}>
          <img src="./PIZZERIA PROVOLETA.png" className="logo-pagina" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to='/' >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to='/categoria/pizzas' >Pizzas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to='/categoria/variedad' >Variedad</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to='/Nosotros' >Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to='/Contacto' >Contacto</Link>
            </li>
          </ul>
        </div>
        <Link clasName="nav__link" to='cart'>
          <CartWidget></CartWidget>
        </Link>
        
      </div>
    </nav>
  );
}


export default BasicExample;

