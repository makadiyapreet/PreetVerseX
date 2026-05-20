import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'DASHBOARD', path: '/cyber', icon: '◈' },
  { label: 'ABOUT', path: '/cyber/about', icon: '◉' },
  { label: 'SKILLS', path: '/cyber/skills', icon: '◆' },
  { label: 'PROJECTS', path: '/cyber/projects', icon: '▣' },
  { label: 'LAB', path: '/cyber/lab', icon: '⚗' },
  { label: 'TERMINAL', path: '/cyber/terminal', icon: '▶' },
]

export default function CyberNav() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location])

  return (
    <nav className="cyber-nav">
      <div className="cyber-nav-inner">
        {/* Logo */}
        <Link to="/cyber" className="cyber-nav-logo" data-cursor>
          <span className="cyber-hex">⬡</span>
          <span className="cyber-logo-text">CYBER MODE</span>
        </Link>

        {/* Desktop Links */}
        <div className="cyber-nav-links">
          {navLinks.map(({ label, path, icon }) => (
            <Link
              key={path}
              to={path}
              className={`cyber-link ${location.pathname === path ? 'active' : ''}`}
              data-cursor
            >
              {location.pathname === path && <span className="cyber-link-dot" />}
              <span className="cyber-link-icon">{icon}</span>
              {label}
            </Link>
          ))}
        </div>

        {/* Back Button (desktop) */}
        <Link to="/home" className="cyber-back-btn" data-cursor>
          ← PORTFOLIO
        </Link>

        {/* Mobile Hamburger */}
        <button
          className={`cyber-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`cyber-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ label, path, icon }) => (
          <Link
            key={path}
            to={path}
            className={`cyber-mobile-link ${location.pathname === path ? 'active' : ''}`}
          >
            <span className="cyber-mobile-link-icon">{icon}</span>
            {label}
            {location.pathname === path && <span className="cyber-mobile-active-bar" />}
          </Link>
        ))}
        <div className="cyber-mobile-divider" />
        <Link to="/home" className="cyber-mobile-link back">
          ← RETURN TO PORTFOLIO
        </Link>
      </div>
    </nav>
  )
}
