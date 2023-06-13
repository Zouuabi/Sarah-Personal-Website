import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span>Sarah
            </h1>
            <p className="home-about-body">
              Wahda Rasha 🟪bech me ngoulch mraba3  
              lahne ntt bch dqame roohk 
              <br />
              <br />sdfds tsfdsd ds fsdsf 
              <i>
                <b className="purple"> sdf, badfgfdsck ady mawdfgfed devefdglopdfgya. </b>
              </i>
              <br />
              <br />
              Msdfy fisfelsd of Intezerzeest's asffre buhsildinezg neqdfgw &nbsp;
              <i>
                <b className="purple">Waeetb Technosflogdies andfd Prssfodugcts </b> and
                alsego isn areadss relatsfed to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
             fghfghfgh fdhg gh 
              hjkgk <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  fghg ghh s 
                </b>
              </i>
              &nbsp; likfghe
              <i>
                <b className="purple"> Rdeafsct.jfghs anhgd Negfhxt.jfs</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND HER ON</h1>
            <p>
              Don't Feel free to <span className="purple">connect </span>with her  mqara3cha chway 
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.instagram.com/sarrah_nassraoui/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sarra-nasraoui-598729271/?fbclid=IwAR0cBzaMk8hTVcHuTZXE0EF7sxcaiy4K1QDuOR8KswqApoYLnoZirQO1D70"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
