<<<<<<< HEAD
import ItemList from '../ItemList/ItemList.js'
import React, { useState, useEffect } from 'react';
import { loadProduct } from '../../services/products_service';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        (async () => {
            const products = await loadProduct(1000, category ? category : 1);
            setProducts(products);
        })()
    }, [category]);

    return (
        <ItemList products={products} />
    )
}

=======
import ItemList from '../ItemList/ItemList.js'
import React, { useState, useEffect } from 'react';
import { loadProduct } from '../../services/products_service';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        (async () => {
            const products = await loadProduct(1000, category ? category : 1);
            setProducts(products);
        })()
    }, [category]);

    return (
        <ItemList products={products} />
    )
}

>>>>>>> 7643882100bc5ec78750b8ad4c28e926ff1b6964
export default ItemListContainer;