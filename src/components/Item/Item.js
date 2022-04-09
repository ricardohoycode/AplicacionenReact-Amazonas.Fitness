<<<<<<< HEAD
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (

        <Card sx={{ maxWidth: 345 }}>
            <Link to={`/item/${product.id}`}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.pictureUrl}
                    alt={product.title}
                />
            </Link>
            <CardContent>
                <Typography sx={{ color: '#353535' }} gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography style={{ fontWeight: 600 }}>
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ color: "#F43D53" }}> <ShoppingCartIcon></ShoppingCartIcon> Agregar al carrito</Button>
            </CardActions>
        </Card>
    );
}

=======
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (

        <Card sx={{ maxWidth: 345 }}>
            <Link to={`/item/${product.id}`}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.pictureUrl}
                    alt={product.title}
                />
            </Link>
            <CardContent>
                <Typography sx={{ color: '#353535' }} gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography style={{ fontWeight: 600 }}>
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ color: "#F43D53" }}> <ShoppingCartIcon></ShoppingCartIcon> Agregar al carrito</Button>
            </CardActions>
        </Card>
    );
}

>>>>>>> 7643882100bc5ec78750b8ad4c28e926ff1b6964
export default Item;