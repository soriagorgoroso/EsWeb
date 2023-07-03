import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import BackgroundStrip from "./Components/BackgroundStrip";

function App() {
  return (
    <>
      <NavBar />
      <BackgroundStrip />
      <h1 className="title">Estadisitcas</h1>
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
          <Col>
            <Cards className="" title="Ingresos Liquidos" subTitle="$120.000" />
            <Cards className="" title="Ingresos Liquidos" subTitle="$120.000" />
            <Cards className="" title="Ingresos Liquidos" subTitle="$120.000" />
          </Col>
          <Col>
            <Card className="m-3" border="secondary" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
