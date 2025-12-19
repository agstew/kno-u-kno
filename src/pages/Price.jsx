import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const Price = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Pricing Plans</h1>
      <p className="lead text-center mb-5">Choose the plan that's right for you</p>
      
      <Row>
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Free</Card.Title>
              <h2 className="my-4">$0<small className="text-muted">/month</small></h2>
              <ul className="list-unstyled">
                <li>Basic features</li>
                <li>Limited storage</li>
                <li>Community support</li>
              </ul>
              <Button variant="outline-primary" className="mt-3">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center border-primary">
            <Card.Body>
              <Card.Title>Pro</Card.Title>
              <h2 className="my-4">$9.99<small className="text-muted">/month</small></h2>
              <ul className="list-unstyled">
                <li>All features</li>
                <li>Unlimited storage</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
              </ul>
              <Button variant="primary" className="mt-3">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Enterprise</Card.Title>
              <h2 className="my-4">Custom</h2>
              <ul className="list-unstyled">
                <li>Custom features</li>
                <li>Unlimited everything</li>
                <li>Dedicated support</li>
                <li>Custom integrations</li>
              </ul>
              <Button variant="outline-primary" className="mt-3">Contact Us</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Price;