import React from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";
function Cards({ title, subTitle, styles }) {
  return (
    <div
      id="cardContainer"
      style={{
        ...styles,
      }}
      className="mt-3"
    >
      <Card
        bg={"light"}
        style={{
          width: "18rem",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1rem" }}>{title}</Card.Title>
          <Card.Text style={{ fontSize: "2rem" }}>{subTitle}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
