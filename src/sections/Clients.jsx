import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Clients = () => {
  // Array of fake company names to act as placeholders for logos
  const clientLogos = ['TechCorp', 'StudioX', 'GlobalNet', 'DevWorks', 'Innovate'];

  return (
    <section style={{ padding: '60px 0', backgroundColor: '#ffffff', borderTop: '1px solid #eaeaea' }}>
      <Container>
        <Row className="align-items-center justify-content-center text-center opacity-50">
          {clientLogos.map((logo, index) => (
            <Col key={index} xs={6} md={4} lg={2} className="mb-4 mb-lg-0">
              {/* Replace this <h2> with actual <img> tags when you have real logos! */}
              <h4 className="fw-bold text-secondary m-0" style={{ fontFamily: 'monospace' }}>
                {logo}
              </h4>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Clients;