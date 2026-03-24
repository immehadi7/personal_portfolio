import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

// Fake Data for your Blog Posts
const blogData = [
  {
    id: 1,
    title: 'How to Build a Modern Portfolio with React',
    excerpt: 'Learn the step-by-step process of creating a blazing fast, single-page application to showcase your work.',
    date: 'Oct 12, 2023',
    image: 'https://via.placeholder.com/600x400.png?text=React+Portfolio'
  },
  {
    id: 2,
    title: 'Understanding MongoDB and Mongoose',
    excerpt: 'A beginners guide to NoSQL databases and how to elegantly model your data for web applications.',
    date: 'Sep 28, 2023',
    image: 'https://via.placeholder.com/600x400.png?text=MongoDB+Guide'
  },
  {
    id: 3,
    title: '10 Tips for Better UI/UX Design',
    excerpt: 'Small tweaks that make a massive difference in how users interact with your digital products.',
    date: 'Sep 15, 2023',
    image: 'https://via.placeholder.com/600x400.png?text=UI+UX+Tips'
  }
];

const Blog = () => {
  return (
    <section id="blog" style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-primary fw-bold">Latest News</h5>
          <h2 className="fw-bold">My Blog</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#0d6efd', margin: '10px auto' }}></div>
        </div>

        <Row className="g-4">
          {blogData.map((post, index) => (
            <Col lg={4} md={6} key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ height: '100%' }}
              >
                <Card className="h-100 shadow-sm border-0 hover-effect overflow-hidden rounded-4">
                  <div style={{ overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={post.image} 
                      alt={post.title}
                      className="portfolio-img" 
                      style={{ objectFit: 'cover', height: '200px', transition: 'transform 0.5s ease' }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column p-4">
                    <p className="text-muted small mb-2">
                      <FaCalendarAlt className="me-2 text-primary" />
                      {post.date}
                    </p>
                    <Card.Title className="fw-bold mb-3 h5">{post.title}</Card.Title>
                    <Card.Text className="text-muted mb-4">
                      {post.excerpt}
                    </Card.Text>
                    <div className="mt-auto">
                      <Button variant="link" className="p-0 text-decoration-none fw-bold d-flex align-items-center">
                        Read More <FaArrowRight className="ms-2" size={14} />
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

export default Blog;