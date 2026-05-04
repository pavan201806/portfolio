import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a motivated B.Tech student specializing in
              <i>
                <b className="purple"> Artificial Intelligence and Data Science </b>
              </i>
              with a strong interest in Full Stack Development and emerging technologies.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, Python, JavaScript, and React{" "}
                </b>
              </i>
              — and I enjoy building scalable web applications.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Web Applications and Artificial Intelligence Solutions.{" "}
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Spring Boot </b> and modern JavaScript frameworks like{" "}
              <i>
                <b className="purple">React.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
