import React from "react";
import { Col, Row } from "react-bootstrap";

import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiPostgresql,
} from "react-icons/di";

import {
  //SiC,
  SiMysql,
  SiExpress,
  SiSpringboot,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* C */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col> */}

      

      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      {/* C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      {/* Spring Boot */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>

      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      {/* Express.js */}
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>

      {/* MongoDB */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      {/* MySQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      {/* PostgreSQL */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>

    </Row>
  );
}

export default Techstack;
