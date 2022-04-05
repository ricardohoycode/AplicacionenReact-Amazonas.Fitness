import React from 'react'
import ListProducts from '../components/ListProducts/ListProducts';
import Container from '@mui/material/Container';

const AccesoriosPages = () => {
    return(
        <Container className='container-general'> 
        <h1>ESTE ES ACCESORIO</h1>
            <ListProducts />
        </Container>
    )
}

export default AccesoriosPages