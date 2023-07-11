import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
export default function Footer(theme) {
  return (
    <Navbar bg={theme} data-bs-theme={theme} className="shadow-lg fixed-bottom">
      <Container className="justify-content-center">
        <Navbar.Brand href="#home">Esteban Soria</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
