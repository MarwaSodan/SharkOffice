import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// VirtualOffice Component
function VirtualOffice() {
  const packages = [
    {
      title: "Package 1",
      price: "3,500 EGP / Year",
      details: ["Licensed business address", "No meeting room hours included"],
    },
    {
      title: "Package 2",
      price: "4,000 EGP / Year",
      details: [
        "Licensed business address",
        "Company signage during meetings and inspections",
        "60 meeting room hours per year",
      ],
    },
    {
      title: "Package 3",
      price: "7,000 EGP / 2 Years",
      details: [
        "Licensed business address",
        "Signage during meetings and inspections",
        "100 meeting room hours",
      ],
    },
    {
      title: "Package 4",
      price: "9,000 EGP / 3 Years",
      details: [
        "Licensed business address",
        "Permanent signage with your company name",
        "150 meeting room hours",
        "Additional hours: 120 EGP/hour",
      ],
    },
  ];

  return (
    <Container style={{ marginTop: "100px" }} className="custom-container" >
      <h1 className="text-center mb-5">Virtual Office Packages</h1>
      <Row>
        {packages.map((pkg, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow bg-dark text-white">
              <Card.Body>
                <Card.Title>{pkg.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  {pkg.price}
                </Card.Subtitle>
                <ul>
                  {pkg.details.map((item, i) => (
                    <li key={i}>{item}</li>
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

export default VirtualOffice;
