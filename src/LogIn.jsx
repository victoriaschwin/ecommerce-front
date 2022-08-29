import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {Link, Navigate} from 'react-router-dom';


function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [goTo, setGoTo] = useState(false)

  function enviar(e) {

    e.preventDefault();
    const usuario = {
      email: email,
      password: password

    }
    fetch("http://localhost:5000/api/clientes/login", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(usuario)
    })
    .then(res => res.json())
      .then(res => loadData(res))
      .then( res => setGoTo(true))
      .catch(err => console.log("error: ", err))
  }

  function loadData(res){
    console.log(res);
    if(res.ok === true){
      window.localStorage.setItem("userid", res.data.id)
      console.log("usuario logeado")
    }
  }

  if(goTo){
    return <Navigate to={'/articulos'} />;
  }


return (
  <div>

    <Form onSubmit={enviar}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="secondary" type="submit" >
        Iniciar Sesión
      </Button>
      <Link to='/cliente/nuevo' className="btn btn-secondary" >
        Registrarse
      </Link>
    </Form>
  </div>
)
}

export default LogIn