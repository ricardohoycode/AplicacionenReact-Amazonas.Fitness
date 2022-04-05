import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'
import './ListProducts.css'

const ListProducts = ({children}) => {
    const mockProductos = [{
        title : 'Bibidis',
        id: 1,
        talle: 'XL',
        price: 1500,
        image: 'bibidi.jpg',
        stock: 3
    },
   {
        title : 'Licras',
        id: 2,
        talle: 'L',
        price: 3500,
        image: 'licra.jpg',
        stock: 20
    },
    {
        title : 'Polos',
        id: 3,
        talle: 'L',
        price: 1200,
        image: 'polo.jpg',
        stock: 6
    },
    {
        title : 'Shorts',
        id: 4,
        talle: 'L',
        price: 1200,
        image: 'shorts.jpg',
        stock: 6
    },
    {
        title : 'Rodilleras',
        id: 5,
        talle: 'L',
        price: 1200,
        image: 'rodillera.jpg',
        stock: 6
    },
    {
        title : 'Zapatilla',
        id: 6,
        talle: 'L',
        price: 500,
        image: 'zapatilla.jpg',
        stock: 6
    },
    {
        title : 'Muñequera',
        id: 7,
        talle: 'M',
        price: 100,
        image: 'muñequera.jpg',
        stock: 10
    }
]

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
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