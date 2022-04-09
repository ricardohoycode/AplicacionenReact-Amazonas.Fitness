<<<<<<< HEAD
import Container from "@mui/material/Container";
import { InputLabel, FormHelperText, Input, Button } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {

    const navigate = useNavigate();
    const [value, setValue] = useState({
        given: '',
        lastname: '',
        email: '',
    });

    const resetForm = (e) => {
        console.log('reset form');
        setValue({ given: '', lastname: '', email: '' });
    }


    const handleChange = (e) => {
        e.preventDefault();
        console.log('change');
        e.target.id === "given" ? setValue({ ...value, given: e.target.value }) : setValue({ ...value, lastname: e.target.value });

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        console.log(value);
    }

    return (
        <Container>
            <h1>Contáctanos</h1>
            <form onSubmit={handleSubmit}>
                <InputLabel htmlFor="given">Nombre</InputLabel>
                <Input onChange={handleChange} value={value.given} id="given" aria-describedby="my-helper-text" />
                <InputLabel htmlFor="lastname">Apellido</InputLabel>
                <Input onChange={handleChange} value={value.lastname} id="lastname" aria-describedby="my-helper-text" />
                <InputLabel htmlFor="email">Correo</InputLabel>
                <Input onChange={handleChange} value={value.email} id="email" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Nunca compartiremos tu correo</FormHelperText>
                <Button onClick={resetForm}>Limpiar</Button>
                <Button type="submit">Enviar</Button>
            </form>
        </Container>
    )
}

=======
import Container from "@mui/material/Container";
import { InputLabel, FormHelperText, Input, Button } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {

    const navigate = useNavigate();
    const [value, setValue] = useState({
        given: '',
        lastname: '',
        email: '',
    });

    const resetForm = (e) => {
        console.log('reset form');
        setValue({ given: '', lastname: '', email: '' });
    }


    const handleChange = (e) => {
        e.preventDefault();
        console.log('change');
        e.target.id === "given" ? setValue({ ...value, given: e.target.value }) : setValue({ ...value, lastname: e.target.value });

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        console.log(value);
    }

    return (
        <Container>
            <h1>Contáctanos</h1>
            <form onSubmit={handleSubmit}>
                <InputLabel htmlFor="given">Nombre</InputLabel>
                <Input onChange={handleChange} value={value.given} id="given" aria-describedby="my-helper-text" />
                <InputLabel htmlFor="lastname">Apellido</InputLabel>
                <Input onChange={handleChange} value={value.lastname} id="lastname" aria-describedby="my-helper-text" />
                <InputLabel htmlFor="email">Correo</InputLabel>
                <Input onChange={handleChange} value={value.email} id="email" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Nunca compartiremos tu correo</FormHelperText>
                <Button onClick={resetForm}>Limpiar</Button>
                <Button type="submit">Enviar</Button>
            </form>
        </Container>
    )
}

>>>>>>> 7643882100bc5ec78750b8ad4c28e926ff1b6964
export default Contact;