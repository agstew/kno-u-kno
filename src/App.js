import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, ButtonGroup, Button } from 'react-bootstrap';

import SidebarNavigation from './components/navigation/SidebarNavigation';
import TopBarDropdown from './components/navigation/TopBarDropdown';
import HamburgerNavigation from './components/navigation/HamburgerNavigation';
import ResponsiveNavigation from './components/navigation/ResponsiveNavigation';

import Home from './pages/Home';
import Registered from './pages/Registered';
import About from './pages/About';
import Login from './pages/Login';
import Price from './pages/Price';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/navigation/navigation.css';

function App() {
  const [navType, setNavType] = useState('responsive');

  const renderNavigation = () => {
    switch (navType) {
      case 'sidebar':
        return <SidebarNavigation />;
      case 'topbar':
        return <TopBarDropdown />;
      case 'hamburger':
        return <HamburgerNavigation />;
      case 'responsive':
      default:
        return <ResponsiveNavigation />;
    }
  };

  const MainContent = () => (
    <>
      <Container className="mt-4 mb-4">
        <div className="text-center">
          <h5>Navigation Style Switcher</h5>
          <ButtonGroup className="mb-3">
            <Button
              variant={navType === 'responsive' ? 'primary' : 'outline-primary'}
              onClick={() => setNavType('responsive')}
            >
              Responsive
            </Button>
            <Button
              variant={navType === 'topbar' ? 'primary' : 'outline-primary'}
              onClick={() => setNavType('topbar')}
            >
              Top Bar
            </Button>
            <Button
              variant={navType === 'hamburger' ? 'primary' : 'outline-primary'}
              onClick={() => setNavType('hamburger')}
            >
              Hamburger
            </Button>
            <Button
              variant={navType === 'sidebar' ? 'primary' : 'outline-primary'}
              onClick={() => setNavType('sidebar')}
            >
              Sidebar
            </Button>
          </ButtonGroup>
        </div>
      </Container>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registered" element={<Registered />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </>
  );

  return (
    <Router>
      {navType === 'sidebar' ? (
        <div className="sidebar-layout">
          {renderNavigation()}
          <div className="main-content">
            <MainContent />
          </div>
        </div>
      ) : (
        <>
          {renderNavigation()}
          <MainContent />
        </>
      )}
    </Router>
  );
}

export default App;