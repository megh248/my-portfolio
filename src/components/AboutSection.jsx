import React from 'react';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 95 },
    { name: 'Bootstrap', level: 95 },
    { name: 'SCSS/SASS', level: 95 },
    { name: 'Next.js', level: 75 },
    { name: 'Flutter', level: 80}
  ];

  const experiences = [
    {
      title: "I.T. Analyst",
      company: 'Tata Consultancy Services',
      period: 'May 2025 - Present',
      description: 'Projects to be allocated to me.'
    },
    {
      title: 'Software Engineer',
      company: 'Trinarybits Technologies Pvt. Ltd.',
      period: 'July 2020 - April 2025',
      description: 'Developed responsive web applications using React and modern CSS frameworks.'
    },
    {
      title: 'Project Intern',
      company: 'Serpent Consulting Services Pvt. Ltd.',
      period: 'May 2016 - April 2017',
      description: 'Built user interfaces and implemented frontend features for various client projects.'
    }
  ];

  return (
    <section id="about" className="py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold mb-3">About Me</h2>
              <p className="lead text-muted">
                Passionate frontend developer with a keen eye for design and user experience
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 border shadow-sm">
                  <Card.Body className="p-4">
                    <h4 className="fw-bold mb-3">My Story</h4>
                    <p className="text-muted">
                      I am a results-driven IT professional with a strong background in frontend development, specializing in building responsive and visually appealing web applications. With a proven track record of delivering high-quality solutions in fast-paced environments, I excel at collaborating with cross-functional teams to achieve project goals and enhance user experiences.
                    </p>
                    <p className="text-muted">
                      I'm a dedicated frontend developer with a passion for creating beautiful,
                      functional, and user-friendly web applications. With expertise in modern
                      web technologies like React, JavaScript, and CSS frameworks, I focus on
                      delivering exceptional user experiences through clean, maintainable code.
                    </p>
                    <p className="text-muted">
                      Outside of work, I am passionate about sports, dance, reading, and travelling. I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 border shadow-sm">
                  <Card.Body className="p-4">
                    <h4 className="fw-bold mb-3">Skills</h4>
                    {skills.map((skill, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-medium">{skill.name}</span>
                          <span className="text-muted">{skill.level}%</span>
                        </div>
                        <ProgressBar
                          now={skill.level}
                          className="progress-sm"
                          style={{ height: '8px' }}
                        />
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="fw-bold mb-4 text-center">Experience</h4>
                <Row className="g-4">
                  {experiences.map((exp, index) => (
                    <Col md={6} key={index}>
                      <Card className="border shadow-sm h-100">
                        <Card.Body className="p-4">
                          <h6 className="fw-bold text-primary">{exp.title}</h6>
                          <p className="text-muted mb-2">{exp.company}</p>
                          <small className="text-muted">{exp.period}</small>
                          <p className="mt-3 mb-0">{exp.description}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
} 