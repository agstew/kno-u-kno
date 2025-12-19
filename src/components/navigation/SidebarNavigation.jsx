import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const SidebarNavigation = () => {
  return (
    <div className="sidebar-navigation">
      <div className="sidebar-header">
        <h2 className="brand-name">Kno U Kno</h2>
      </div>
      <nav className="sidebar-nav">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/">Hone</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registered">Registered</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/price">Price</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarNavigation;