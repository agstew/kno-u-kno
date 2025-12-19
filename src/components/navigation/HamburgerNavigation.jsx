import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import './navigation.css';

const HamburgerNavigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" className="hamburger-navigation">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Kno U Kno
          </Navbar.Brand>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={handleShow}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Kno U Kno</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Hone</Nav.Link>
            <Nav.Link as={Link} to="/registered" onClick={handleClose}>Registered</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
            <Nav.Link as={Link} to="/login" onClick={handleClose}>Login</Nav.Link>
            <Nav.Link as={Link} to="/price" onClick={handleClose}>Price</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HamburgerNavigation;