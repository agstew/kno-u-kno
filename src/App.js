import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';

// Import page components
import Home from './pages/Home';
import Registered from './pages/Registered';
import About from './pages/About';
import Login from './pages/Login';
import Price from './pages/Price';

// Import navigation components
import SidebarNavigation from './components/navigation/SidebarNavigation';
import TopBarDropdown from './components/navigation/TopBarDropdown';
import HamburgerNavigation from './components/navigation/HamburgerNavigation';
import ResponsiveNavigation from './components/navigation/ResponsiveNavigation';

/**
 * Main App Component
 * 
 * This component demonstrates all 4 navigation layouts with a switcher.
 * In production, you would choose ONE layout and remove the switcher.
 * 
 * TO USE A SPECIFIC LAYOUT:
 * 1. Import only the navigation component you want to use
 * 2. Remove the layoutSwitcher and layoutType state
 * 3. Wrap your Routes with the chosen navigation component
 * 
 * Example for Layout A (Sidebar):
 *   <SidebarNavigation>
 *     <Routes>
 *       <Route path="/" element={<Home />} />
 *       ...
 *     </Routes>
 *   </SidebarNavigation>
 */
function App() {
  // Layout switcher for demo purposes
  const [layoutType, setLayoutType] = useState('responsive'); // Default to Layout D

  // Select which navigation component to use
  const NavigationComponent = {
    sidebar: SidebarNavigation,
    dropdown: TopBarDropdown,
    hamburger: HamburgerNavigation,
    responsive: ResponsiveNavigation,
  }[layoutType];

  return (
    <Router>
      {/* Layout Switcher - Remove this in production */}
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '0.8rem', marginBottom: '5px' }}>
          <strong>Demo: Switch Layout</strong>
        </div>
        <ButtonGroup size="sm">
          <Button
            variant={layoutType === 'sidebar' ? 'primary' : 'outline-primary'}
            onClick={() => setLayoutType('sidebar')}
            title="Layout A: Sidebar Navigation"
          >
            A
          </Button>
          <Button
            variant={layoutType === 'dropdown' ? 'primary' : 'outline-primary'}
            onClick={() => setLayoutType('dropdown')}
            title="Layout B: Top Bar with Dropdowns"
          >
            B
          </Button>
          <Button
            variant={layoutType === 'hamburger' ? 'primary' : 'outline-primary'}
            onClick={() => setLayoutType('hamburger')}
            title="Layout C: Hamburger Menu"
          >
            C
          </Button>
          <Button
            variant={layoutType === 'responsive' ? 'primary' : 'outline-primary'}
            onClick={() => setLayoutType('responsive')}
            title="Layout D: Responsive (Recommended)"
          >
            D
          </Button>
        </ButtonGroup>
      </div>

      {/* Main Application with Selected Navigation */}
      <NavigationComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registered" element={<Registered />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/price" element={<Price />} />
        </Routes>
      </NavigationComponent>
    </Router>
  );
}

export default App;
