import React from 'react'
import ListProducts from '../components/ListProducts/ListProducts';
import Container from '@mui/material/Container';

const ZapatillasPages = () => {
    return(
        <Container className='container-general'>
            <h1>ESTE ES ZAPATILLAS</h1>
            <ListProducts />
        </Container>
    )
}

export default ZapatillasPages