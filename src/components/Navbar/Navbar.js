import React from 'react';
import Button from '@mui/material/Button';
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    //console.log(props) <CartWidget />
    return(
        //JSX
        <header className='main-header'>

            <div className='container-logo'>Amazona Fitness</div>
            {/*<img src="icono-amazona.jpg" className="img-header"/>*/}
            <ul className='navbar'>
                <li><Button className="custom-btn" variant="contained">Home</Button></li>
                <li><Button className="custom-btn" variant="contained">Productos</Button></li>
                <li><Button className="custom-btn" variant="contained">Accesorios</Button></li>
                <li><Button className="custom-btn" variant="contained">Zapatillas</Button></li>
                <li><Button className="custom-btn" variant="contained">Contacto</Button></li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar