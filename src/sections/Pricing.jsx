import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const pricingData = [
  {
    id: 1,
    plan: 'Basic',
    price: '$99',
    description: 'Perfect for simple single-page websites.',
    features: ['1 Page Single-Page App', 'Basic Responsive Design', 'Contact Form', '1 Week Delivery'],
    isPopular: false
  },
  {
    id: 2,
    plan: 'Pro',
    price: '$299',
    description: 'Ideal for growing businesses and portfolios.',
    features: ['Up to 5 Pages', 'Advanced UI/UX Animations', 'Content Management System', 'SEO Optimization', '2 Weeks Delivery'],
    isPopular: true // This is the plan we are highlighting!
  },
  {
    id: 3,
    plan: 'Premium',
    price: '$599',
    description: 'Full-stack application with a custom backend.',
    features: ['Unlimited Pages', 'Custom Database (MongoDB)', 'User Authentication', 'E-commerce Integration', '1 Month Support'],
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-primary fw-bold">Choose Your Plan</h5>
          <h2 className="fw-bold">Pricing Packages</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#0d6efd', margin: '10px auto' }}></div>
        </div>

        <Row className="g-4 align-items-center justify-content-center">
          {pricingData.map((pkg, index) => (
            <Col lg={4} md={6} key={pkg.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card 
                  className={`h-100 border-0 shadow text-center position-relative ${pkg.isPopular ? 'py-4 shadow-lg border-primary' : 'py-3'}`}
                  style={{ 
                    borderRadius: '15px', 
                    border: pkg.isPopular ? '2px solid #0d6efd' : 'none',
                    transform: pkg.isPopular ? 'scale(1.05)' : 'scale(1)', // Makes the popular card slightly bigger
                    zIndex: pkg.isPopular ? 1 : 0
                  }}
                >
                  {/* "Most Popular" Badge */}
                  {pkg.isPopular && (
                    <div 
                      className="bg-primary text-white fw-bold py-1 px-3 position-absolute top-0 start-50 translate-middle rounded-pill shadow-sm"
                      style={{ fontSize: '0.85rem' }}
                    >
                      MOST POPULAR
                    </div>
                  )}

                  <Card.Body className="d-flex flex-column">
                    <h4 className="fw-bold mb-3">{pkg.plan}</h4>
                    <h1 className="display-4 fw-bold text-primary mb-3">
                      {pkg.price}
                    </h1>
                    <p className="text-muted mb-4">{pkg.description}</p>

                    <ListGroup variant="flush" className="mb-4 text-start">
                      {pkg.features.map((feature, i) => (
                        <ListGroup.Item key={i} className="border-0 px-0 text-muted">
                          <FaCheckCircle className="text-success me-2" /> {feature}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>

                    <div className="mt-auto">
                      <Button 
                        variant={pkg.isPopular ? 'primary' : 'outline-primary'} 
                        size="lg" 
                        className="w-100 rounded-pill fw-bold"
                      >
                        Choose {pkg.plan}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;