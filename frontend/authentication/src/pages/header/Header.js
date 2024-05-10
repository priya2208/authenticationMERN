import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Not LoggedIn</Navbar.Brand>

          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login" className="nav-link">
              Login
            </Nav.Link>

            <Nav.Link as={Link} to="/register" className="nav-link">
              Signup
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
