import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
import privateOffice from "../../Assets/private-office.png";
import virtualOffice from "../../Assets/virtual-office.png";
import meetingRoom from "../../Assets/meeting-room.png";

function Services() {
  const services = [
    {
      title: "Private Offices",
      price: "Spaces from 12m² to 25m²",
      description:
        "We offer private offices in various sizes from 12m² to 25m², fully furnished, equipped, and air-conditioned to meet your company’s needs.",
      link: "/private-office",
      image: privateOffice,
    },
    {
      title: "Virtual Office",
      price: "Licensed business address",
      description:
        "A licensed business address to establish, relocate, or add your company’s headquarters with free hours to use the meeting room.",
      link: "/virtual-office",
      image: virtualOffice,
    },
    {
      title: "Meeting Room Packages",
      price: "Various packages available",
      description:
        "Various packages for using the meeting room with full administrative services, furnished, air-conditioned, and fully equipped.",
      link: "/meeting-room-packages",
      image: meetingRoom,
    },
  ];

  return (
    <Container style={{ marginTop: "100px", color: "#222" }}>
      <h1 className="text-center mb-5" style={{ color: "#007e6a", fontWeight: "700" }}>Our Services</h1>
      <Row className="g-4">
        {services.map((service, idx) => (
          <Col key={idx} md={6} lg={4} className="d-flex">
            <ServiceCard {...service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
