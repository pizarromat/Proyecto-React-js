
import './App.css';
import Function from './components/Function';
import Class from './components/Class';
import List from './components/List';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Menu from './components/paginas/Menu';




function App() {
  
    const arr = ["pancho", "ruben"]
    return(
        <div className="App">
            <Router>
                <Navbar/> 
            </Router>
            <Class name={arr[0]}/>
            <Function name={arr[1]}> 
            </Function>
            <List/>
        </div>
    );
}

export default App;
