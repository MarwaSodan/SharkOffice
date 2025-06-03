import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! We are <span className="purple">Sharek</span>, a dynamic company based in <span className="purple">Heliopolis, Egypt</span>.
            <br />
            Our mission is to support startups, SMEs, and entrepreneurs by offering fully-equipped, flexible office spaces, virtual offices, and administrative services.
            <br />
            We strive to create a professional work environment that empowers our clients to grow and succeed.
            <br />
            <br />
            At Sharek, we take pride in providing high-quality meeting rooms and office spaces, complete with full administrative support.
            <br />
            While we are currently based in Heliopolis, we plan to expand across Egypt in the near future.
            <br />
            <br />
            Here’s what defines our culture and environment:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Flexible, professional workspace solutions
            </li>
            <li className="about-activity">
              <ImPointRight /> Tailored support for startups and entrepreneurs
            </li>
            <li className="about-activity">
              <ImPointRight /> Dedication to quality, growth, and success
            </li>
          </ul>

          <p style={{ color: "rgb(187, 93, 242)", fontWeight: "bolder" }}>
            "Empowering businesses with the space and support they need to thrive."
          </p>
          <footer className="blockquote-footer">The Sharek Team</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
