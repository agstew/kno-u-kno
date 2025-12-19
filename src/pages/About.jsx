import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-4">
      <h1>About Kno U Kno</h1>
      <p className="lead">Learn more about our platform.</p>
      <div className="mt-4">
        <h2>Our Mission</h2>
        <p>
          Kno U Kno is dedicated to creating a vibrant community where knowledge
          flows freely and connections are made effortlessly.
        </p>
        <h2>What We Offer</h2>
        <p>
          Our platform provides tools and resources to help you share, learn,
          and grow with others who share your interests.
        </p>
      </div>
    </Container>
  );
};

export default About;