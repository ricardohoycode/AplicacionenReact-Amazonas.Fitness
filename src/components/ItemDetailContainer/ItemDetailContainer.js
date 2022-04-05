import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import ProductMock from "../Mock/ProductMock";
import ProductsMock from "../Mock/ProductsMock";

const ItemDetailContainer = () => {
    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProducto)
        })
    }

    useEffect( () => {
        getProduct().then( (producto) => {
            setDataProduct(producto)
            //console.log("Llamada al mock:", producto)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])

    return (
        <>
            
            <ItemDetail data={dataProduct}/>
        </>
    )
}

export default ItemDetailContainer