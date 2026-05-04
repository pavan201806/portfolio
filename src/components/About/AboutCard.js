import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Pavan Aravelli</span>{" "}
            from <span className="purple">MSR Puram, Andhra Pradesh</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">B.Tech student</span> at{" "}
            <span className="purple">GMR Institute of Technology (GMRIT)</span>.
            <br />
            I am specializing in{" "}
            <span className="purple">Artificial Intelligence and Data Science</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching movies 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 🏏
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies 💻
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pavan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
