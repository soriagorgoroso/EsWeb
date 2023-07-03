import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css"; // Importa el archivo CSS para estilos personalizados

function NavBar() {
  return (
    <div className="navbarContainer">
      <Navbar
        expand="sm"
        bg="light"
        className="rounded-4"
        variant="light"
        id="navBar"
      >
        <Container fluid>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="ml-auto order-sm-2"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#link" id="navBarLink">
                Gestion
              </Nav.Link>
              <Nav.Link href="#link" id="navBarLink">
                Galeria
              </Nav.Link>
              <Nav.Link href="#link" id="navBarLink">
                Servicios
              </Nav.Link>
              <Nav.Link href="#link" id="navBarLink">
                Sobre mi
              </Nav.Link>
              <Nav.Link href="#link" id="navBarLink">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
