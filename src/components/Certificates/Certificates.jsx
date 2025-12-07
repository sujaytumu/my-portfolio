import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard"; // create a card component if needed
import certificateImg1 from "../../Assets/certificate1.jpeg"; // your certificate image
import certificateImg2 from "../../Assets/certificate2.jpg";
import certificateImg3 from "../../Assets/certificate3.jpg"; 
import certificateImg4 from "../../Assets/certificate4.jpeg"; 
import certificateImg5 from "../../Assets/certificate5.jpeg";

function Certificates() {
  return (
    // <Container fluid className="certificates-section">
    <Container fluid className="certificates-section mt-5 pt-5">

      <Container>
        <h1 className="project-heading">My Certificates</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg1}
              //title="Web Development Course"
              //description="Completed a hands-on Web Development course covering HTML, CSS, JavaScript, and responsive design."
              link="https://ude.my/UC-b7114209-f9c5-4266-9953-2d4ae59f561a/"
            />
          </Col>
          
          
          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg2}
              //title="JavaScript Course"
              //description="Completed a hands-on JavaScript course covering core concepts and DOM manipulation."
              link="https://ude.my/UC-a9ff8e1b-a551-42b4-bbe7-4e0e4d44811f/"
            />
          </Col>


          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg3}
              //title="Git and GitHub Course"
              //description="Completed a comprehensive course on Git and GitHub for version control and collaboration."
              link="https://ude.my/UC-be5af5a7-38a8-4bfe-b091-9c0d298ff84e/"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg4}
              //title="ReactJS Course"
              //description="Completed a hands-on ReactJS course covering components and modern frontend development practices."
              link="https://www.udemy.com/certificate/UC-b27b6356-0454-4ed5-87b9-650eb9218cd0/"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={certificateImg5}
              //title="SQL Course"
              //description="Completed an in-depth SQL course covering real-world database problem-solving."
              link="https://www.udemy.com/certificate/UC-9ba6b6c7-26f3-46c4-a21e-99fb6c3bd1ea/"
            />
          </Col>
          

          {/* Add more certificates here */}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
