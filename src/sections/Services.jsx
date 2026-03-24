import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaServer, FaSearch, FaRocket } from 'react-icons/fa';

// Fake data for our services. Later, we can fetch this from MongoDB!
const servicesData = [
  {
    id: 1,
    icon: <FaLaptopCode size={40} className="text-primary mb-3" />,
    title: 'Web Development',
    description: 'Building responsive and high-performance websites using modern tech stacks like MERN.'
  },
  {
    id: 2,
    icon: <FaMobileAlt size={40} className="text-primary mb-3" />,
    title: 'Mobile-Friendly Design',
    description: 'Ensuring your applications look perfect and function flawlessly on all devices and screen sizes.'
  },
  {
    id: 3,
    icon: <FaPalette size={40} className="text-primary mb-3" />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually stunning user interfaces for engaging user experiences.'
  },
  {
    id: 4,
    icon: <FaServer size={40} className="text-primary mb-3" />,
    title: 'Backend Development',
    description: 'Creating robust, secure, and scalable server-side APIs and database architectures.'
  },
  {
    id: 5,
    icon: <FaSearch size={40} className="text-primary mb-3" />,
    title: 'SEO Optimization',
    description: 'Implementing best practices to improve your visibility and ranking on search engines.'
  },
  {
    id: 6,
    icon: <FaRocket size={40} className="text-primary mb-3" />,
    title: 'Performance Tuning',
    description: 'Optimizing code and assets to deliver lightning-fast load times for your users.'
  }
];

const Services = () => {
  return (
    <section id="services" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-primary fw-bold">What I Do</h5>
          <h2 className="fw-bold">My Services</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#0d6efd', margin: '10px auto' }}></div>
        </div>

        {/* Services Grid */}
        <Row className="g-4">
          {servicesData.map((service, index) => (
            <Col lg={4} md={6} key={service.id}>
              {/* framer-motion helps these cards fade in as you scroll down */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card className="h-100 shadow-sm border-0 text-center p-4 hover-effect">
                  <Card.Body>
                    {service.icon}
                    <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {service.description}
                    </Card.Text>
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

export default Services;