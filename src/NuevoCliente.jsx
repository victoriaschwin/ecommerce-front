import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


import {Navigate} from "react-router-dom";

function NuevoCliente() {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  const [poblacion, setPoblacion] = useState('');
  const [cpostal, setCpostal] = useState('');

  const [goTo, setGoTo] = useState(false);
  const [show, setShow] = useState(false);

  function crear(e) {
    e.preventDefault();
    const nuevoCliente = {
      nombre: nombre,
      password: password,
      direccion: direccion,
      email: email,
      poblacion: poblacion,
      cpostal: cpostal,
    }

    const opciones = {
      "method": "POST",
      "body": JSON.stringify(nuevoCliente),
      headers: { "Content-Type": "application/json" }
    }
    const url = "http://localhost:5000/api/clientes";

    fetch(url, opciones)
      .then(data => data.json())
      .catch(data => console.error(data))

  }
if (goTo){
    return <>

       <Navigate to={goTo}/> </>;
  }


  
  return (
    <div>

      <Form onSubmit={crear}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control value={nombre} type="text" onInput={(e) => setNombre(e.target.value)} />
        
        </Form.Group> <Form.Group className="mb-3" controlId="formemail">
          <Form.Label>Email</Form.Label>
          <Form.Control value={email} type="email" onInput={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control value={password} type="password" onInput={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="direccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control value={direccion} type="text" onInput={(e) => setDireccion(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="poblacion">
          <Form.Label>Población</Form.Label>
          <Form.Control value={poblacion} type="text" onInput={(e) => setPoblacion(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpostal">
          <Form.Label> Código Postal</Form.Label>
          <Form.Control  value={cpostal} type="text" onInput={(e) => setCpostal(e.target.value)} />
        </Form.Group>
        <Button variant="secondary" type="submit" onClick={()=> setShow(true)}>
          Enviar
        </Button>
      </Form>
<ToastContainer position={'top-center'}>
      <Toast show={show} onClose={()=>setGoTo("/articulos")}>
      <Toast.Header>
        <strong className="me-auto">E-commerce</strong>
      </Toast.Header>
      <Toast.Body>Usuario creado</Toast.Body>
    </Toast>
    </ToastContainer>
    </div>
  )
}

export default NuevoCliente