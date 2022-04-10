import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    return (
        <>
            <Link to="/cart">
                <i className="fas fa-shopping-cart"><img src='/icon-carrito.svg'></img></i>
                <espan>4</espan>
            </Link>
        </>
    )

}

export default CartWidget;