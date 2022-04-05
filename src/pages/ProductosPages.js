import React from 'react'
import ListProducts from '../components/ListProducts/ListProducts';
import Container from '@mui/material/Container';

const ProductosPages = () => {
    return(
        <Container className='container-general'>
            <h1>ESTE ES PRODUCTOS</h1>
            <ListProducts />
        </Container>
    )
}

export default ProductosPages