import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// PrivateOffice Component
import img12 from "../../Assets/private-office-12.png";
import img16 from "../../Assets/private-office-16.png";
import img18 from "../../Assets/private-office-18.png";
import img25 from "../../Assets/private-office-25.png";

function PrivateOffice() {
  const offices = [
    {
      title: "Executive Room – 12 m²",
      price: "8,000 EGP / month",
      details: [
        "Suitable for 2–3 people",
        "Some rooms furnished with executive desk, drawers, and small meeting table",
        "Others unfurnished – you can furnish as needed",
      ],
      image: img12,
    },
    {
      title: "Medium Room – 16 m²",
      price: "10,000 EGP / month",
      details: [
        "Suitable for 3–5 people",
        "Partially furnished options available",
        "Other rooms available for full client furnishing",
      ],
      image: img16,
    },
    {
      title: "Staff Room – 18 m²",
      price: "13,000 EGP / month",
      details: [
        "Suitable for 5–6 people",
        "Some rooms include multiple desks, meeting tables, drawer units",
        "Custom furnishing options available",
      ],
      image: img18,
    },
    {
      title: "Large Room – 25 m²",
      price: "17,000 EGP / month",
      details: [
        "Suitable for 6–8 people",
        "Some rooms include multiple desks, meeting tables, drawer units",
        "Custom furnishing options available",
      ],
      image: img25,
    },
  ];

  return (
    <Container style={{ marginTop: "100px" }} className="custom-container" >
      <h1 className="mb-5 text-center">Private Offices</h1>
      <Row>
        {offices.map((office, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow bg-dark text-white">
              <Card.Img
                variant="top"
                src={office.image}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{office.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {office.price}
                </Card.Subtitle>
                <h5 className="mt-3">Room Details</h5>
                <ul>
                  {office.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PrivateOffice;
