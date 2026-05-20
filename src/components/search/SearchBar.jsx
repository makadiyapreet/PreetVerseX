import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { projects, certifications, experience, skills } from '../../portfolio'
import './SearchBar.css'

// Build search index once
const buildIndex = () => {
  const items = []

  projects.forEach(p => items.push({
    type: 'Project', label: p.name,
    desc: p.desc?.slice(0, 80), path: `/projects/${p.id}`
  }))

  if (certifications.certifications) {
    certifications.certifications.forEach(c => items.push({
      type: 'Certificate', label: c.title,
      desc: c.subtitle, path: '/education'
    }))
  }

  if (skills.data) {
    skills.data.forEach(s => items.push({
      type: 'Skill', label: s.title,
      desc: s.softwareSkills?.map(ss => ss.skillName).join(', '), path: '/'
    }))
  }

  if (experience.sections) {
    experience.sections.forEach(sec => {
      if (sec.experiences) {
        sec.experiences.forEach(w => items.push({
          type: 'Experience', label: `${w.title} @ ${w.company}`,
          desc: w.duration, path: '/experience'
        }))
      }
    })
  }

  return items
}

const INDEX = buildIndex()

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const inputRef = useRef()
  const history = useHistory()

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (!query.trim()) { setResults([]); return }
    const q = query.toLowerCase()
    const matches = INDEX.filter(item =>
      item.label.toLowerCase().includes(q) ||
      (item.desc && item.desc.toLowerCase().includes(q))
    ).slice(0, 8)
    setResults(matches)
  }, [query])

  const handleSelect = (item) => {
    history.push(item.path)
    onClose()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
  }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-row">
          <span className="search-icon" aria-hidden="true">{'\u2315'}</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, certs, skills..."
            className="search-input"
            aria-label="Search"
          />
          <button className="search-close" onClick={onClose} aria-label="Close search">
            {'\u2715'}
          </button>
        </div>

        {results.length > 0 && (
          <ul className="search-results">
            {results.map((item, i) => (
              <li key={i} className="search-result-item" onClick={() => handleSelect(item)}>
                <span className={'result-type type-' + item.type.toLowerCase()}>
                  {item.type}
                </span>
                <div>
                  <div className="result-label">{item.label}</div>
                  {item.desc && <div className="result-desc">{item.desc}</div>}
                </div>
              </li>
            ))}
          </ul>
        )}

        {query && results.length === 0 && (
          <div className="search-empty">No results for "{query}"</div>
        )}

        <div className="search-hint">
          <kbd>ESC</kbd> to close &middot; <kbd>{navigator.platform?.includes('Mac') ? '⌘' : 'Ctrl'}</kbd> + <kbd>K</kbd> to search
        </div>
      </div>
    </div>
  )
}
