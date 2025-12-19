# Navigation Layout Guide

This document explains how to use each of the 4 navigation layouts in production.

## Quick Start

The application currently shows all 4 layouts with a demo switcher. To use a specific layout in production:

1. Open `src/App.js`
2. Remove the layout switcher code (lines with the demo switcher UI)
3. Import only the navigation component you want
4. Wrap your Routes with that component

## Layout Options

### Layout A: Sidebar Navigation
**Best for:** Desktop applications, dashboards, admin panels

**Features:**
- Fixed left sidebar
- Collapsible/expandable
- Always visible on desktop
- Icon-based when collapsed

**How to use:**
```javascript
import SidebarNavigation from './components/navigation/SidebarNavigation';

function App() {
  return (
    <Router>
      <SidebarNavigation>
        <Routes>
          {/* Your routes */}
        </Routes>
      </SidebarNavigation>
    </Router>
  );
}
```

### Layout B: Top Bar with Dropdown Menus
**Best for:** Applications with many navigation items, organized categories

**Features:**
- Horizontal top navigation
- Dropdown menus for organization
- Clean, professional look
- Dark theme

**How to use:**
```javascript
import TopBarDropdown from './components/navigation/TopBarDropdown';

function App() {
  return (
    <Router>
      <TopBarDropdown>
        <Routes>
          {/* Your routes */}
        </Routes>
      </TopBarDropdown>
    </Router>
  );
}
```

### Layout C: Hamburger Menu
**Best for:** Mobile-first applications, simple navigation

**Features:**
- Always shows hamburger icon on small screens
- Full navigation on large screens
- Primary blue theme
- Clean and minimal

**How to use:**
```javascript
import HamburgerNavigation from './components/navigation/HamburgerNavigation';

function App() {
  return (
    <Router>
      <HamburgerNavigation>
        <Routes>
          {/* Your routes */}
        </Routes>
      </HamburgerNavigation>
    </Router>
  );
}
```

### Layout D: Responsive Navigation (RECOMMENDED)
**Best for:** Most applications, general purpose

**Features:**
- Automatically adapts to screen size
- Full navigation on desktop
- Hamburger menu on mobile
- Sticky positioning
- Green theme

**How to use:**
```javascript
import ResponsiveNavigation from './components/navigation/ResponsiveNavigation';

function App() {
  return (
    <Router>
      <ResponsiveNavigation>
        <Routes>
          {/* Your routes */}
        </Routes>
      </ResponsiveNavigation>
    </Router>
  );
}
```

## Customization

### Changing Colors

Each navigation component uses Bootstrap color variants. You can change them by editing the respective component:

- **Sidebar**: Edit CSS in `src/components/navigation/navigation.css`
- **TopBarDropdown**: Change `bg="dark"` to `bg="primary"`, `bg="success"`, etc.
- **HamburgerNavigation**: Change `bg="primary"` to your preferred variant
- **ResponsiveNavigation**: Change `bg="success"` to your preferred variant

### Adding New Links

To add a new navigation link:

1. Create the page component in `src/pages/`
2. Add the route in `src/App.js`
3. Add the link in each navigation component you're using

Example:
```javascript
// In navigation component
<Nav.Link as={Link} to="/new-page">
  New Page
</Nav.Link>

// In App.js Routes
<Route path="/new-page" element={<NewPage />} />
```

### JWT Authentication

The Login component includes placeholder code for JWT authentication. To implement:

1. Update the `handleSubmit` function in `src/pages/Login.jsx`
2. Add your backend API endpoint
3. Store the JWT token in localStorage
4. Create a protected route wrapper
5. Conditionally render Login/Logout in navigation components

Example:
```javascript
// Check if user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('jwt_token') !== null;
};

// In navigation component
{isAuthenticated() ? (
  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
) : (
  <Nav.Link as={Link} to="/login">Login</Nav.Link>
)}
```

## Demo Mode vs Production

**Current (Demo Mode):**
- Layout switcher visible
- All 4 navigation components imported
- Dynamic layout switching

**Production:**
- Remove layout switcher UI
- Import only one navigation component
- Cleaner, faster code

## Need Help?

Refer to the main README.md for more detailed information and examples.
