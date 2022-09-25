
import './App.css';
import Navbar from './components/Navbar';
import ItemListConteiner from './components/ItemListContainer';


function App() {
    return(
        <div className="App">
            <Navbar/>
            <ItemListConteiner gretting={'Pagina de inicio'}></ItemListConteiner>
        </div>
    );
}

export default App;
