import React, { useState } from 'react'
import SeoHeader from '../../components/seoHeader/SeoHeader'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import TopButton from '../../components/topButton/TopButton'
import GithubActivity from '../../components/githubCalendar/GithubCalendar'
import ProjectReactions from '../../components/reactions/ProjectReactions'
import { projects, projectsHeader } from '../../portfolio.js'
import './Projects.css'

const categories = ['All', 'Full Stack', 'Cybersecurity', 'AI/ML', 'Mobile']
const INITIAL_COUNT = 9

function ProjectCard({ project }) {
  const viewKey = 'views_' + project.id
  const views = parseInt(localStorage.getItem(viewKey) || '0', 10)

  const trackView = () => {
    const current = parseInt(localStorage.getItem(viewKey) || '0', 10)
    localStorage.setItem(viewKey, current + 1)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="proj-card"
    >
      <Link
        to={'/projects/' + project.id}
        className="proj-card-link"
        data-cursor
        onClick={trackView}
      >
        {project.featured && <span className="proj-featured">{'\u2605'} Featured</span>}
        <div className="proj-card-top">
          <span className="proj-icon" role="img" aria-label="project">{'\u{1F5A5}'}</span>
          <h3 className="proj-name">{project.name}</h3>
        </div>
        <p className="proj-desc">{project.desc}</p>
        <div className="proj-card-bottom">
          <div className="proj-card-meta">
            <span className="proj-date">{project.date}</span>
            {views > 0 && (
              <span className="proj-views">
                <span role="img" aria-label="views">{'\u{1F441}'}</span> {views}
              </span>
            )}
          </div>
          <div className="proj-tags">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="proj-tag">{tag}</span>
            ))}
            {project.tags.length > 3 && (
              <span className="proj-tag proj-tag-more">+{project.tags.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
      <ProjectReactions projectId={project.id} />
    </motion.div>
  )
}

export default function Projects({ theme }) {
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)

  return (
    <div className="projects-main">
      <SeoHeader title="Projects" path="/projects" />
      <Header />

      {/* Clean Title */}
      <div className="projects-title-section">
        <h1 className="projects-page-title">{projectsHeader.title}</h1>
        <p className="projects-page-sub">{projectsHeader.description}</p>
      </div>

      {/* Filter Bar */}
      <div className="proj-filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`proj-filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => { setFilter(cat); setShowAll(false); }}
            data-cursor
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="proj-grid">
        <AnimatePresence>
          {displayed.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>

      {/* Load More */}
      {!showAll && filtered.length > INITIAL_COUNT && (
        <div className="proj-loadmore-wrap">
          <button
            className="proj-loadmore"
            onClick={() => setShowAll(true)}
            data-cursor
          >
            Load More ({filtered.length - INITIAL_COUNT} remaining)
          </button>
        </div>
      )}

      {/* GitHub Activity */}
      <GithubActivity />

      <Footer theme={theme} />
      <TopButton />
    </div>
  )
}
