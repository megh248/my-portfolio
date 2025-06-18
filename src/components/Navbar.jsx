import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function CustomNavbar() {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#">Megh's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="portfolio-navbar" />
          <Navbar.Collapse id="portfolio-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}
