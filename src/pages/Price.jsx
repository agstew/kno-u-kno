import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Price = () => {
  return (
    <Container className="mt-4">
      <h1>Pricing</h1>
      <p className="lead">Choose the plan that's right for you</p>
      
      <Row className="mt-4">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>
              <h4>Basic</h4>
            </Card.Header>
            <Card.Body>
              <h2>$9.99<small className="text-muted">/mo</small></h2>
              <ul>
                <li>Access to all features</li>
                <li>5 team members</li>
                <li>Email support</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="mb-4 border-primary">
            <Card.Header className="bg-primary text-white">
              <h4>Professional</h4>
            </Card.Header>
            <Card.Body>
              <h2>$29.99<small className="text-muted">/mo</small></h2>
              <ul>
                <li>Everything in Basic</li>
                <li>20 team members</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>
              <h4>Enterprise</h4>
            </Card.Header>
            <Card.Body>
              <h2>$99.99<small className="text-muted">/mo</small></h2>
              <ul>
                <li>Everything in Professional</li>
                <li>Unlimited team members</li>
                <li>24/7 phone support</li>
                <li>Custom integrations</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Price;
