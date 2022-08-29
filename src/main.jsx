import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Cliente from './Cliente';
import Articulos from './Articulos';
import Compra from './Compra';
import LogIn from './LogIn';
import NuevoCliente from './NuevoCliente';
import EliminaCliente from './ClienteEliminado';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element ={<App />}>
        <Route path="/articulos" element={<Articulos />} />
        <Route exact path = "/cliente" element={<Cliente />} />
        <Route path = "cliente/login" element={<LogIn />} />
        <Route path = "cliente/nuevo" element ={<NuevoCliente />} />
        <Route path = "cliente/eliminado" element = {<EliminaCliente />} />
        <Route path = "/carrito" element={<Compra />} />
      </Route>
      </Routes>  
    </BrowserRouter>
  </React.StrictMode>
)
