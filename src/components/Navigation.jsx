import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Mehedi<span className="text-primary">.</span>
        </Navbar.Brand>
        
        {/* Hamburger Menu for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Smooth Scroll Links */}
            <Nav.Link as={Link} to="hero" spy={true} smooth={true} offset={-70} duration={500} style={{ cursor: 'pointer' }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="services" spy={true} smooth={true} offset={-70} duration={500} style={{ cursor: 'pointer' }}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="portfolio" spy={true} smooth={true} offset={-70} duration={500} style={{ cursor: 'pointer' }}>
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="resume" spy={true} smooth={true} offset={-70} duration={500} style={{ cursor: 'pointer' }}>
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="contact" spy={true} smooth={true} offset={-70} duration={500} style={{ cursor: 'pointer' }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;