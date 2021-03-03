import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    </Router>
  );
}

export default App;
