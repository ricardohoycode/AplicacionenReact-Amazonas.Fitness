import './Card.css'

export default function Card(props){

    return (
        <div className='cards-item'>
            {console.log("console dentro de render")}
            <h2>{props.title}</h2>
            <p>Precio : S/. {props.price}</p>
            <p>Talla : {props.talle}</p>
            <button> Comprar </button>
        </div>
      )
    }

