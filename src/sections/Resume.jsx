import React from 'react';
import { Container, Row, Col, Tab, Tabs, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

// Fake Data: Education
const educationData = [
  {
    id: 1,
    title: 'Master of Computer Science',
    institution: 'Tech University',
    duration: '2021 - 2023',
    description: 'Specialized in Advanced Web Technologies and Artificial Intelligence. Graduated with honors.'
  },
  {
    id: 2,
    title: 'Bachelor of Software Engineering',
    institution: 'State College',
    duration: '2017 - 2021',
    description: 'Learned the fundamentals of programming, data structures, and software architecture.'
  }
];

// Fake Data: Experience
const experienceData = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Creative Digital Agency',
    duration: '2023 - Present',
    description: 'Leading a team of developers to build high-performance React applications for enterprise clients.'
  },
  {
    id: 2,
    title: 'Web Developer Intern',
    company: 'Startup Inc.',
    duration: '2021 - 2022',
    description: 'Assisted in building UI components, fixing bugs, and optimizing website loading speeds.'
  }
];

const Resume = () => {
  return (
    <section id="resume" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-primary fw-bold">My Journey</h5>
          <h2 className="fw-bold">Resume</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#0d6efd', margin: '10px auto' }}></div>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            {/* React Bootstrap Tabs */}
            <Tabs
              defaultActiveKey="experience"
              id="resume-tabs"
              className="mb-4 justify-content-center custom-tabs"
              fill
            >
              {/* EXPERIENCE TAB */}
              <Tab eventKey="experience" title={<><FaBriefcase className="me-2" /> Experience</>}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5 }}
                >
                  {experienceData.map((item) => (
                    <Card key={item.id} className="mb-4 border-0 shadow-sm" style={{ borderLeft: '4px solid #0d6efd' }}>
                      <Card.Body>
                        <h5 className="fw-bold mb-1">{item.title}</h5>
                        <h6 className="text-primary mb-3">{item.company} <span className="text-muted ms-2" style={{ fontSize: '0.85rem' }}>({item.duration})</span></h6>
                        <Card.Text className="text-muted">{item.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </motion.div>
              </Tab>

              {/* EDUCATION TAB */}
              <Tab eventKey="education" title={<><FaGraduationCap className="me-2" /> Education</>}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5 }}
                >
                  {educationData.map((item) => (
                    <Card key={item.id} className="mb-4 border-0 shadow-sm" style={{ borderLeft: '4px solid #198754' }}>
                      <Card.Body>
                        <h5 className="fw-bold mb-1">{item.title}</h5>
                        <h6 className="text-success mb-3">{item.institution} <span className="text-muted ms-2" style={{ fontSize: '0.85rem' }}>({item.duration})</span></h6>
                        <Card.Text className="text-muted">{item.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </motion.div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;