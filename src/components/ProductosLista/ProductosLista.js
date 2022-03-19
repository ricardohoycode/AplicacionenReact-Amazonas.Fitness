import { Children } from "react"
import Card from "../Card/Card"


const ProductosLista = () => {

    return(
        <div className="conatainer-cards">
             <h3>Productos Deportivos</h3>
            <Card title='Polos' talle='S' price={200} />
        </div>

    )
}

export default ProductosLista;