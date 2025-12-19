import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

/**
 * Layout B: Top Bar with Dropdown Menus
 * - Horizontal top navigation bar
 * - "Kno U Kno" branding on the left
 * - Navigation links organized with dropdown menus where appropriate
 * - Responsive design
 */
const TopBarDropdown = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || (path === '/' && location.pathname === '/home');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Kno U Kno
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={isActive('/') ? 'active' : ''}
              >
                Home
              </Nav.Link>
              
              <NavDropdown title="Members" id="members-dropdown">
                <NavDropdown.Item as={Link} to="/registered">
                  Registered
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login">
                  Login
                </NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="Information" id="info-dropdown">
                <NavDropdown.Item as={Link} to="/about">
                  About
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/price">
                  Price
                </NavDropdown.Item>
              </NavDropdown>
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

export default TopBarDropdown;
