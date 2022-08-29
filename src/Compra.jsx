import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';





function Compra() {

  const userid= window.localStorage.getItem('userid')
  const factura = 1
  const [data, setData] = useState([]);
  const [error, setError] = useState("");



  function suma() {
    console.log('hola');
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/facturas/'+userid+'/2')
      .then(res => res.json())
      .then(res => {
        if (res.ok === true) {
          setData(res.data)
        } else {
          console.error(res.error);
        }
      })
      .catch(err => {
        setError(true);
        console.log(err)
      });
  }, []);

  function eliminarArt(){

  }

  let rows =[];

  if(data){
    rows = data.map((e,i) => (
      e.Articulos.map((art, id) =>(
      <tr key={id}>
        <td>{art.nombre} </td>
        <td>hola<Button variant="outline-dark" size={'sm'} onClick={eliminarArt}>x</Button></td>
        <td>{art.precio}</td>
        <td>numero</td>
      </tr>))
      
    ))
  }


  return (
    <>
      <h1>Mi Cesta de la Compra</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Articulo</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
         {rows}
        </tbody>
      </Table>

      <h2>Total { }</h2>

    </>
  )
}

export default Compra