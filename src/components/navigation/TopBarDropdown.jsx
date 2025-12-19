import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './navigation.css';

const TopBarDropdown = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="topbar-dropdown">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Kno U Kno
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Hone</Nav.Link>
            <Nav.Link as={Link} to="/registered">Registered</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/price">Price</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBarDropdown;