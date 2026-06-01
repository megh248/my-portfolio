import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL = [
  { icon: 'bi-linkedin', href: 'https://linkedin.com/in/megh-buch', label: 'LinkedIn' },
  { icon: 'bi-envelope-fill', href: 'mailto:megh24898@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <Row className="g-4 align-items-center">
            <Col lg={5} className="text-center text-lg-start">
              <div className="footer-brand d-inline-flex align-items-center gap-3 mb-3">
                <span className="footer-avatar">MB</span>
                <div className="text-start">
                  <h5 className="fw-bold mb-1 text-white">Megh Buch</h5>
                  <p className="footer-role mb-0">Senior Frontend Engineer</p>
                </div>
              </div>
              <p className="footer-tagline">
                Building scalable React applications, data-heavy dashboards, and
                performance-optimized interfaces.
              </p>
            </Col>

            <Col lg={3} className="text-center">
              <h6 className="footer-heading">Quick Links</h6>
              <nav className="footer-nav d-flex flex-column gap-2">
                {FOOTER_LINKS.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="footer-nav-link"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </Col>

            <Col lg={4} className="text-center text-lg-end">
              <h6 className="footer-heading">Connect</h6>
              <div className="footer-social d-flex justify-content-center justify-content-lg-end gap-2 mb-3">
                {SOCIAL.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="footer-social-btn"
                    aria-label={item.label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </motion.a>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Button
                  variant="outline-light"
                  size="sm"
                  className="footer-top-btn"
                  onClick={scrollToTop}
                >
                  <i className="bi bi-arrow-up me-1" />
                  Back to Top
                </Button>
              </motion.div>
            </Col>
          </Row>

          <div className="footer-divider my-4" />

          <Row>
            <Col className="text-center">
              <p className="footer-copy mb-0">
                © {new Date().getFullYear()} Megh Buch. Crafted with React & Framer Motion.
              </p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </footer>
  );
}
