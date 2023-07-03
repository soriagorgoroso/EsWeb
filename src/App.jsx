import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import Service from "./Components/Service";
import Extra from "./Components/Extra";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="background-strip"></div>;
      <h1 className="title">Estadísticas</h1>
      <Container>
        <Row className="flex-sm-row flex-column-reverse mt-3 mb-3">
          <Col>
            <Card border="dark" style={{}}>
              <Card.Body>
                <p>Recibidos</p>
                <Card.Title>120.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="dark" style={{}}>
              <Card.Body>
                <p>Pendientes</p>
                <Card.Title>30.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="dark" style={{}}>
              <Card.Body>
                <p>Totales</p>
                <Card.Title>150.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3 secondCardContainer">
            <Cards className="" title="Ingresos Liquidos" subTitle="$120.000" />
            <Cards className="" title="Ingresos Liquidos" subTitle="$120.000" />
            <Cards className="" title="Ingresos Liquidos" subTitle="$120.000" />
          </Col>
          <Col className="mt-3">
            <Service />
            <Extra />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
