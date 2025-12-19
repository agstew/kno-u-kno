import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css';

/**
 * Layout A: Sidebar Navigation
 * - Fixed sidebar on the left side
 * - "Kno U Kno" branding at the top
 * - Vertical list of navigation links
 * - Collapsible/expandable sidebar
 * - Main content area to the right
 */
const SidebarNavigation = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || (path === '/' && location.pathname === '/home');
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h3 className={collapsed ? 'd-none' : ''}>Kno U Kno</h3>
          <button
            className="btn btn-sm btn-outline-light toggle-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? '☰' : '×'}
          </button>
        </div>
        
        <Nav className="flex-column">
          <Nav.Link
            as={Link}
            to="/"
            className={isActive('/') ? 'active' : ''}
          >
            <i className="bi bi-house-door"></i>
            <span className={collapsed ? 'd-none' : 'ms-2'}>Home</span>
          </Nav.Link>
          
          <Nav.Link
            as={Link}
            to="/registered"
            className={isActive('/registered') ? 'active' : ''}
          >
            <i className="bi bi-people"></i>
            <span className={collapsed ? 'd-none' : 'ms-2'}>Registered</span>
          </Nav.Link>
          
          <Nav.Link
            as={Link}
            to="/about"
            className={isActive('/about') ? 'active' : ''}
          >
            <i className="bi bi-info-circle"></i>
            <span className={collapsed ? 'd-none' : 'ms-2'}>About</span>
          </Nav.Link>
          
          <Nav.Link
            as={Link}
            to="/login"
            className={isActive('/login') ? 'active' : ''}
          >
            <i className="bi bi-box-arrow-in-right"></i>
            <span className={collapsed ? 'd-none' : 'ms-2'}>Login</span>
          </Nav.Link>
          
          <Nav.Link
            as={Link}
            to="/price"
            className={isActive('/price') ? 'active' : ''}
          >
            <i className="bi bi-currency-dollar"></i>
            <span className={collapsed ? 'd-none' : 'ms-2'}>Price</span>
          </Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default SidebarNavigation;
