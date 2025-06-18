import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: 'bi bi-envelope',
      title: 'Email',
      value: 'megh24898@gmail.com',
      link: 'mailto:megh24898@gmail.com'
    },
    {
      icon: 'bi bi-geo-alt',
      title: 'Location',
      value: 'Bengaluru, India',
      link: null
    },
    {
      icon: 'bi bi-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/megh-buch',
      link: 'https://linkedin.com/in/megh-buch'
    },
  ];

  return (
    <section id="contact" className="py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold mb-3">Get In Touch</h2>
              <p className="lead text-muted">
                Let's work together on your next project
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h4 className="fw-bold mb-4 text-center">Contact Info</h4>
                    <div className="contact-info">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="mb-4 text-center">
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <i className={`${info.icon} fs-4 text-primary me-3`}></i>
                            <h6 className="fw-bold mb-0">{info.title}</h6>
                          </div>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-muted text-decoration-none fs-5"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted mb-0 fs-5">{info.value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
} 