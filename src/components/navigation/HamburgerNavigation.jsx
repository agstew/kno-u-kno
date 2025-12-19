import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

/**
 * Layout C: Top Bar with Hamburger Menu (Mobile-Friendly)
 * - Horizontal top navigation bar
 * - "Kno U Kno" branding visible
 * - Hamburger menu icon that toggles navigation on mobile/smaller screens
 * - Full navigation visible on desktop, collapsible on mobile
 */
const HamburgerNavigation = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || (path === '/' && location.pathname === '/home');
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="md" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Kno U Kno
          </Navbar.Brand>
          {/* Hamburger toggle button - automatically shows on smaller screens */}
          <Navbar.Toggle aria-controls="hamburger-nav" />
          <Navbar.Collapse id="hamburger-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={isActive('/') ? 'active' : ''}
              >
                Home
              </Nav.Link>
              
              <Nav.Link
                as={Link}
                to="/registered"
                className={isActive('/registered') ? 'active' : ''}
              >
                Registered
              </Nav.Link>
              
              <Nav.Link
                as={Link}
                to="/about"
                className={isActive('/about') ? 'active' : ''}
              >
                About
              </Nav.Link>
              
              <Nav.Link
                as={Link}
                to="/login"
                className={isActive('/login') ? 'active' : ''}
              >
                Login
              </Nav.Link>
              
              <Nav.Link
                as={Link}
                to="/price"
                className={isActive('/price') ? 'active' : ''}
              >
                Price
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div>
        {children}
      </div>
    </>
  );
};

export default HamburgerNavigation;
