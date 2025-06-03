import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import bgImage from "../../Assets/home-bg.jpg";
import "./Home.css";

function Home() {
  return (
    <section>
      <Container
        fluid
        className="home-section"
        id="home"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div className="overlay"></div>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                <span className="main-name"> Shark Office </span>
              </h1>

              <h2 className="heading-name">
                The Office You Deserve & The Workspace You Need
              </h2>

              <div className="typing-effect">
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
