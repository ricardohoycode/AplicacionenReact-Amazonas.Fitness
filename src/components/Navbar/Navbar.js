import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
    const pages = [
        {
            title:'Home',
            url: '/'
        },
        {
            title: 'Productos',
            url: '/productos'
        }, 
        {
            title: 'Accesorios',
            url: '/accesorios'
        },
        {
            title: 'Zapatillas',
            url: '/zapatillas'
        }]
    return(
        //JSX
        <header className='main-header'>

            <div className='container-logo'>Amazona Fitness</div>
            {/*<img src="icono-amazona.jpg" className="img-header"/>*/}
            <ul className='navbar'>
                <li><Button className="custom-btn" variant="contained"><Link to={'/'}>Home</Link></Button></li>
                <li><Button className="custom-btn" variant="contained"><Link to={'/productos'}>Productos</Link></Button></li>
                <li><Button className="custom-btn" variant="contained"><Link to={'/accesorios'}>Accesorios</Link></Button></li>
                <li><Button className="custom-btn" variant="contained"><Link to={'/zapatillas'}>Zapatillas</Link></Button></li>
                {/*pages.map((page) => {
                    return(
                        <li>
                            <Button className="custom-btn" variant="contained">
                                <Link to={page.url}>{page.title}</Link>
                            </Button>
                        </li>
                    )
                })*/}
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar