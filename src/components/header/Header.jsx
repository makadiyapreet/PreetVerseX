import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import SearchBar from '../search/SearchBar'
import './Header.css'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const isCyber = theme === 'cyber'

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Education', path: '/education' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact Me', path: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  // Keyboard shortcut: Cmd/Ctrl+K
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <header className={'header' + (scrolled ? ' scrolled' : '') + (isCyber ? ' cyber' : '')}>
      <div className="header-inner">
        {/* Logo */}
        <Link to="/home" className="header-logo" data-cursor>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Preet Makadiya</span>
          <span className="logo-bracket"> /&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav">
          {navLinks.map(function(item) {
            return (
              <Link
                key={item.path}
                to={item.path}
                className={'nav-link' + (location.pathname === item.path ? ' active' : '')}
                data-cursor
              >
                {item.label}
              </Link>
            )
          })}

          {/* CYBER MODE BUTTON */}
          <Link
            to="/cyber"
            className={'nav-cyber-btn' + (location.pathname.startsWith('/cyber') ? ' active' : '')}
            data-cursor
          >
            <span className="cyber-icon">{'\u2B21'}</span>
            Cyber Mode
          </Link>

          {/* Search Trigger */}
          <button
            onClick={() => setSearchOpen(true)}
            className="search-trigger"
            aria-label="Search"
            data-cursor
            title="Search (Ctrl+K)"
          >
            {'\u2315'}
          </button>

          {/* Dark/Light Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            data-cursor
            title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          >
            {theme === 'dark' ? '\u2600' : '\u25D1'}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={'hamburger' + (menuOpen ? ' open' : '')}
          onClick={() => setMenuOpen(function(p) { return !p })}
          aria-label="Open navigation menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={'mobile-menu' + (menuOpen ? ' open' : '')}>
        {navLinks.map(function(item) {
          return (
            <Link key={item.path} to={item.path} className={'mobile-link' + (location.pathname === item.path ? ' active' : '')}>
              {item.label}
            </Link>
          )
        })}
        <Link to="/cyber" className="mobile-link cyber">{'\u2B21'} Cyber Mode</Link>
        <button
          className="mobile-link"
          onClick={function() { setMenuOpen(false); setSearchOpen(true); }}
          style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', cursor: 'pointer', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '1rem' }}
        >
          {'\u2315'} Search
        </button>
        <button className="theme-toggle mobile" onClick={toggleTheme} aria-label="Toggle dark mode">
          {theme === 'dark' ? '\u2600 Light Mode' : '\u25D1 Dark Mode'}
        </button>
      </div>

      {/* Search Overlay */}
      {searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}
    </header>
  )
}
