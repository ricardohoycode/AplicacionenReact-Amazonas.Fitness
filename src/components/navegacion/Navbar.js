import React from 'react'
import './Navbar.css'
import CartWidget from './CartWidget/CartWidget';
import Count from '../ProductosLista/Count';



const Navbar = () => {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h1><span>Amazon</span> Fitness</h1></a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">Caracteristicas</a>
                    <a className="nav-link" href="#">Sobre</a>
                    <a className="nav-link" href="#">Galería</a>
                    <a className="nav-link" href="#">Contactos</a>
                    <a className="nav-link" href="#">Footer</a>
                </div>
                <CartWidget/>
                </div>
            </div>
        </nav>
        <Count/>
    </div>
  )
}

export default Navbar;