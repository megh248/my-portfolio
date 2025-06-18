'use client';

import { useState } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.technologies.includes(filter));

  const technologies = [...new Set(projects.flatMap(project => project.technologies))];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold mb-3">My Projects</h2>
              <p className="lead text-muted">
                Here are some of the projects I've worked on recently
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col md={8}>
              <div className="d-flex justify-content-center">
                <ButtonGroup className="flex-wrap">
                  <Button
                    variant={filter === 'all' ? 'primary' : 'outline-primary'}
                    onClick={() => setFilter('all')}
                    className="mb-2"
                  >
                    All
                  </Button>
                  <Button
                    variant={filter === 'featured' ? 'primary' : 'outline-primary'}
                    onClick={() => setFilter('featured')}
                    className="mb-2"
                  >
                    Featured
                  </Button>
                  {technologies.map((tech) => (
                    <Button
                      key={tech}
                      variant={filter === tech ? 'primary' : 'outline-primary'}
                      onClick={() => setFilter(tech)}
                      className="mb-2"
                    >
                      {tech}
                    </Button>
                  ))}
                </ButtonGroup>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            {filteredProjects.map((project, index) => (
              <Col lg={4} md={6} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              </Col>
            ))}
          </Row>

          {filteredProjects.length === 0 && (
            <Row className="text-center">
              <Col>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-muted">No projects found with the selected filter.</p>
                  <Button 
                    variant="outline-primary" 
                    onClick={() => setFilter('all')}
                  >
                    Show All Projects
                  </Button>
                </motion.div>
              </Col>
            </Row>
          )}
        </motion.div>
      </Container>
    </section>
  );
} 