import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-4">
      <h1>About Kno U Kno</h1>
      <p>Kno U Kno is a business builder application.</p>
      <h3>Features</h3>
      <ul>
        <li>Multiple navigation layout options</li>
        <li>Bootstrap-based responsive design</li>
        <li>JWT authentication ready</li>
        <li>React Router for seamless navigation</li>
      </ul>
    </Container>
  );
};

export default About;
