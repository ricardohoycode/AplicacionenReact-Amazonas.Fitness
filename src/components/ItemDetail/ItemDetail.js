import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from 'bootstrap';
import { Image } from 'semantic-ui-react';

const ItemDetail = ({ props }) => {

    const { title, description, Image, stock, price } = props;

  return (
    <div className='itemDetail'>
        <div className='itemDetail__images'>
            <img src={imagen} />
        </div>

        <div className='itemDetail__text'>
            <div className='itemDetail__info'>
                <h2>{}</h2>
                <p>{}</p>
                <p>$ {}</p>
                <p>cuetas sin interes de $ {(price/12).toFired(2) } </p>
                { stock>3 ? <p className='stock'>stock disponible</p> : <p className='stockOut'>Sin stock</p> }
                <ItemCount stock={stock} />
            </div>

            <div className='itemDetail__buttons'>
                <Button className= 'itemDetail__buttons-btn'>Comprar</Button>
                <Button className= 'itemDetail__buttons-btn'>Agregar al Carrito</Button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail