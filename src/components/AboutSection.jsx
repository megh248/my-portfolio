import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { staggerContainer, fadeUp, scaleIn } from '../utils/motion';

const skillGroups = [
  {
    label: 'Frontend',
    icon: 'bi-code-slash',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    label: 'State & Data',
    icon: 'bi-database',
    skills: ['Redux', 'TanStack Query', 'React Context', 'REST APIs', 'WebSockets'],
  },
  {
    label: 'Architecture',
    icon: 'bi-diagram-3',
    skills: [
      'SPA Design',
      'Component Systems',
      'Micro-frontend Patterns',
      'Performance Optimization',
    ],
  },
  {
    label: 'Data Visualization',
    icon: 'bi-bar-chart-line',
    skills: ['D3.js', 'Recharts', 'Chart.js'],
  },
  {
    label: 'Testing',
    icon: 'bi-bug',
    skills: ['Jest', 'React Testing Library', 'Jasmine'],
  },
  {
    label: 'Styling & Tooling',
    icon: 'bi-palette',
    skills: ['TailwindCSS', 'SCSS', 'React Bootstrap', 'PrimeReact', 'Git', 'Vite', 'Figma'],
  },
];

const experiences = [
  {
    title: 'I.T. Analyst',
    company: 'Tata Consultancy Services',
    client: 'Apple Inc.',
    period: 'May 2025 – Present',
    icon: 'bi-building',
    highlights: [
      'Improved UI rendering performance by 50%+ through React memoization, optimized state handling, and reusable component patterns.',
      'Reduced dashboard load time from 3.5s to ~1s using lazy loading, code splitting, and TanStack Query caching.',
      'Shipped personalization, advanced filtering, comparison workflows, and dynamic configuration with zero regressions across releases.',
      'Designed configuration-driven architecture for multi-context Device × Tariff experiences, reducing rendering complexity by ~30%.',
    ],
  },
  {
    title: 'Software Developer (Frontend)',
    company: 'Trinary Bits Technologies Pvt. Ltd.',
    period: 'July 2020 – April 2025',
    icon: 'bi-laptop',
    highlights: [
      'Built and owned 4 production React SPAs from architecture through deployment and production delivery.',
      'Developed a real-time operational dashboard with D3.js and WebSockets supporting 500+ concurrent live data points at 60fps.',
      'Improved Lighthouse performance by 35% through virtualization, memoization, and efficient state updates.',
      'Reduced cross-project duplication by ~45% with a shared component library and standardized frontend patterns.',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Engineering — Computer Engineering',
    school: 'SVBIT (GTU), Gandhinagar',
    period: '2017 – 2020',
    icon: 'bi-mortarboard',
  },
  {
    degree: 'Diploma — Computer Engineering',
    school: 'Government Polytechnic (GTU), Gandhinagar',
    period: '2014 – 2017',
    icon: 'bi-journal-bookmark',
  },
];

const highlightStats = [
  { icon: 'bi-lightning-charge', value: '50%+', label: 'Performance gains' },
  { icon: 'bi-speedometer2', value: '3.5s→1s', label: 'Load time reduced' },
  { icon: 'bi-grid-3x3-gap', value: '4', label: 'Production SPAs' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-about">
      <div className="section-bg-decor" aria-hidden="true" />
      <Container className="position-relative">
        <SectionHeader
          badge="About Me"
          title="Building Interfaces That Scale"
          subtitle="Senior Frontend Engineer focused on scalable React applications, performance, and enterprise dashboards"
        />

        <motion.div
          className="about-stats-row row g-3 mb-5 justify-content-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {highlightStats.map((stat) => (
            <Col xs={6} md={4} lg={3} key={stat.label}>
              <motion.div variants={scaleIn} className="about-stat-card">
                <i className={`bi ${stat.icon} about-stat-icon`} />
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </motion.div>
            </Col>
          ))}
        </motion.div>

        <Row className="g-4 align-items-stretch">
          <Col lg={6} className="d-flex">
            <motion.div
              className="d-flex flex-fill w-100"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <Card className="section-card flex-fill w-100">
                <Card.Body className="p-4">
                  <div className="section-card-icon-wrap">
                    <i className="bi bi-person-badge" />
                  </div>
                  <h4 className="section-card-title fw-bold mb-3">Professional Summary</h4>
                  <p className="text-muted">
                    Frontend Engineer with 5+ years of experience building scalable React and
                    TypeScript applications across enterprise platforms, data-heavy dashboards,
                    and real-time interfaces. Specialized in performance optimization, frontend
                    architecture, component systems, and data visualization.
                  </p>
                  <p className="text-muted">
                    Track record of improving UI performance (50%+ rendering gains, 3.5s → 1s load
                    reduction), designing reusable frontend systems, and shipping high-impact
                    features in cross-functional environments spanning Product, UX, Backend, and
                    Infrastructure teams.
                  </p>
                  <p className="text-muted">
                    Currently supporting Apple enterprise platforms at Tata Consultancy Services,
                    building configuration-driven experiences, advanced filtering workflows, and
                    resilient UI patterns for distributed systems. Previously at Trinary Bits, I
                    owned end-to-end delivery of production React SPAs—including real-time
                    dashboards with D3.js and WebSockets—and introduced shared component standards
                    that cut duplication across projects by ~45%.
                  </p>
                  <p className="text-muted mb-3">
                    I care deeply about clean architecture, measurable performance wins, and
                    interfaces that stay fast and maintainable as products scale. Whether
                    optimizing render paths, shaping API contracts with backend partners, or
                    mentoring teammates through documentation and code reviews, I aim to leave
                    systems better than I found them.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col lg={6} className="d-flex">
            <motion.div
              className="d-flex flex-fill w-100"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1 }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <Card className="section-card flex-fill w-100">
                <Card.Body className="p-4">
                  <div className="section-card-icon-wrap">
                    <i className="bi bi-stars" />
                  </div>
                  <h4 className="section-card-title fw-bold mb-3">Core Skills</h4>
                  {skillGroups.map((group, groupIndex) => (
                    <motion.div
                      key={group.label}
                      className="mb-3"
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: groupIndex * 0.06, duration: 0.45 }}
                      viewport={{ once: true }}
                    >
                      <h6 className="skill-group-label mb-2">
                        <i className={`bi ${group.icon} me-2`} />
                        {group.label}
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            className="skill-pill"
                            whileHover={{ scale: 1.06, y: -2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="section-block-title text-center mb-4">
            <i className="bi bi-briefcase me-2" />
            Experience
          </h4>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="experience-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <Card className="section-card experience-card h-100">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start gap-3">
                      <div className="experience-icon">
                        <i className={`bi ${exp.icon}`} />
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                          <div>
                            <h6 className="fw-bold mb-1 experience-title">{exp.title}</h6>
                            <p className="text-muted mb-0 fw-semibold">{exp.company}</p>
                            {exp.client && (
                              <p className="text-muted mb-0 small">
                                <i className="bi bi-apple me-1" />
                                Client: {exp.client}
                              </p>
                            )}
                          </div>
                          <span className="experience-period">{exp.period}</span>
                        </div>
                        <ul className="experience-list mb-0 ps-0">
                          {exp.highlights.map((item) => (
                            <li key={item} className="text-muted">
                              <i className="bi bi-check-circle-fill me-2 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="section-block-title text-center mb-4">
            <i className="bi bi-mortarboard me-2" />
            Education
          </h4>
          <Row className="g-4 justify-content-center">
            {education.map((item, index) => (
              <Col md={6} key={item.degree}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Card className="section-card education-card h-100 text-center">
                    <Card.Body className="p-4">
                      <div className="education-icon mx-auto mb-3">
                        <i className={`bi ${item.icon}`} />
                      </div>
                      <h6 className="fw-bold">{item.degree}</h6>
                      <p className="text-muted mb-1">{item.school}</p>
                      <span className="experience-period">{item.period}</span>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}
