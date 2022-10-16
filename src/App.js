import './App.css';
import { BrowserRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import ItemListConteiner from './components/ItemListContainer';
import Index from './components/paginas/Index';
import Carta from './components/paginas/Carta';
import Compra from './components/paginas/Compra';
import Nosotros from './components/paginas/Nosotros';
import Contacto from './components/paginas/Contacto';


function App() {
    return(
        <div className="App">
            <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={ <Index />} />
                <Route exact path='/Carta' element={ <Carta />} />
                <Route exact path='/Compra' element={ <Compra />} />
                <Route exact path='/Nosotros' element={ <Nosotros />} />
                <Route exact path='/Contacto' element={ <Contacto />} />
            </Routes>
            </Router>
            

            
            <ItemListConteiner gretting={'aca iria el footer'}></ItemListConteiner>
        </div>
    );
}

export default App;
