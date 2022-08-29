import { useState } from 'react';
import './App.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { ImHome } from "react-icons/im";


import {Link, Outlet} from 'react-router-dom';

function App() {

  return (
    <>
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>E-commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/articulos"><ImHome /></Link>
            <Link to="/cliente"><FaUserCircle /></Link>
            <Link to="/carrito"><FaShoppingCart /></Link>
          </Nav>
        </Container>
      </Navbar>


     <Container>
      <Outlet />
     </Container>
    </>
  )
}

export default App
