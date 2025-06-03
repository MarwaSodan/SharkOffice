import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaUsers, FaBriefcase, FaComments, FaLaptopHouse, FaHandsHelping } from "react-icons/fa";

function Services() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <FaLaptopHouse /> <br /> <span style={{ fontSize: "30px", color: "white" }}>Fully-Equipped Offices</span>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <FaBriefcase /> <br /> <span style={{ fontSize: "30px" }}>Virtual Offices</span>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <FaUsers /> <br /> <span style={{ fontSize: "30px" }}>Co-working Spaces</span>
        
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <FaComments  /> <br /> <span style={{ fontSize: "30px" }}>Meeting Rooms</span> 
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <FaHandsHelping  /> <br /> <span style={{ fontSize: "30px"}}>Admin Support</span>  
      </Col>
    </Row>
  );
}

export default Services;
