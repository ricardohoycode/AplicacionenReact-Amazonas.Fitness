import './App.css';
import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import NavBar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import ListProducts from './components/ListProducts/ListProducts';
import Container  from '@mui/material/Container';
import ModalCustom from './components/Modal/Modal';
//Pages
import HomePage from './pages/HomePages'
import ProductosPages from './pages/ProductosPages'
import ZapatillasPages from './pages/ZapatillasPages'
import AccesoriosPages from './pages/AccesoriosPages'

//services
//import {getUser} from './services/users.service'


function App() {
  const [open, setOpen] = useState(false);

  const handleClose = (value) => {
      setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true)
  }

  return (

    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<HomePage />}/>
        <Route path="/zapatillas" element={<ZapatillasPages />}/>
        <Route path="/productos" element={<ProductosPages />}/>
        <Route path="/accesorios" element={<AccesoriosPages />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

