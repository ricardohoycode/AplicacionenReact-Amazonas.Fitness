
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

export default CartWidget;