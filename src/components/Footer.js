import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Sarah's Website</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SN</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            
          
            <li className="social-icons">
              <a
                href="https://www.instagram.com/sarrah_nassraoui/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sarra-nasraoui-598729271/?fbclid=IwAR0cBzaMk8hTVcHuTZXE0EF7sxcaiy4K1QDuOR8KswqApoYLnoZirQO1D70"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
