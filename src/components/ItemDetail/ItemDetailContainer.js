import React, { useEffect, useState } from 'react'
import { mockComponent } from 'react-dom/test-utils'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const[ props, setProps ] =useState({});

    const getProducts = () =>{
        return new Promise ( (resolve, reject) => {
            return resolve(mockItem);
        })
    }

    useEffect( () =>{
        getProducts().then( (product) =>{
            setProps(product)
        })
    },[])

  return (
    <div className='itemDetailContainer'>
        <ItemDetail props={ props } />
    </div>
  )
}

export default ItemDetailContainer