import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sarah Nasraoui </span>
            from <span className="purple"> Taltoula, Tunisia.</span>
            <br /> I am a second year student pursuing a Bachelor degree
            in computer science.
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Noom 
            </li>
            <li className="about-activity">
              <ImPointRight /> Noom
            </li>
            <li className="about-activity">
              <ImPointRight /> Noom
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">رواه سارة</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
