import React from 'react'
import {a} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="App">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h1><span>Amazon</span> Fitness</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">Caracteristicas</a>
                    <a className="nav-link" href="#">Sobre</a>
                    <a className="nav-link" href="#">Galería</a>
                    <a className="nav-link" href="#">Contactos</a>
                    <a className="nav-link" href="#">Footer</a>
                </div>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar;