import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// MeetingRoomPackages Component
function MeetingRoomPackages() {
  const monthlyPackages = [
    { title: "Package 1", hours: 15, price: "2,500 EGP" },
    { title: "Package 2", hours: 20, price: "3,000 EGP" },
    { title: "Package 3", hours: 40, price: "5,000 EGP" },
    { title: "Package 4", hours: 60, price: "7,000 EGP" },
    { title: "Package 5", hours: 100, price: "9,000 EGP" },
    { title: "Package 6", hours: 120, price: "10,000 EGP" },
  ];

  const yearlyPackages = [
    { title: "Package 1", hours: 60, price: "4,000 EGP" },
    { title: "Package 2", hours: 100, price: "5,500 EGP" },
    { title: "Package 3", hours: 120, price: "6,000 EGP" },
    { title: "Package 4", hours: 150, price: "7,000 EGP" },
    { title: "Package 5", hours: 200, price: "8,000 EGP" },
    { title: "Package 6", hours: 450, price: "13,000 EGP" },
    { title: "Package 7", hours: 600, price: "15,000 EGP" },
  ];

  const includedServices = [
    "TV screen",
    "Whiteboard",
    "High-speed internet",
    "Reception support",
    "Coffee & water",
  ];

  return (
    <Container style={{  marginTop: "100px" }} className="custom-container" >
      <h1 className="text-center mb-4">Meeting Room Packages</h1>
      <p className="text-center">
        <strong>Hourly Rate:</strong> Starts at 150 EGP / hour
      </p>

      <h3 className="mt-5">Monthly Packages (All admin services included)</h3>
      <Row>
        {monthlyPackages.map((pkg, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm bg-dark text-white">
              <Card.Body>
                <Card.Title>{pkg.title}</Card.Title>
                <Card.Text>
                  <strong>{pkg.hours} Hours</strong>
                  <br />
                  {pkg.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="mt-5">Yearly Packages (All admin services included)</h3>
      <Row>
        {yearlyPackages.map((pkg, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm bg-dark text-white">
              <Card.Body>
                <Card.Title>{pkg.title}</Card.Title>
                <Card.Text>
                  <strong>{pkg.hours} Hours</strong>
                  <br />
                  {pkg.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="mt-5">Included Services</h3>
      <ul>
        {includedServices.map((service, i) => (
          <li key={i}>{service}</li>
        ))}
      </ul>
    </Container>
  );
}

export default MeetingRoomPackages;
