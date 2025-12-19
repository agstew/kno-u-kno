import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-4">
      <h1>Welcome to Kno U Kno</h1>
      <p>This is the home page of the Kno U Kno application.</p>
      <p>
        Use the navigation to explore different sections of the application.
        This demo showcases 4 different Bootstrap navigation layouts that you can switch between.
      </p>
    </Container>
  );
};

export default Home;
