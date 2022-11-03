import './App.css';
import React from 'react';

import { BrowserRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from '../src/components/NavBar/Navbar';
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';
import Index from './components/paginas/Index';
import Nosotros from './components/paginas/Nosotros';
import Contacto from './components/paginas/Contacto';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from '../src/components/CartContext/CartContext';



export const CartContext = React.createContext([]);
console.log('CartContext: ', CartContext);

function App() {
    return(
        <div className="App">
            <Router>
                <CartProvider>
                    <Navbar/>
                    <Routes>
                        <Route exact path='/' element={ <Index />} />
                        <Route path='/categoria/:categoriaId' element={<ItemListConteiner />} />
                        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
                        <Route exact path='/Nosotros' element={ <Nosotros />} />
                        <Route exact path='/Contacto' element={ <Contacto />} />
                        <Route exact path='/cart' element={<Cart />} />
                    </Routes>
                </CartProvider>
            </Router>
        
        </div>
    );
}

export default App;
