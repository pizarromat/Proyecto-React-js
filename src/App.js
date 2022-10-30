import './App.css';
import { BrowserRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from '../src/components/NavBar/Navbar';
import ItemListConteiner from './components/ItemListContainer';
import Index from './components/paginas/Index';
/* import Compra from './components/paginas/Compra'; */
import Nosotros from './components/paginas/Nosotros';
import Contacto from './components/paginas/Contacto';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



const CartContext = React.createContext('');
console.log('CartContext: ', CartContext);

function App() {
    return(
        <div className="App">
            <Router>
                <Navbar/>
                
                <CartContext.Provider value='Pablo' >

                
                <Routes>
                    <Route exact path='/' element={ <Index />} />
                    <Route path='/categoria/:categoriaId' element={<ItemListConteiner />} />
                    <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
                    <Route exact path='/Nosotros' element={ <Nosotros />} />
                    <Route exact path='/Contacto' element={ <Contacto />} />
                    <Route exact path='/cart' element={<Cart />} />
                </Routes>

                </CartContext.Provider>
            </Router>
        
        </div>
    );
}

export default App;
