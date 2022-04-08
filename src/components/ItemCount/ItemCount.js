import React, { useState, useEffect } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const ItemCount = ({ count, handleAdd, handleRemove, handleOpen }) => {
    const [enableCartButton, setEnableCartButton] = useState(true);

    useEffect(() => {
        count === 0 ? setEnableCartButton(false) : setEnableCartButton(true);
    }, [count])

    return (
        <>
            <CardActions>
                <Button size="small" sx={{ color: "#F43D53" }} onClick={handleRemove}>
                    <ArrowDropDownIcon />
                </Button>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField focused value={count} />

                </Box>

                <Button size="small" sx={{ color: "#F43D53" }} onClick={handleAdd}>
                    <ArrowDropUpIcon />
                </Button>

            </CardActions>
            <CardActions>
                <Button disabled={!enableCartButton} size="small" sx={{ color: "#F43D53" }} onClick={handleOpen} >Agregar al carrito</Button>
            </CardActions>
        </>
    );
}

export default ItemCount;
