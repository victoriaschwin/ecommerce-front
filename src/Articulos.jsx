import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

import './Articulos.css';


function Articulos() {


  const [data, setData] = useState([]);
  const [error, setError] = useState("")

  function agregar() {
    console.log('boton clickea')
  }

  function loadData() {
    fetch("http://localhost:5000/api/articulos")
      .then(res => res.json())
      .then(res => {
        if (res.ok === true) {
          setData(res.data);
        } else {
          setError(res.error)
        }
      })
      .catch(error => setError(error))
  }

  useEffect(() => {

    loadData();

  }, [])

  if (data.length === 0) {
    return <span>No hay articulos</span>
  }

  const articulos = data.map((e, i) =>

    <Card style={{ width: '18rem' }} key={i}>
      <Card.Img variant="top" src={"/articulo" + e.id + ".jpg"} />
      <Card.Body>
        <Card.Title>{e.nombre} {e.precio}€</Card.Title>
        <Card.Text>
          {e.descripcion}
        </Card.Text>
        <Button variant="secondary" onClick={agregar}>Añadir</Button>
      </Card.Body>
    </Card>)

  return (
    <>
      <h1 className='tituloArt'>Nombre del E-commerce</h1>
      <br />
      <Container className='articulo'>
      {articulos}
      </Container>
      

    </>
  )
}

export default Articulos