import './Navbar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { loadCategories } from '../../services/products_service';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import ThemeSwitch from './ThemeSwitch';


const NavBar = () => {
    const{ ligthTheme, handleTheme } = useContext(ThemeContext)
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
                    <a href="/dec.html"><i className="fa-regular fa-user"></i></a>
                    <ThemeSwitch />
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

export default NavBar;