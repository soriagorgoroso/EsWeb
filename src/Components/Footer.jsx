import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" className="shadow-lg">
      <Container className="justify-content-center">
        <Navbar.Brand href="#home">Esteban Soria</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
