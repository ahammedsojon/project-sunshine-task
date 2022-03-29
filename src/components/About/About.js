import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="my-5">
      <div className="section pt-3">
        <h2 className="title text-center">About Us</h2>
      </div>
      <div className="about">
        <Row className="align-items-center" xs={1} md={2}>
          <Col>
            <div className="about-content">
              <div className="section">
                <h2 className="title">Why Choose Us</h2>
                <p>
                  Auctor eleifend egestas felis a suscipit, amet ultricies orci.
                  Eget nonummy ultrices magna ornare tellus molestie.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <div className="content-item">
                    <div className="item-icon">
                      <i className="fas fa-book-open"></i>
                    </div>
                    <div className="item-details">
                      <h5 className="fw-bold">Best Education System</h5>
                      <p>Advance Education Management</p>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="item-icon">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="item-details">
                      <h5 className="fw-bold">Learning Management</h5>
                      <p>LMS Integration</p>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="item-icon">
                      <i className="fas fa-address-book"></i>
                    </div>
                    <div className="item-details">
                      <h5 className="fw-bold">Online Certification</h5>
                      <p>Performance Based Certificate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="about-img">
              <img
                src="https://image.freepik.com/free-vector/kids-studying-from-home-concept-illustration_114360-1800.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
