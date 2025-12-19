import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-4">
      <h1>Welcome to Kno U Kno</h1>
      <p className="lead">This is the Hone page.</p>
      <div className="mt-4">
        <p>
          Kno U Kno is your platform for knowledge sharing and collaboration.
          Explore our features and get started today!
        </p>
      </div>
    </Container>
  );
};

export default Home;