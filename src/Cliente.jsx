import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import { Navigate } from 'react-router-dom';

import './Cliente.css';


function Cliente() {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [factura, setFactura] = useState([]);

  const [goTo, setGoTo] = useState (false);

const userid= window.localStorage.getItem("userid")

  function loadData() {
    fetch("http://localhost:5000/api/clientes/" + userid)
      .then(res => res.json())
      .then(obj => {
        if (obj.ok === true) {
          setData(obj.data)
          fetch("http://localhost:5000/api/facturas/" + userid)
            .then(res => res.json())
            .then(obj => {
              if (obj.ok === true) {
                setFactura(obj.data)
              } else {
                setError(obj.error)
              }
            })
        } else {
          setError(obj.error)
        }
      })
      .catch(error => setError(error))

  }

  useEffect(() => {
    loadData();
  }, [])

function eliminarUsuario(){

  const opciones = {
    "method" : "DELETE"
  }
  const url = "http://localhost:5000/api/clientes/" +userid;

  fetch(url, opciones)
  .then(data => data.json())
  .then(data => setGoTo(true))
  .catch(data => console.error(error))
}


  const facturas = factura.map((e, i) =>

    <tr key={i}>
      <td>{e.numero}</td>
      <td>{e.direccion}</td>
      <td>{e.fecha}</td>

    </tr>

  )

  if(goTo){
    return <Navigate to="/cliente/eliminado" />;
  }


  return (
    <>
      <h1 className='tituloCliente'>Bienvenido </h1>

      <div>


        <span className='cliente'>Nombre: {data.nombre}</span>
        <br />
        <span className='cliente'>Dirección: {data.direccion}</span>
        <br />
        <span className='cliente'>Población: {data.poblacion}</span>
        <br />
        <span className='cliente'>Código Postal: {data.cpostal}</span>

      </div>
      <br />
      <Button variant="secondary" onClick={eliminarUsuario} >Eliminar cuenta</Button>
      <br />
      <br />
      <div>
        <h2 className='tituloCliente'>Historial de Compras</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Dirección</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {facturas}
          </tbody>

        </Table>
      </div>


    </>
  )
}

export default Cliente