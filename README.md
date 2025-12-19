# Kno U Kno

Builder a Business - React Frontend with Multiple Navigation Layouts

## Overview

This is a React application featuring 4 different Bootstrap navigation layout variations:

- **Layout A**: Sidebar Navigation (fixed left sidebar with collapsible functionality)
- **Layout B**: Top Bar with Dropdown Menus (horizontal navbar with organized dropdowns)
- **Layout C**: Hamburger Menu (mobile-friendly with toggle)
- **Layout D**: Responsive Navigation (automatically adapts to screen size - RECOMMENDED)

## Features

- ✅ React 18 with React Router for navigation
- ✅ Bootstrap 5 & React-Bootstrap for styling
- ✅ JWT authentication structure (ready for implementation)
- ✅ Active link highlighting
- ✅ Fully responsive design
- ✅ Interactive layout switcher demo

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

The application will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   └── navigation/
│       ├── SidebarNavigation.jsx      (Layout A)
│       ├── TopBarDropdown.jsx         (Layout B)
│       ├── HamburgerNavigation.jsx    (Layout C)
│       ├── ResponsiveNavigation.jsx   (Layout D)
│       └── navigation.css
├── pages/
│   ├── Home.jsx
│   ├── Registered.jsx
│   ├── About.jsx
│   ├── Login.jsx
│   └── Price.jsx
├── App.js
└── index.js
```

## Available Pages

- **Home** (`/` or `/home`) - Welcome page
- **Registered** (`/registered`) - View registered users
- **About** (`/about`) - About the application
- **Login** (`/login`) - Login form with JWT structure
- **Price** (`/price`) - Pricing plans

## Using a Specific Navigation Layout

The demo includes a layout switcher in the top-right corner. In production, you should choose ONE layout:

### To use Layout A (Sidebar Navigation):

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

### To use Layout B (Top Bar with Dropdowns):

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

### To use Layout C (Hamburger Menu):

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

### To use Layout D (Responsive - RECOMMENDED):

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

## JWT Authentication Structure

The application is prepared for JWT authentication. The Login component includes placeholder code for:

- Form submission handling
- Token storage in localStorage
- Credential management

To implement JWT authentication:

1. Add your backend API endpoint
2. Update the login form submit handler
3. Store the JWT token in localStorage
4. Add token validation and protected routes
5. Conditionally render Login/Logout based on authentication state

Example implementation:

```javascript
// In Login.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    localStorage.setItem('jwt_token', data.token);
    // Redirect or update state
  } catch (error) {
    console.error('Login failed:', error);
  }
};
```

## Customization

### Changing Colors

Each navigation component uses Bootstrap variants. To change colors:

- Sidebar: Edit the CSS in `navigation.css`
- Top Bar Dropdown: Change `bg="dark"` to other Bootstrap variants (primary, success, etc.)
- Hamburger: Change `bg="primary"` to your preferred variant
- Responsive: Change `bg="success"` to your preferred variant

### Adding More Links

Add new navigation links in the respective navigation component files and create corresponding page components.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## License

See LICENSE file for details.
