import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const PROJECT_ICONS = {
  'Interactive Data Dashboard': 'bi-graph-up-arrow',
  'Personal Portfolio Website': 'bi-window-desktop',
  'Broker Accounting System Portal': 'bi-bank',
  'Sales & Invoice Management': 'bi-receipt',
  'Business Evaluation & Guidance System': 'bi-clipboard-data',
  'Internal Application Tool': 'bi-tools',
};

export default function ProjectCard({ project }) {
  const icon = PROJECT_ICONS[project.title] || 'bi-folder2-open';

  return (
    <motion.article
      className="project-card-wrapper"
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    >
      <Card className="project-card-enhanced">
        <div className="project-card-accent" aria-hidden="true" />
        {project.featured && (
          <span className="project-featured-badge">
            <i className="bi bi-star-fill me-1" />
            Featured
          </span>
        )}
        <Card.Body className="project-card-body d-flex flex-column p-4 pt-4">
          <div className="project-card-icon mb-3">
            <i className={`bi ${icon}`} />
          </div>
          <Card.Title className="fw-bold mb-2 project-card-title">{project.title}</Card.Title>
          <Card.Text className="text-muted project-card-desc">{project.description}</Card.Text>

          <div className="project-card-tags d-flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </Card.Body>
      </Card>
    </motion.article>
  );
}
