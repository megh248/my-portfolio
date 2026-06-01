import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const technologies = [...new Set(projects.flatMap((project) => project.technologies))];

  const allFilters = [
    ...FILTERS,
    ...technologies.map((tech) => ({ id: tech, label: tech })),
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : filter === 'featured'
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.technologies.includes(filter));

  return (
    <section id="projects" className="section-projects">
      <div className="section-bg-decor section-bg-decor--alt" aria-hidden="true" />
      <Container className="position-relative">
        <SectionHeader
          badge="Portfolio"
          title="Projects & Production Work"
          subtitle="Applications and dashboards spanning real-time data, enterprise UI, and React architecture"
        />

        <motion.div
          className="project-filters d-flex flex-wrap justify-content-center gap-2 mb-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {allFilters.map((item) => {
            const isActive = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`project-filter-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setFilter(item.id)}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="project-filter-highlight"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="project-filter-label">{item.label}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.p
          className="text-center text-muted mb-4 project-count"
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Showing <strong>{filteredProjects.length}</strong> project
          {filteredProjects.length !== 1 ? 's' : ''}
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {filteredProjects.length > 0 ? (
              <Row className="g-4 align-items-stretch project-cards-row">
                {filteredProjects.map((project, index) => (
                  <Col lg={4} md={6} key={project.id} className="d-flex">
                    <motion.div
                      className="d-flex flex-fill w-100"
                      initial={{ opacity: 0, y: 28, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  </Col>
                ))}
              </Row>
            ) : (
              <motion.div
                className="empty-state text-center py-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <i className="bi bi-search empty-state-icon" />
                <p className="text-muted mt-3 mb-4">No projects match this filter.</p>
                <Button className="navbar-cta-btn" onClick={() => setFilter('all')}>
                  Show All Projects
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
