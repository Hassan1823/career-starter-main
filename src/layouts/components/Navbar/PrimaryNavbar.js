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
              <img src={logo} className="Logo_nav" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="Nav_list_wrapper">
                <li class="nav-item">
                  <Link class="nav-link " to="/">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/register">
                    Career
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/register">
                    <button className="Login_btn">Login</button>
                  </Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default PrimaryNavbar;
