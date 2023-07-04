import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Budget.css";
import NavBar from "../Components/NavBar";
import Cards from "../Components/Cards";
import Extra from "../Components/Extra";
import Service from "../Components/Service";
import Footer from "../Components/Footer";

export default function Budget() {
  return (
    <>
      <NavBar />
      <h1 className="title">Estadísticas</h1>
      <Container>
        <Row className="">
          <Col className=" customColumn">
            <div id="backGroundStrip" className="background-strip"></div>
            <Card border="dark" className="shadow cashCard">
              <Card.Body>
                <p>Recibidos</p>
                <Card.Title>120.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="">
            <Card border="dark" className="shadow cashCard">
              <Card.Body>
                <p>Pendientes</p>
                <Card.Title>30.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="">
            <Card border="dark" className="shadow cashCard">
              <Card.Body>
                <p>Totales</p>
                <Card.Title>150.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className="mt-3 secondCardContainer"
          >
            <Cards styles={""} title="Ingresos Liquidos" subTitle="$120.000" />
            <Cards styles={""} title="Ingresos Liquidos" subTitle="$120.000" />
            <Cards styles={""} title="Ingresos Liquidos" subTitle="$120.000" />
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8} className="mt-3">
            <Service />
            <Extra />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
