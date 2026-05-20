import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getImage } from '../../assets/imageMap'
import './ExperienceAccordion.css'

function ExperienceEntry({ exp, index }) {
  return (
    <motion.div
      className="exp-entry"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
    >
      <div className="exp-dot">
        <img
          src={getImage(exp.logo_path)}
          alt={exp.company}
          className="exp-logo"
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>
      <div className="exp-card">
        <div className="exp-card-header">
          <div>
            <h4 className="exp-role">{exp.title}</h4>
            <p className="exp-org">{exp.company}</p>
          </div>
          <div className="exp-meta">
            <span className="exp-duration">{exp.duration}</span>
            <span className="exp-location">{exp.location}</span>
          </div>
        </div>
        <p className="exp-desc">{exp.description}</p>
        {exp.company_url && (
          <a
            href={exp.company_url}
            target="_blank"
            rel="noopener noreferrer"
            className="exp-link"
            data-cursor
          >
            Visit →
          </a>
        )}
      </div>
    </motion.div>
  )
}

function AccordionPanel({ title, experiences, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="accord-panel">
      <button
        className={`accord-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
        data-cursor
      >
        <span className="accord-title">{title}</span>
        <span className="accord-count">{experiences.length}</span>
        <span className={`accord-icon ${isOpen ? 'open' : ''}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="accord-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="exp-timeline">
              <div className="exp-timeline-line" />
              {experiences.map((exp, i) => (
                <ExperienceEntry key={i} exp={exp} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ExperienceAccordion({ sections }) {
  return (
    <div className="experience-accord">
      {sections.map((section, i) => (
        <AccordionPanel
          key={section.title}
          title={section.title}
          experiences={section.experiences}
          defaultOpen={i === 0}
        />
      ))}
    </div>
  )
}
