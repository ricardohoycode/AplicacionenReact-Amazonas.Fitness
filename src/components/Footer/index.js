import './Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer--company">
                <small>Amazona Fitness &copy;</small>
            </div>
            <div className="footer--blank"><p>Created <i className='fas fa-heartbeat'></i> by<span> Ricardo Hoyos</span> | ¡All rights reserved! </p></div>
            <div className="footer--list">
                <ul className="list">
                    <li className="list--item"><Link to={"/contactanos"}>Contactanos</Link></li>
                </ul>
            </div>
            <div className="footer--social">
                <a href="1.html"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="1.html"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </footer >
    )
}

export default Footer;