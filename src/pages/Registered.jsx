import React from 'react';
import { Container } from 'react-bootstrap';

const Registered = () => {
  return (
    <Container className="mt-4">
      <h1>Registered Users</h1>
      <p className="lead">Welcome to the registered users area.</p>
      <div className="mt-4">
        <p>
          Access exclusive content and features available only to registered members.
        </p>
      </div>
    </Container>
  );
};

export default Registered;