import React, {useState, useEffect} from 'react';

function ClienteEditar() {


  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [poblacion, setPoblacion] = useState("");
  const [cpostal, setCpostal] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  function loadData() {
    fetch("http://localhost:5000/api/clientes/"+window.localStorage.getItem("userid"))
      .then(res => res.json())
      .then(obj => {
        if (obj.ok === true) {
          setData(obj.data)
        } else {
          setError(obj.error)
        }
      })
      .catch(error => setError(error))
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>

<h2>Datos Personales</h2>
      
      <input type="text" onChange={(e) => setNombre(e.target.value)}/>Nombre Cliente
      <br />
      <input type="email" onChange={(e) => setEmail(e.target.value)} />email
      <br />
      <input type="text" onChange={(e) => setDireccion(e.target.value)}/>direccion
      <br />
      <input type="text" onChange={(e) => setPoblacion(e.target.value)} />poblacion
      <br />
      <input type="text" onChange={(e) => setCpostal(e.target.value)} />cpostal
      <br />
      <button>Editar</button>

    </>
  )
}

export default ClienteEditar