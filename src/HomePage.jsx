import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section py-5">
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col md={12}>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fw-bold display-5"
              >
                👋 Hi, I'm Megh Buch
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lead mt-3"
              >
                Front-End Developer specializing in <br/><h5>HTML, CSS/SCSS, JS, React & Bootstrap, and a little bit of Flutter.</h5>
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4"
              >
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
} 