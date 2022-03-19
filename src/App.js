import './App.css';
import {BrowserRouter as Router, Swicht, Route} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import ProductosLista from './components/ProductosLista/ProductosLista';
import { Children } from 'react';
import CartWidget from './components/navegacion/CartWidget/CartWidget'

function App() {

  return (

    <div className='App'>
      <Navbar/>
      <ProductosLista/>
      <ProductosLista/>
      

    </div>
  );
}

export default App;
