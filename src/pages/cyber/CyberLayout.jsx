import React, { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import CyberNav from './CyberNav'
import './Cyber.css'

export default function CyberLayout({ children }) {
  const { setCyberMode, setNormalMode } = useTheme()
  const [flash, setFlash] = useState(true)

  useEffect(() => {
    setCyberMode()
    const prevTitle = document.title
    document.title = '⬡ CYBER MODE | Preet Makadiya'
    const timer = setTimeout(() => {
      setFlash(false)
    }, 1800)
    return () => {
      clearTimeout(timer)
      document.title = prevTitle
      setNormalMode()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="cyber-layout">
      {/* Cyber flash overlay */}
      {flash && (
        <div className="cyber-flash-overlay">
          <div className="cyber-flash-content">
            <div className="cyber-flash-icon">{'\u26A0'}</div>
            <div className="cyber-flash-text">ENTERING SECURE MODE</div>
            <div className="cyber-flash-bar">
              <div className="cyber-flash-bar-fill" />
            </div>
          </div>
        </div>
      )}
      <div className="cyber-grid-bg" aria-hidden="true" />
      <div className="cyber-scanline" aria-hidden="true" />
      <div className="cyber-particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="cyber-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      <CyberNav />
      <main className="cyber-main">{children}</main>

      {/* Cyber Footer */}
      <footer className="cyber-footer">
        <div className="cyber-footer-inner">
          <div className="cyber-footer-grid">
            {/* Brand */}
            <div className="cyber-footer-col">
              <div className="cyber-footer-logo">
                <span className="cyber-hex">{'\u2B21'}</span>
                <span className="cyber-footer-logo-text">CYBER MODE</span>
              </div>
              <p className="cyber-footer-tagline">
                Offensive security · Digital forensics · Threat intelligence
              </p>
              <div className="cyber-footer-status">
                <span className="cyber-footer-status-dot" />
                <span>SYSTEM OPERATIONAL</span>
              </div>
            </div>

            {/* Quick Nav */}
            <div className="cyber-footer-col">
              <h4 className="cyber-footer-col-title">{'// NAVIGATION'}</h4>
              <a href="/cyber" className="cyber-footer-link">Dashboard</a>
              <a href="/cyber/about" className="cyber-footer-link">About</a>
              <a href="/cyber/skills" className="cyber-footer-link">Skills</a>
              <a href="/cyber/projects" className="cyber-footer-link">Projects</a>
              <a href="/cyber/lab" className="cyber-footer-link">Cyber Lab</a>
            </div>

            {/* Exit */}
            <div className="cyber-footer-col">
              <h4 className="cyber-footer-col-title">{'// EXTERNAL'}</h4>
              <a href="/home" className="cyber-footer-link">← Portfolio Mode</a>
              <a href="https://github.com/makadiyapreet" target="_blank" rel="noopener noreferrer" className="cyber-footer-link">GitHub</a>
              <a href="https://www.linkedin.com/in/preet-makadiya-13102004-p/" target="_blank" rel="noopener noreferrer" className="cyber-footer-link">LinkedIn</a>
            </div>
          </div>

          <div className="cyber-footer-bottom">
            <span className="cyber-footer-copy">
              {'\u00A9'} {new Date().getFullYear()} PREET MAKADIYA · ALL RIGHTS RESERVED
            </span>
            <span className="cyber-footer-sig">
              <span className="cyber-footer-sig-dot" /> SECURE CONNECTION · TLS 1.3
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
