import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/images/logo.png";
import "./styles.scss";
function PrimaryNavbar() {
  return (
    <div id="Navbar_container">
      <div className="nav_wrapper">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} className="Logo_nav" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default PrimaryNavbar;
