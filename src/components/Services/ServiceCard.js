import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServiceCard({ title, price, description, link, image }) {
  return (
    <Card className="shadow-sm h-100 border-0">
      <div style={{ overflow: "hidden", borderTopLeftRadius: "0.25rem", borderTopRightRadius: "0.25rem" }}>
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{ height: "220px", width: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
          className="service-img"
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ color: "#007e6a", fontWeight: "600" }}>{title}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">{price}</Card.Subtitle>
        <Card.Text style={{ flexGrow: 1, color: "#444" }}>{description}</Card.Text>
        <Link to={link} className="mt-auto">
          <Button variant="success" style={{ width: "100%" }}>View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
