import './App.css';
import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import NavBar from './components/Navbar/Navbar';
import ListProducts from './components/ListProducts/ListProducts';
import Button from '@mui/material/Button';
import Container  from '@mui/material/Container';
import ModalCustom from './components/Modal/Modal';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//Pages
import HomePage from './pages/HomePages'
import ProductosPages from './pages/ProductosPages'
import ZapatillasPages from './pages/ZapatillasPages'
import AccesoriosPages from './pages/AccesoriosPages'
import NotFoundPages from './pages/NotFoundPages'
import DetailPages from './pages/DetailPages';

//services
//import {getUser} from './services/users.service'


function App() {

  return (

    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/zapatillas" element={<ZapatillasPages />}/>
        <Route path="/productos" element={<ProductosPages />}/>
        <Route path="/accesorios" element={<AccesoriosPages />}/>
        <Route path="/:category/" element={<HomePage />}/>
        <Route path="/:category/:id" element={<DetailPages />}/>
        <Route path="*" element={<NotFoundPages />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

