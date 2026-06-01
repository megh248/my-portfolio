import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';

const roles = [
  'Senior Frontend Engineer',
  'React & TypeScript Specialist',
  'Performance & Dashboard Expert',
];

const techTags = [
  'React',
  'TypeScript',
  'TanStack Query',
  'D3.js',
  'Next.js',
  'WebSockets',
];

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '%+', label: 'UI Performance Gains' },
  { value: 4, suffix: '', label: 'Production React SPAs' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatingOrbs = [
  { size: 320, top: '8%', left: '6%', delay: 0 },
  { size: 220, top: '62%', left: '78%', delay: 1.2 },
  { size: 160, top: '72%', left: '12%', delay: 0.6 },
  { size: 120, top: '18%', left: '82%', delay: 1.8 },
];

function AnimatedCounter({ value, suffix = '' }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.8,
      ease: 'easeOut',
      delay: 0.9,
    });
    return controls.stop;
  }, [count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => setDisplay(latest));
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-gradient" aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />

      {floatingOrbs.map((orb, index) => (
        <motion.div
          key={index}
          className="hero-orb"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
          }}
          animate={{
            y: [0, -24, 0],
            x: [0, index % 2 === 0 ? 14 : -14, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 7 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      <Container className="hero-content position-relative">
        <Row className="align-items-center g-5">
          <Col lg={7} className="text-center text-lg-start">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={itemVariants} className="hero-badge">
                Available for opportunities
              </motion.span>

              <motion.h1 variants={itemVariants} className="hero-title display-3 fw-bold mt-3">
                Hi, I&apos;m{' '}
                <motion.span
                  className="hero-name"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                >
                  Megh Buch
                </motion.span>
              </motion.h1>

              <motion.div variants={itemVariants} className="hero-role-wrapper mt-2">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIndex}
                    className="hero-role lead mb-0"
                    initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
                    transition={{ duration: 0.45 }}
                  >
                    {roles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              <motion.p variants={itemVariants} className="hero-subtitle mt-3 mb-4">
                Building scalable React + TypeScript apps, enterprise dashboards, and
                real-time data interfaces with a focus on performance and polished UX.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-4"
              >
                {techTags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="hero-tech-pill"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.08 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start"
              >
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button href="#projects" variant="light" size="lg" className="hero-btn-primary px-4">
                    View Projects
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    href="#contact"
                    variant="outline-light"
                    size="lg"
                    className="hero-btn-outline px-4"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    href="https://linkedin.com/in/megh-buch"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-light"
                    size="lg"
                    className="hero-btn-outline px-4"
                  >
                    LinkedIn
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="hero-stats row g-3 mt-5 justify-content-center justify-content-lg-start"
              >
                {stats.map((stat) => (
                  <Col xs={4} sm={4} key={stat.label} className="text-center text-lg-start">
                    <div className="hero-stat-value">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="hero-stat-label">{stat.label}</div>
                  </Col>
                ))}
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={5} className="d-flex justify-content-center">
            <motion.div
              className="hero-profile-wrapper"
              initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="hero-profile-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="hero-profile-glow"
                animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img
                src="/profile.png"
                alt="Megh Buch"
                className="hero-profile-img"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              />
              <motion.div
                className="hero-profile-badge"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <i className="bi bi-geo-alt-fill me-1" />
                Bangalore, India
              </motion.div>
            </motion.div>
          </Col>
        </Row>

        <motion.a
          href="#about"
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.4 },
            y: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
          }}
          aria-label="Scroll to about section"
        >
          <i className="bi bi-chevron-double-down" />
        </motion.a>
      </Container>
    </section>
  );
}
