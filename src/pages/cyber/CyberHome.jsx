import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './CyberHome.css'

const terminalLines = [
  { type: 'cmd', text: '> INITIALIZING PREET_SECURITY_PROFILE...' },
  { type: 'cmd', text: '> LOADING THREAT INTELLIGENCE DATABASE...' },
  { type: 'cmd', text: '> STATUS: ASPIRING SECURITY PROFESSIONAL' },
  { type: 'cmd', text: '> CLEARANCE: ETHICAL HACKING ENTHUSIAST' },
  { type: 'cmd', text: '> LOCATION: GANDHINAGAR, GUJARAT, INDIA' },
  { type: 'cmd', text: '> EDUCATION: B.TECH CSE @ PDEU (CGPA: 8.63)' },
  { type: 'cmd', text: '> FOCUS: WEB APP SECURITY, DFIR, VAPT' },
  { type: 'cmd', text: '> [SYSTEM READY]' },
]

const stats = [
  {
    label: 'TOOLS IN ARSENAL',
    number: '10+',
    items: ['Kali Linux', 'Burp Suite', 'Wireshark', 'Nmap', 'OWASP ZAP'],
  },
  {
    label: 'CERTIFICATIONS',
    number: '8+',
    items: ['DCSC VAPT', 'Certified Cyber Warrior', 'Oracle AI', 'Linux Foundation', 'Google Cloud'],
  },
  {
    label: 'SECURITY PROJECTS',
    number: '3',
    items: ['SentinelAI WAF', 'AEGIS Platform', 'Coastal Threat Alert'],
  },
]

function TerminalBlock() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [visitorIP, setVisitorIP] = useState(null)
  const [scanPhase, setScanPhase] = useState(0) // 0=none, 1=detecting, 2=scanning, 3=done

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timer = setTimeout(() => setVisibleLines(v => v + 1), 400)
      return () => clearTimeout(timer)
    } else if (scanPhase === 0) {
      // Start visitor scan after terminal lines finish
      setScanPhase(1)
      fetch('https://api.ipify.org?format=json')
        .then(r => r.json())
        .then(data => {
          setVisitorIP(data.ip)
          setTimeout(() => setScanPhase(2), 800)
          setTimeout(() => setScanPhase(3), 1800)
        })
        .catch(() => {
          setVisitorIP('UNKNOWN')
          setScanPhase(3)
        })
    }
  }, [visibleLines, scanPhase])

  return (
    <div className="cyber-terminal">
      <div className="cyber-terminal-bar">
        <span className="term-dot red" />
        <span className="term-dot yellow" />
        <span className="term-dot green" />
        <span className="cyber-terminal-title">preet@cybersec ~ %</span>
      </div>
      <div className="cyber-terminal-body">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className="term-line"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span className="term-prefix">$</span>
            <span className="term-cmd">{line.text}</span>
          </div>
        ))}
        {/* Visitor IP Scan */}
        {scanPhase >= 1 && (
          <div className="term-line scan-line">
            <span className="term-prefix">$</span>
            <span className="term-cmd term-warn">&gt; VISITOR DETECTED: {visitorIP || '...'} — SCANNING...</span>
          </div>
        )}
        {scanPhase >= 2 && (
          <div className="term-line scan-line">
            <span className="term-prefix">$</span>
            <span className="term-cmd term-warn">&gt; RUNNING THREAT ASSESSMENT...</span>
          </div>
        )}
        {scanPhase >= 3 && (
          <div className="term-line scan-line">
            <span className="term-prefix">$</span>
            <span className="term-cmd term-success">&gt; SCAN COMPLETE. ACCESS GRANTED. WELCOME.</span>
          </div>
        )}
        {scanPhase >= 3 && (
          <div className="term-line" style={{ animationDelay: '0.1s' }}>
            <span className="term-prefix">$</span>
            <span className="term-cmd">&gt; </span>
            <span className="term-cursor" />
          </div>
        )}
      </div>
    </div>
  )
}

function ThreatMeter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div className="threat-meter" ref={ref}>
      <h3 className="cyber-section-title">THREAT HUNTING PROFICIENCY</h3>
      <div className="threat-bar-track">
        <motion.div
          className="threat-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: '55%' } : { width: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
      <div className="threat-bar-label">
        <span>PROFICIENCY LEVEL</span>
        <span className="threat-pct">55%</span>
      </div>
    </div>
  )
}

export default function CyberHome() {
  return (
    <div className="cyber-home">
      <div className="cyber-home-inner">
        {/* Hero Header */}
        <section className="cyber-hero-header">
          <motion.div
            className="cyber-hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="cyber-hero-badge-dot" />
            CYBERSECURITY DIVISION
          </motion.div>
          <motion.h1
            className="cyber-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="cyber-glitch-text" data-text="PREET MAKADIYA">
              PREET MAKADIYA
            </span>
          </motion.h1>
          <motion.p
            className="cyber-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            ASPIRING CYBERSECURITY PROFESSIONAL · DFIR EXPLORER · FULL STACK SECURITY DEV
          </motion.p>
          <motion.div
            className="cyber-hero-status-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="cyber-hero-status active">
              <span className="cyber-status-pulse" />
              ONLINE
            </span>
            <span className="cyber-hero-status">
              {'\u26A0'} THREAT LEVEL: ELEVATED
            </span>
            <span className="cyber-hero-status">
              {'\u{1F6E1}'} SHIELDS: ACTIVE
            </span>
          </motion.div>
        </section>

        {/* Terminal Hero */}
        <section className="cyber-hero-section">
          <h3 className="cyber-section-title">SYSTEM TERMINAL</h3>
          <TerminalBlock />
        </section>

        {/* Stat Dashboard */}
        <section className="cyber-stats-section">
          <h3 className="cyber-section-title">INTELLIGENCE DASHBOARD</h3>
          <div className="cyber-stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="cyber-stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
              >
                <div className="cyber-stat-label">{stat.label}</div>
                <div className="cyber-stat-number">{stat.number}</div>
                <ul className="cyber-stat-list">
                  {stat.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Threat Meter */}
        <section className="cyber-threat-section">
          <ThreatMeter />
        </section>
      </div>
    </div>
  )
}
