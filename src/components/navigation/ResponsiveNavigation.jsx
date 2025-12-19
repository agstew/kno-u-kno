import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './navigation.css';

const ResponsiveNavigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="responsive-navigation">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Kno U Kno
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Hone</Nav.Link>
            <Nav.Link as={Link} to="/registered">Registered</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/price">Price</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavigation;