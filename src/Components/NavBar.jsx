import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
export default function NavBar() {
  return (
    <div className="navbarContainer">
      <Navbar expand="sm" bg="" className="rounded-4" variant="" id="navBar">
        <Container fluid>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="ml-auto order-sm-2"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="Gestion" id="navBarLink">
                Gestion
              </Nav.Link>
              <Nav.Link href="Galeria" id="navBarLink">
                Galeria
              </Nav.Link>
              <Nav.Link href="Servicios" id="navBarLink">
                Servicios
              </Nav.Link>
              <Nav.Link href="Sobre mi" id="navBarLink">
                Sobre mi
              </Nav.Link>
              <Nav.Link href="Contacto" id="navBarLink">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
