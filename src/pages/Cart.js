import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartContext from '../context/CartContext';
import { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ModalCustom from '../components/Modal/Modal';
import db from '../firebase'
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',  
        email: '',
    })
    const [order, setOrder] = useState(
        {
            buyer : formData,
            items: cartProducts.map( (cartProduct)=> {
                return {
                    id: cartProduct.id,
                    title: cartProduct.title,
                    price: cartProduct.price
                }
            }),
            total: totalPrice
        }
    )
    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {...order,
            buyer: formData
        }
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccessOrder(orderDoc.id)
        
    }

    const handleChange = (e) => {
        const {value, name} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

        const navigate = useNavigate()
        const { cart, removeItem } = useContext(CartContext);
        const calculateTotalItem = (item) => {
            return item.price * item.quantity;
        }
        const goBack = () => {
            navigate('/');
        }

    return (

        <Container>
            <h1>Carrito de compra</h1>
            {Cart.length ? (
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Producto</TableCell>
                                <TableCell align="center">Precio</TableCell>
                                <TableCell align="center">Cantidad</TableCell>
                                <TableCell align="center">Total</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Cart.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell component="th" scope="row">{item.title}</TableCell>
                                    <TableCell align="center">${item.price}</TableCell>
                                    <TableCell align="center">{item.quantity}</TableCell>
                                    <TableCell align="center">${calculateTotalItem(item)}</TableCell>
                                    <TableCell align="center">
                                        <Button>
                                            <DeleteIcon onClick={() => removeItem(item)}>Eliminar</DeleteIcon>
                                        </Button>
                                    </TableCell>
                                </TableRow>))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) :
                (
                    <h2>No hay productos en el carrito</h2>
                )
            }
        </Container>
    )
}

export default Cart;