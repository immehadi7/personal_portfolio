import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="d-flex align-items-center" 
      style={{ minHeight: '100vh', backgroundColor: '#fcfcfc', paddingTop: '80px' }}
    >
      <Container>
        <Row className="align-items-center flex-column-reverse flex-lg-row">
          
          {/* Left Column: Text & Buttons */}
          <Col lg={6} className="text-center text-lg-start mt-5 mt-lg-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-primary fw-bold mb-2">Hello, Welcome!</h5>
              <h1 className="display-4 fw-bold mb-3">
                Hi, I'm <span className="text-primary">[Your Name]</span>
                <br /> a Web Developer.
              </h1>
              <p className="lead text-muted mb-4">
                I build modern, scalable, and responsive web applications. Let's turn your ideas into a beautiful digital reality.
              </p>
              <div>
                <Button variant="primary" size="lg" className="me-3 px-4 rounded-pill shadow-sm">
                  Hire Me
                </Button>
                <Button variant="outline-dark" size="lg" className="px-4 rounded-pill shadow-sm">
                  Contact
                </Button>
              </div>
            </motion.div>
          </Col>

          {/* Right Column: Profile Image */}
          <Col lg={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Note: We are using a placeholder image for now. You can replace the src later! */}
              <img 
                src="https://via.placeholder.com/500x500.png?text=Your+Profile+Pic" 
                alt="Profile" 
                className="img-fluid rounded-circle shadow-lg"
                style={{ maxWidth: '400px', width: '100%', border: '8px solid white' }}
              />
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;