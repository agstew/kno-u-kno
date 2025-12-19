import React from 'react';
import { Container } from 'react-bootstrap';

const Registered = () => {
  return (
    <Container className="mt-4">
      <h1>Registered Users</h1>
      <p>This page shows everybody registered in the system.</p>
      <p>
        In a full implementation, this would display a list of all registered users.
        This page could be protected and only accessible to authenticated users.
      </p>
    </Container>
  );
};

export default Registered;
