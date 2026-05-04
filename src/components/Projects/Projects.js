import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Munchly"
              description="A full-stack food ordering application supporting menu browsing, cart management, and order placement. Developed REST APIs using Spring Boot and designed relational database schema. Built with React, Spring Boot, and MySQL."
              ghLink="https://github.com/pavan201806"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MealMitra"
              description="A surplus food donation platform connecting restaurants, volunteers, and NGOs to distribute surplus food. Focused on reducing food waste while enabling community food support."
              ghLink="https://github.com/pavan201806"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Medical Adherence System"
              description="A system developed to help patients track medication schedules and improve adherence. Integrated reminders and monitoring features for better health management."
              ghLink="https://github.com/pavan201806"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
