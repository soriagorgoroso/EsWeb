import React, { useState, useEffect } from "react";
import {
  Carousel,
  Col,
  Container,
  Nav,
  Row,
  Image,
  Navbar,
  NavDropdown,
  Card,
  Button,
} from "react-bootstrap";
import Footer from "../Components/Footer";

export default function Galeria() {
  const [index, setIndex] = useState(0);
  const [photos, setPhotos] = useState([]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  async function getPhotos() {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/?client_id=QvyiB4y8nQoD4WtqW93Ldiju-esD8V2aaiaPyBUpq7s"
      );
      const data = await response.json();
      setPhotos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      {/* Nvbar */}
      <Navbar expand="md" className="bg-body-tertiary">
        <Container className="d-flex justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav.Link href="Gestion" className="m-3">
              Gestion
            </Nav.Link>
            <Nav.Link href="Galeria" className="m-3">
              Galeria
            </Nav.Link>
            <Nav.Link href="Servicios" className="m-3">
              Servicios
            </Nav.Link>
            <Nav.Link href="Sobre mi" className="m-3">
              Sobre mi
            </Nav.Link>
            <Nav.Link href="Contacto" className="m-3">
              Contacto
            </Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className="m-3"
            >
              <NavDropdown.Item href="#action/3.9">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Carrousel */}
      {/* Carrousel */}
      <Carousel activeIndex={index} controls={false} indicators={false}>
        {photos.map((photo) => {
          return (
            <Carousel.Item key={photo.id} className="custom-carousel-item">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "500px" }}
              >
                <Image
                  className="d-block img-fluid"
                  src={photo.urls.full}
                  alt={photo.alt_description}
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      {/* Prueba imagenes */}
      <Container className="justify-content-center align-items-center">
        <div style={{}}>
          <Row className="justify-content-center align-items-top m-4">
            <Col xs={8} md={8} lg={4}>
              <Card style={{ width: "18rem", margin: "20px" }}>
                <Card.Img variant="top" src={photos[1]?.urls.small} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {(photos[1]?.user.first_name, photos[1]?.user.last_name)}
                  </Card.Title>
                  <Card.Text>{photos[1]?.user.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={8} md={8} lg={4}>
              <Card style={{ width: "18rem", margin: "20px" }}>
                <Card.Img variant="top" src={photos[5]?.urls.small} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {(photos[5]?.user.first_name, photos[5]?.user.last_name)}
                  </Card.Title>
                  <Card.Text>{photos[5]?.user.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={8} md={8} lg={4}>
              <Card style={{ width: "18rem", margin: "20px" }}>
                <Card.Img variant="top" src={photos[9]?.urls.small} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {(photos[9]?.user.first_name, photos[9]?.user.last_name)}
                  </Card.Title>
                  <Card.Text>{photos[9]?.user.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      {/* Footer */}
      <Footer />
    </>
  );
}
