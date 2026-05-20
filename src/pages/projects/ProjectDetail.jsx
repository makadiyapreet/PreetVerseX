import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import TopButton from '../../components/topButton/TopButton'
import ProjectReactions from '../../components/reactions/ProjectReactions'
import { projects } from '../../portfolio.js'
import './ProjectDetail.css'

export default function ProjectDetail({ theme }) {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="projd-main">
        <Header />
        <div className="projd-not-found">
          <h1>Project Not Found</h1>
          <Link to="/projects" className="projd-back" data-cursor>{'\u2190'} Back to Projects</Link>
        </div>
      </div>
    )
  }

  // Get 3 random other projects
  const otherProjects = projects
    .filter(p => p.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)

  return (
    <div className="projd-main">
      <Header />

      <div className="projd-content">
        {/* Back Button */}
        <Link to="/projects" className="projd-back" data-cursor>{'\u2190'} Projects</Link>

        {/* Hero */}
        <motion.div
          className="projd-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="projd-meta-row">
            <span className="projd-category">{project.category}</span>
            <span className="projd-date">{project.date}</span>
            {project.featured && <span className="projd-featured">{'\u2605'} Featured</span>}
          </div>
          <h1 className="projd-title">{project.name}</h1>
          <p className="projd-desc">{project.longDesc || project.desc}</p>

          {/* Tech Stack */}
          <div className="projd-stack">
            <h3 className="projd-stack-title">Tech Stack</h3>
            <div className="projd-tags">
              {project.tags.map(tag => (
                <span key={tag} className="projd-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="projd-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-cursor
              >
                View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                data-cursor
              >
                Live Demo {'\u2192'}
              </a>
            )}
          </div>

          {/* Reactions */}
          <ProjectReactions projectId={project.id} />
        </motion.div>

        {/* Other Projects */}
        <div className="projd-others">
          <h2 className="projd-others-title">Other Projects</h2>
          <div className="projd-others-grid">
            {otherProjects.map(p => (
              <Link key={p.id} to={`/projects/${p.id}`} className="projd-other-card" data-cursor>
                <span className="projd-other-cat">{p.category}</span>
                <h4 className="projd-other-name">{p.name}</h4>
                <p className="projd-other-desc">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer theme={theme} />
      <TopButton />
    </div>
  )
}
