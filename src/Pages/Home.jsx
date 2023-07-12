import React, { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  const [photos, setPhotos] = useState([]);

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
    <div>
      <div className="navBar">
        {/* NavBar */}
        <div>
          <h1>Nordstadtlicht & Harzverliebi</h1>
          <h6>FILM - FOTOGRAFIE - ILLUSTRATION - WEBDESIGN</h6>
        </div>
        <div className="navigation">
          <a href="pagina.html">Fotos</a>
          <a href="pagina.html">Filme</a>
          <a href="pagina.html">Webseiten</a>
          <a href="pagina.html">UBER UNS & KONTAKT</a>
        </div>
      </div>

      {/* Galería */}
      <Row>
        {photos.map((photo) => (
          <Col xs={6} md={4} key={photo.id} className="hover-effect">
            <div className="overlay">
              <p className="text">{photo.user.first_name}</p>
            </div>
            <div className="image-container">
              <Image
                src={photo.urls.small}
                alt={photo.alt_description}
                className="img-fluid"
              />
            </div>
          </Col>
        ))}
      </Row>
      {/* Footer */}
      {/* NavBar */}
    </div>
  );
}
