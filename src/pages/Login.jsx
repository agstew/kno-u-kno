import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where JWT authentication would be implemented
    // For now, this is just a placeholder
    console.log('Login attempt with:', credentials);
    
    // Example JWT token storage (to be implemented):
    // const token = response.data.token;
    // localStorage.setItem('jwt_token', token);
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className="mt-4">
      <Card style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Card.Body>
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <p className="mt-3 text-muted">
            JWT authentication structure is ready for implementation.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
