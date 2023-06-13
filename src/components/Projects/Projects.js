import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/img4.jpg";
import emotion from "../../Assets/Projects/img5.jpg";
import editor from "../../Assets/Projects/img2.jpg";
import chatify from "../../Assets/Projects/img1.jpg";
import suicide from "../../Assets/Projects/img6.jpg";
import bitsOfCode from "../../Assets/Projects/img3.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Na me nhotch ydaya f toilette menna lekhr e sif ken me taabich l blayes tloum ken roohk.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blasa 1 "
              description="lahne description mta khouna el projet dsfgfdg kgf  sqldf shfds slgksdhg slfgdshf slfkgd sdkf hdfs h"
              ghLink="https://github.com"
              demoLink="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blasa 2"
              description="lahne description mta khouna el projet dsfgfdg kgf  sqldf shfds slgksdhg slfgdshf slfkgd sdkf hdfs h"
              ghLink="https://github.com/"
              demoLink="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blasa 3"
              description="lahne description mta khouna el projet dsfgfdg kgf  sqldf shfds slgksdhg slfgdshf slfkgd sdkf hdfs h"
              ghLink="https://github.com/"
              demoLink="https://github.com"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blasa 4"
              description="lahne description mta khouna el projet dsfgfdg kgf  sqldf shfds slgksdhg slfgdshf slfkgd sdkf hdfs h"
              ghLink="https://github.com/"
              demoLink="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Blasa 5"
              description="lahne description mta khouna el projet dsfgfdg kgf  sqldf shfds slgksdhg slfgdshf slfkgd sdkf hdfs h"
              ghLink="https://github.com/"
              demoLink="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Blasa 6"
              description="lahne description mta khouna el projet dsfgfdg kgf  sqldf shfds slgksdhg slfgdshf slfkgd sdkf hdfs h"
              ghLink="https://github.com/"
              demoLink="https://github.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
