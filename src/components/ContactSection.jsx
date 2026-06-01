import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { staggerContainer, scaleIn } from '../utils/motion';

const contactInfo = [
  {
    icon: 'bi-envelope-fill',
    title: 'Email',
    value: 'megh24898@gmail.com',
    link: 'mailto:megh24898@gmail.com',
    cta: 'Send Email',
  },
  {
    icon: 'bi-geo-alt-fill',
    title: 'Location',
    value: 'Bengaluru, India',
    link: null,
    cta: null,
  },
  {
    icon: 'bi-linkedin',
    title: 'LinkedIn',
    value: 'linkedin.com/in/megh-buch',
    link: 'https://linkedin.com/in/megh-buch',
    cta: 'Connect',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-contact">
      <div className="section-bg-decor" aria-hidden="true" />
      <Container className="position-relative">
        <SectionHeader
          badge="Contact"
          title="Let's Build Something Great"
          subtitle="Open to frontend engineering roles, consulting, and collaboration on React and TypeScript products"
        />

        <motion.div
          className="contact-cta-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="contact-cta-content">
            <h4 className="fw-bold mb-2">Ready to collaborate?</h4>
            <p className="mb-0 opacity-90">
              I&apos;m currently open to senior frontend opportunities and impactful product work.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button
              href="mailto:megh24898@gmail.com"
              className="contact-cta-btn"
              size="lg"
            >
              <i className="bi bi-send-fill me-2" />
              Start a Conversation
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="row g-4 justify-content-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {contactInfo.map((info) => (
            <Col md={6} lg={4} key={info.title}>
              <motion.div variants={scaleIn} className="h-100">
                <motion.div
                  className="contact-card h-100"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="contact-card-icon">
                    <i className={`bi ${info.icon}`} />
                  </div>
                  <h5 className="fw-bold mb-2">{info.title}</h5>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="contact-card-value"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="contact-card-value mb-0">{info.value}</p>
                  )}
                  {info.cta && info.link && (
                    <a href={info.link} className="contact-card-link mt-3">
                      {info.cta}
                      <i className="bi bi-arrow-right ms-1" />
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </motion.div>

        <motion.div
          className="contact-footer-note text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted mb-0">
            <i className="bi bi-clock me-2" />
            Typically responds within 24–48 hours
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
