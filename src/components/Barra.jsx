import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";


function Barra() {
  return (
    <div className='navbar'>

      <Navbar fixed="top" variant="light" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/AboutMe" >About Me </Nav.Link>
              <Nav.Link as={NavLink} to="/CV" >CV </Nav.Link>
              <Nav.Link as={NavLink} to="/Skills" > Skills </Nav.Link>
              <Nav.Link as={NavLink} to="/Projects" > Projects </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Barra