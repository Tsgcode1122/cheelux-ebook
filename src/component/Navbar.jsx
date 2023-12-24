// Navbar.js
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import logoimg from "../images/log.png";
import { IoIosMenu } from "react-icons/io";
const scrollToHome = (event) => {
  const homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: "smooth" });
  }
};
const scrollToAbout = () => {
  event.preventDefault();
  const aboutSection = document.getElementById("ebook");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbars = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="d-flex d-lg-flex lg-justify-content-between align-items-center">
          <Navbar.Brand href="#home" className="logo">
            <img src={logoimg} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <IoIosMenu />{" "}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto align-items-center">
              <Nav.Link href="#" onClick={scrollToHome}>
                Home
              </Nav.Link>
              <Nav.Link href="#ebook" onClick={scrollToAbout}>
                Get E-book
              </Nav.Link>
              <Nav.Link
                href="https://www.cheelux.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Store Website
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
