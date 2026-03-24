import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// Fake Data for Testimonials
const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechNova Inc.',
    image: 'https://via.placeholder.com/100x100.png?text=SJ',
    feedback: 'Absolutely thrilled with the new website! The attention to detail and smooth animations completely transformed our online presence.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Creative Studio',
    image: 'https://via.placeholder.com/100x100.png?text=MC',
    feedback: 'A truly professional developer. Delivered the project ahead of schedule and the code quality is top-notch. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Davis',
    company: 'E-commerce Plus',
    image: 'https://via.placeholder.com/100x100.png?text=ED',
    feedback: 'Integrated our backend systems flawlessly. The new user dashboard is intuitive and our customers love it.',
    rating: 4
  }
];

// Helper function to render stars
const renderStars = (rating) => {
  return [...Array(5)].map((_, index) => (
    <FaStar key={index} color={index < rating ? '#ffc107' : '#e4e5e9'} className="me-1" />
  ));
};

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-primary fw-bold">Client Feedback</h5>
          <h2 className="fw-bold">Testimonials</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#0d6efd', margin: '10px auto' }}></div>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            {/* The Slider / Carousel */}
            <Carousel indicators={false} className="shadow-sm bg-white p-5 rounded-4 text-center">
              {testimonialsData.map((testimonial) => (
                <Carousel.Item key={testimonial.id} interval={4000}>
                  <FaQuoteLeft size={40} className="text-primary opacity-25 mb-4" />
                  <p className="lead fst-italic mb-4 text-muted">
                    "{testimonial.feedback}"
                  </p>
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="rounded-circle mb-3 shadow-sm"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <h5 className="fw-bold mb-0">{testimonial.name}</h5>
                  <p className="text-muted small">{testimonial.company}</p>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;