import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

// Fake data for your projects. We will replace these with real images later!
const projectsData = [
  { id: 1, title: 'E-commerce Platform', category: 'Web', image: 'https://via.placeholder.com/400x300.png?text=E-commerce+Platform' },
  { id: 2, title: 'Fitness Tracker App', category: 'Mobile', image: 'https://via.placeholder.com/400x300.png?text=Fitness+App' },
  { id: 3, title: 'Corporate Branding', category: 'Design', image: 'https://via.placeholder.com/400x300.png?text=Corporate+Branding' },
  { id: 4, title: 'Social Media Dashboard', category: 'Web', image: 'https://via.placeholder.com/400x300.png?text=Social+Dashboard' },
  { id: 5, title: 'Food Delivery App', category: 'Mobile', image: 'https://via.placeholder.com/400x300.png?text=Delivery+App' },
  { id: 6, title: 'Restaurant UI Kit', category: 'Design', image: 'https://via.placeholder.com/400x300.png?text=Restaurant+UI' },
];

// The unique categories we want to filter by
const categories = ['All', 'Web', 'Mobile', 'Design'];

const Portfolio = () => {
  // State to keep track of which category is currently selected
  const [activeFilter, setActiveFilter] = useState('All');

  // Logic to filter the projects array based on the active button
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-primary fw-bold">My Work</h5>
          <h2 className="fw-bold">Portfolio</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#0d6efd', margin: '10px auto' }}></div>
        </div>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center mb-5 flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'primary' : 'outline-primary'}
              className="rounded-pill px-4 shadow-sm"
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid with Animation */}
        <motion.div layout className="row g-4">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              // We use 'as={motion.div}' to let Framer Motion animate the Bootstrap Col
              <Col lg={4} md={6} key={project.id} as={motion.div}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-100 shadow-sm border-0 hover-effect overflow-hidden">
                  <div style={{ overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      alt={project.title} 
                      className="portfolio-img"
                      style={{ objectFit: 'cover', height: '250px', transition: 'transform 0.5s ease' }} 
                    />
                  </div>
                  <Card.Body>
                    <Card.Text className="text-primary fw-bold mb-1" style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>
                      {project.category}
                    </Card.Text>
                    <Card.Title className="fw-bold mb-0">{project.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </AnimatePresence>
        </motion.div>

      </Container>
    </section>
  );
};

export default Portfolio;