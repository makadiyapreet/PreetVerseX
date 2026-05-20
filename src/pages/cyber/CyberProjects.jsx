import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../portfolio'
import './CyberProjects.css'

const extraCyberProjects = []

export default function CyberProjects() {
  // Filter cyber projects from portfolio + add extras
  const portfolioCyber = projects.filter(p => p.cyberProject)
  const coastalProject = projects.find(p => p.id === 'coastal-threat')
  const allCyber = [
    ...portfolioCyber.map(p => ({
      ...p,
      severity: p.id === 'sentinelai' ? 'CRITICAL' : 'HIGH',
      category: p.category,
    })),
    // Add coastal-threat only if it exists
    ...(coastalProject ? [{
      ...coastalProject,
      severity: 'CRITICAL',
      category: 'Threat Intelligence',
    }] : []),
    ...extraCyberProjects,
  ]

  return (
    <div className="cyberprojects">
      <div className="cyberprojects-inner">
        <h3 className="cyber-section-title">SECURITY OPERATIONS — PROJECT REPORTS</h3>

        <div className="cyberp-grid">
          {allCyber.map((proj, i) => (
            <motion.div
              key={proj.id}
              className="cyberp-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="cyberp-card-top">
                <span className={`severity-badge severity-${proj.severity}`}>
                  [{proj.severity}]
                </span>
                <span className="cyberp-type">{proj.category}</span>
              </div>

              <h4 className="cyberp-name">{proj.name}</h4>
              <p className="cyberp-desc">{proj.desc}</p>

              <div className="cyberp-tools">
                <span className="cyberp-tools-label">TOOLS:</span>
                {(proj.tags || []).map(t => (
                  <span key={t} className="cyberp-tool">{t}</span>
                ))}
              </div>

              <div className="cyberp-actions">
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer"
                    className="cyberp-btn" data-cursor>
                    GitHub
                  </a>
                )}
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer"
                    className="cyberp-btn green" data-cursor>
                    Live Demo
                  </a>
                )}
                <span className="cyberp-btn report">View Report</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
