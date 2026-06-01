import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ badge, title, subtitle, light = false }) {
  return (
    <motion.div
      className={`section-header text-center mb-5 ${light ? 'section-header--light' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-60px' }}
    >
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="section-title fw-bold mt-3 mb-3">{title}</h2>
      {subtitle && <p className="section-subtitle lead mb-0">{subtitle}</p>}
    </motion.div>
  );
}
