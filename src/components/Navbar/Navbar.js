<<<<<<< HEAD
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { loadCategories } from '../../services/products_service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        (async () => {
            const categories = await loadCategories();
            setCategories(categories);
        })();
    }, []);

    return (
        <nav className='main-header'>
            <div className="logoWithIcons">
                <div className="empty">Amazona Fitness</div>
                <div className="logo">
                    <Link to={"/"}>
                        <img src="/icono-amazona.jpg" alt="logo" height="100px" />
                    </Link>
                </div>
                <div className="icons">
                    <a href="/dec.html"><i className="fa-regular fa-user"></i>Carrito</a>
                    <CartWidget />
                </div>
            </div>
            <ul className="menu">
                {categories.map(category =>
                    <li className="menuLi" key={category.id}>
                        <NavLink to={`/category/${category.id}`}
                            activeClassName="active"
                        >

                            {category.name}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}

=======
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { loadCategories } from '../../services/products_service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        (async () => {
            const categories = await loadCategories();
            setCategories(categories);
        })();
    }, []);

    return (
        <nav className='main-header'>
            <div className="logoWithIcons">
                <div className="empty">Amazona Fitness</div>
                <div className="logo">
                    <Link to={"/"}>
                        <img src="/icono-amazona.jpg" alt="logo" height="100px" />
                    </Link>
                </div>
                <div className="icons">
                    <a href="/dec.html"><i className="fa-regular fa-user"></i>Carrito</a>
                    <CartWidget />
                </div>
            </div>
            <ul className="menu">
                {categories.map(category =>
                    <li className="menuLi" key={category.id}>
                        <NavLink to={`/category/${category.id}`}
                            activeClassName="active"
                        >

                            {category.name}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}

>>>>>>> 7643882100bc5ec78750b8ad4c28e926ff1b6964
export default NavBar;