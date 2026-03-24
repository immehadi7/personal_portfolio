import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  // State to hold form data (Ready for our backend!)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Prevent page reload for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted Data:', formData);
    alert("Form submitted! (Backend connection coming soon!)");
    // We will hook this up to our Node/Express API in the next phase!
  };

  return (
    <section id="contact" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-primary fw-bold">Get In Touch</h5>
          <h2 className="fw-bold">Contact Me</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#0d6efd', margin: '10px auto' }}></div>
        </div>

        <Row className="g-5">
          {/* Left Column: Contact Info Cards */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="fw-bold mb-4">Let's talk about your project</h4>
              <p className="text-muted mb-4">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm currently available for freelance projects and full-time opportunities.
              </p>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-light text-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                  <FaMapMarkerAlt size={20} />
                </div>
                <div className="ms-3">
                  <h6 className="fw-bold mb-1">Location</h6>
                  <p className="text-muted mb-0">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-light text-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                  <FaEnvelope size={20} />
                </div>
                <div className="ms-3">
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="text-muted mb-0">mehedy.adi7@gmail.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="bg-light text-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                  <FaPhoneAlt size={20} />
                </div>
                <div className="ms-3">
                  <h6 className="fw-bold mb-1">Call Me</h6>
                  <p className="text-muted mb-0">+880 1644707930</p>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Right Column: Contact Form */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5">
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Control type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="py-3 bg-light border-0" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Control type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="py-3 bg-light border-0" />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Control type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="py-3 bg-light border-0" />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Control as="textarea" rows={5} name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="py-3 bg-light border-0" />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Button variant="primary" type="submit" size="lg" className="px-5 rounded-pill shadow-sm">
                        <FaPaperPlane className="me-2" /> Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;