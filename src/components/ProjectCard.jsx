'use client';

import { Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
    >
      <Card className="h-100 project-card shadow-sm">
        <Card.Body className="d-flex flex-column p-4">
          <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
          <Card.Text className="flex-grow-1 mb-3">{project.description}</Card.Text>
          
          <div className="technologies mb-3">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                bg="secondary"
                className="me-1 mb-1"
                style={{ fontSize: '0.75rem' }}
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="mt-auto">
            {project.githubUrl && (
              <Button
                variant="outline-primary"
                size="sm"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="me-2"
              >
                GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
