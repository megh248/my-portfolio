import React, { useEffect, useState, useCallback } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const SOCIAL_LINKS = [
  {
    icon: 'bi-linkedin',
    href: 'https://linkedin.com/in/megh-buch',
    label: 'LinkedIn',
  },
  {
    icon: 'bi-envelope-fill',
    href: 'mailto:megh24898@gmail.com',
    label: 'Email',
  },
];

export default function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [expanded, setExpanded] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    setScrolled(scrollTop > 24);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    );

    if (!sectionElements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.15, 0.4, 0.7] }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = expanded ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [expanded]);

  const closeMenu = () => setExpanded(false);

  const handleNavClick = (id) => {
    setActiveSection(id);
    closeMenu();
  };

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`site-navbar ${scrolled ? 'site-navbar--scrolled' : ''}`}
    >
      <motion.div
        className="navbar-scroll-progress"
        style={{ scaleX: scrollProgress / 100 }}
        aria-hidden="true"
      />

      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        sticky="top"
        className={`site-navbar-inner ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      >
        <Container className="navbar-container">
          <Navbar.Brand href="#home" className="navbar-brand-custom" onClick={closeMenu}>
            <motion.span
              className="brand-avatar"
              whileHover={{ scale: 1.08, rotate: 4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 16 }}
            >
              MB
            </motion.span>
            <span className="brand-text">
              <span className="brand-name">Megh Buch</span>
              <span className="brand-role">Frontend Engineer</span>
            </span>
          </Navbar.Brand>

          <div className="navbar-actions d-none d-lg-flex align-items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="navbar-icon-btn"
                aria-label={link.label}
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <i className={`bi ${link.icon}`} />
              </motion.a>
            ))}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button href="#contact" className="navbar-cta-btn" onClick={closeMenu}>
                Let&apos;s Talk
                <i className="bi bi-arrow-right-short ms-1" />
              </Button>
            </motion.div>
          </div>

          <Navbar.Toggle
            aria-controls="portfolio-navbar"
            className="navbar-toggle-custom border-0 shadow-none"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
          >
            <span className={`navbar-hamburger ${expanded ? 'is-open' : ''}`}>
              <span />
              <span />
              <span />
            </span>
          </Navbar.Toggle>

          <Navbar.Collapse id="portfolio-navbar" className="navbar-collapse-custom">
            <div className="navbar-mobile-panel w-100">
              <Nav className="ms-lg-auto align-items-lg-center navbar-nav-custom">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      className="nav-item-wrap"
                      initial={{ opacity: 0, y: expanded ? 10 : 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: expanded ? index * 0.06 : 0,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Nav.Link
                        href={item.href}
                        className={`nav-pill-link ${isActive ? 'is-active' : ''}`}
                        onClick={() => handleNavClick(item.id)}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="navbar-active-pill"
                            className="nav-pill-highlight"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span className="nav-pill-label">{item.label}</span>
                      </Nav.Link>
                    </motion.div>
                  );
                })}
              </Nav>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    className="navbar-mobile-footer d-lg-none"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="d-flex justify-content-center gap-2 mb-3">
                      {SOCIAL_LINKS.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="navbar-icon-btn navbar-icon-btn--lg"
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          aria-label={link.label}
                          onClick={closeMenu}
                        >
                          <i className={`bi ${link.icon}`} />
                        </a>
                      ))}
                    </div>
                    <Button
                      href="#contact"
                      className="navbar-cta-btn w-100"
                      onClick={closeMenu}
                    >
                      Let&apos;s Talk
                      <i className="bi bi-arrow-right-short ms-1" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.header>
  );
}
