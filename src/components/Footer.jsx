'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row className="text-center">
          <Col md={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h5 className="mb-3">Megh Buch</h5>
              <p className="mb-4">
                Front-End Developer passionate about creating beautiful and functional web experiences.
              </p>
              
              <div className="social-links mb-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light me-3 fs-4"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="linkedin.com/in/megh-buch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light me-3 fs-4"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="mailto:megh24898@gmail.com"
                  className="text-light me-3 fs-4"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="bi bi-envelope"></i>
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light fs-4"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
              
              <div className="border-top pt-3">
                <p className="text mb-0">
                  © {new Date().getFullYear()} Megh Buch. All rights reserved.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}