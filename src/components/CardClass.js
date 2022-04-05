import React from 'react';
import './Card.css';

export default class CardClass extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            return(
            <div className="card-item">
            {/*<img src={`./${image}`} alt={image} />*/}

                <div className='container-card-data'>
                    <h2 className='Title-card'>{this.props.titulo}</h2>
                    <p>Precio : S/.100</p>
                    <p>Talla : S</p>
                    <button>Comprar</button>
                </div>
            </div>
        )
    }
}