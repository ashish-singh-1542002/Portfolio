import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import  MailchimpForm  from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon-2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ashish-singh-b27173236/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/ashish-singh-1542002">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/ashish_singh_0o7/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
