import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
      </Router>
    </div>
  );
}

export default App;
