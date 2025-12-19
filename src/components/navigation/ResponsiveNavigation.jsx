import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

/**
 * Layout D: Combination (Responsive - Top bar on desktop, Hamburger on mobile)
 * - Top bar with all links visible on desktop/tablet
 * - Automatically converts to hamburger menu on mobile devices
 * - Smooth transitions between layouts
 * - "Kno U Kno" branding always visible
 * 
 * This is the most versatile layout, automatically adapting to screen size.
 * On large screens (≥992px), all navigation links are displayed horizontally.
 * On smaller screens, the hamburger menu icon appears and navigation collapses.
 */
const ResponsiveNavigation = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || (path === '/' && location.pathname === '/home');
  };

  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg" className="mb-3" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            Kno U Kno
          </Navbar.Brand>
          
          {/* This toggle button appears on screens smaller than 'lg' (992px) */}
          <Navbar.Toggle aria-controls="responsive-nav" />
          
          <Navbar.Collapse id="responsive-nav">
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

export default ResponsiveNavigation;
