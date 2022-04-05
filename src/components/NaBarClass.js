import React from 'react'
import Button from '@mui/material/Button';

export default class NavBarClass extends React.Component {
    render() {
        return (
            //JSX
            <header className='main-header'>
                <div className='container-logo'>Amazon Fitness
                </div>
                    <ul className='navbar'>
                        <li><Button className="custom-btn" variant="contained">Home</Button></li>
                        <li><Button className="custom-btn" variant="contained">Productos</Button></li>
                        <li><Button className="custom-btn" variant="contained">Nosotros</Button></li>
                        <li><Button className="custom-btn" variant="contained">Contacto</Button></li>
                    </ul>

            </header>
        )
    }
}