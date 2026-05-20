import React from 'react'
import { Link } from 'react-router-dom'
import { socialMediaLinks, availability } from '../../portfolio'
import './Footer.css'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Education', path: '/education' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
  { label: 'Resume', path: '/resume' },
]

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-grid">
        {/* Column 1 — Brand */}
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-bracket">&lt;</span>
            <span className="footer-logo-name">Preet Makadiya</span>
            <span className="footer-logo-bracket"> /&gt;</span>
          </Link>
          <p className="footer-tagline">
            Building secure &amp; scalable digital systems.
          </p>
          <div className="footer-social">
            {socialMediaLinks.map((media, i) => (
              <a
                key={i}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label={media.name}
              >
                <i className={'fab ' + media.fontAwesomeIcon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="footer-col footer-links">
          <h4 className="footer-col-title">Quick Links</h4>
          {quickLinks.map(({ label, path }) => (
            <Link key={path} to={path} className="footer-link">
              {label}
            </Link>
          ))}
          <Link to="/cyber" className="footer-link footer-cyber-link">
            {'\u2B21'} Cyber Mode
          </Link>
        </div>

        {/* Column 3 — Contact */}
        <div className="footer-col footer-contact">
          <h4 className="footer-col-title">Contact</h4>
          <div className="footer-contact-item">
            <span className="footer-contact-icon" role="img" aria-label="email">{'\u{1F4E7}'}</span>
            <a href="mailto:makadiyapreeta1@gmail.com">makadiyapreeta1@gmail.com</a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon" role="img" aria-label="phone">{'\u{1F4F1}'}</span>
            <span>+91 81602 38745</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon" role="img" aria-label="location">{'\u{1F4CD}'}</span>
            <span>Rajkot, Gujarat, India</span>
          </div>
          {availability && (
            <div className="footer-availability">
              <span className={'footer-avail-dot' + (availability.isAvailable ? ' available' : '')} />
              <span>{availability.status}</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <span className="footer-bottom-left">
          Made with <span role="img" aria-label="heart">{' \u2764\uFE0F'}</span> by Preet Makadiya
        </span>
        <span className="footer-bottom-right">
          {'\u00A9'} {new Date().getFullYear()} PreetVerseX. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
