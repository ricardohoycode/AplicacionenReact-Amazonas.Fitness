import React,{ useState, useEffect } from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useNavigate } from 'react-router-dom'


export default function Card({ data }) {
    const navigate = useNavigate();
    const { title, price, talle, stock, image, id } = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(1)
    useEffect( () => {
        console.log("useEffect")
        const onScrollWindow = () => {
            if(window.scrollY > 100 ){
                console.log("Scroll mayor a 100")
            }
        }
        window.addEventListener("scroll", onScrollWindow)
        
        return () => {
            window.removeEventListener("scroll", onScrollWindow)
        }
        
    }, [])

    const addStock = () => {
        setCount(count + 1)
    }
    const removeStock = () => {
        setCountTest(countTest - 1)
    }
    const changePage = () => {
        navigate(`/productos/${id}`)
    }

    return(
        <div className="card-item">
           <img src={`./${image}`} alt={image} />

            <div className='container-card-data'>
                <h2 className='Title-card'>{title}</h2>
                <p>Precio : S/. {price}</p>
                <p>Talla : {talle}</p>
                <button onClick={(e) => action(e, "")}>Comprar</button>
            </div>
        </div>
    )
}