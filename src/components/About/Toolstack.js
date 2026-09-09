import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import {
  SiPostman,
  SiIntellijidea,
  SiEclipseide,
  SiRailway,
  SiRender,
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>

      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* IntelliJ IDEA */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>

      {/* Eclipse */}
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>

      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>

      {/* Railway */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRailway />
      </Col>

      {/* Render */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
      </Col>

    </Row>
  );
}

export default Toolstack;
