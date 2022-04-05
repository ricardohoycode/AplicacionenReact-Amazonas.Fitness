import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'
import './ListProducts.css'
import MockProductos from '../Mock/ProductMock'

const ListProducts = ({children}) => {
    

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(MockProductos)
        })
    }

    useEffect( () => {
        getProducts().then( (productos) => {
            setProducts(productos)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])


    return(
        <div className="container-cards">
            <h2>Productos en Oferta</h2>

            {products.map( ( product ) => {
                const {id} = product

                return(
                    <Card data={product} key={id}/>
                )
            })}
        </div>
    ) 
}


export default ListProducts;