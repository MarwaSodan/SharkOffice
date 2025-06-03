import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWifi, FaCoffee, FaPrint, FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa";

function Facilities() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons">
        <FaWifi /> <br /><span style={{ fontSize: "30px"}}> High-Speed Internet </span>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <FaCoffee /> <br /><span style={{ fontSize: "30px"}}> Coffee & Refreshments </span>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <FaPrint /> <br /><span style={{ fontSize: "30px"}}> Printing Services </span>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <FaPhoneAlt /> <br /> <span style={{ fontSize: "30px"}}> Reception & Call Handling </span>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <FaRegCalendarCheck /> <br /> <span style={{ fontSize: "30px"}}> Booking Syste </span>
      </Col>
    </Row>
  );
}

export default Facilities;
