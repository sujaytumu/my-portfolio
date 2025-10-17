import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard"; // create a card component if needed
import certificateImg from "../../Assets/certificate1.jpeg"; // your certificate image
import certificateImg2 from "../../Assets/certificate2.jpg"; // your certificate image
import certificateImg3 from "../../Assets/certificate3.jpg"; // your certificate image

function Certificates() {
  return (
    // <Container fluid className="certificates-section">
    <Container fluid className="certificates-section mt-5 pt-5">

      <Container>
        <h1 className="project-heading">My Certificates</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg}
              title="JavaScript Course"
              description="Completed a hands-on JavaScript course covering core concepts and DOM manipulation."
              link="https://ude.my/UC-a9ff8e1b-a551-42b4-bbe7-4e0e4d44811f"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg2}
              title="Git and GitHub Course"
              description="Completed a comprehensive course on Git and GitHub for version control and collaboration."
              link="https://ude.my/UC-be5af5a7-38a8-4bfe-b091-9c0d298ff84e"
            />
          </Col>


          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg3}
              title="Git and GitHub Course"
              description="Completed a comprehensive course on Git and GitHub for version control and collaboration."
              link="https://ude.my/UC-be5af5a7-38a8-4bfe-b091-9c0d298ff84e"
            />
          </Col>

          {/* Add more certificates here */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
