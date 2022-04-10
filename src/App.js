import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import TopTen from './components/pages/TopTen';
import Colecciones from './components/pages/Colecciones';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import FunctionCounter from './components/FunctionCounter/FunctionCounter';


function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
      
      </Router>
      
      <ItemListContainer greeting = "My Book, always here!!"/>
      
    </div>
  );
}

export default App;
