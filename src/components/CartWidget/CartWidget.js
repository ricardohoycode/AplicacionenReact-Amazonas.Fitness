<<<<<<< HEAD

import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    return (
        <>
            <Link to="/cart">
                <i className="fas fa-shopping-cart"><img src='/icon-carrito.svg'></img></i>
            </Link>
            <span>4</span>
        </>
    )

}

=======

import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    return (
        <>
            <Link to="/cart">
                <i className="fas fa-shopping-cart"><img src='/icon-carrito.svg'></img></i>
            </Link>
            <span>4</span>
        </>
    )

}

>>>>>>> 7643882100bc5ec78750b8ad4c28e926ff1b6964
export default CartWidget;