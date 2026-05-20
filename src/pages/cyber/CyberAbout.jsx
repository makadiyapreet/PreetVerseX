import React, { useState, useEffect } from 'react'
import preetImg from '../../assets/images/preet.png'
import './CyberAbout.css'

const terminalBlocks = [
  { cmd: 'whoami', output: 'Preet Makadiya | Aspiring Cybersecurity Professional' },
  { cmd: 'cat education.txt', output: 'B.Tech CSE — PDEU, Gandhinagar\nCGPA: 8.63 | Batch: 2023-2027\nCoursework: Networks, OS, InfoSec, AI/ML' },
  { cmd: 'cat skills.txt', output: 'OWASP Top 10, VAPT, Threat Detection,\nIncident Response, Digital Forensics,\nWeb App Security, Network Security' },
  { cmd: 'cat certs.txt', output: 'DCSC — Web App Pentesting |\nHackingFlix — Certified Cyber Warrior |\nLinux Foundation — Cybersec Essentials |\nOracle Cloud AI Foundations |\nForage — Mastercard, AIG, Deloitte Cyber' },
  { cmd: 'cat experience.txt', output: 'Forensic Knight — Cyber Forensics Intern\n[Jun 2024 — Jan 2025] [Remote]\nDigital evidence collection, log analysis,\nmalware artifact investigation' },
  { cmd: 'echo $GOAL', output: 'Aspiring to contribute to India\'s\ncybersecurity landscape through\noffensive security and digital forensics.' },
]

export default function CyberAbout() {
  const [visibleBlocks, setVisibleBlocks] = useState(0)

  useEffect(() => {
    if (visibleBlocks < terminalBlocks.length) {
      const timer = setTimeout(() => setVisibleBlocks(v => v + 1), 700)
      return () => clearTimeout(timer)
    }
  }, [visibleBlocks])

  return (
    <div className="cyberabout">
      <div className="cyberabout-inner">
        <h2 className="cyber-section-title">OPERATIVE DOSSIER</h2>

        {/* Split: photo + terminal */}
        <div className="cyberabout-split">
          {/* Left: Photo */}
          <div className="cyberabout-photo-wrap">
            <div className="cyberabout-hex-outer">
              <div className="cyberabout-hex-inner">
                <img
                  src={preetImg}
                  alt="Preet Makadiya"
                  className="cyberabout-photo"
                />
              </div>
            </div>
            <div className="cyberabout-name-tag">
              <span className="cyberabout-codename">OPERATIVE</span>
              <span className="cyberabout-fullname">PREET MAKADIYA</span>
              <span className="cyberabout-title-tag">Aspiring Cybersecurity Professional</span>
            </div>
            <a
              href="/Preet_Makadiya_Cyber.pdf"
              download="Preet_Makadiya_Cyber_Resume.pdf"
              className="cyber-dossier-btn"
              data-cursor
            >
              <span className="dossier-icon">{'\u{1F4C4}'}</span>
              EXPORT OPERATIVE DOSSIER
            </a>
          </div>

          {/* Right: Terminal */}
          <div className="cyberabout-terminal">
            <div className="cyber-terminal">
              <div className="cyber-terminal-bar">
                <span className="term-dot red" />
                <span className="term-dot yellow" />
                <span className="term-dot green" />
                <span className="cyberabout-term-title">preet@cybersec ~ %</span>
              </div>
              <div className="cyber-terminal-body">
                {terminalBlocks.slice(0, visibleBlocks).map((block, i) => (
                  <div
                    key={i}
                    className="term-line"
                    style={{ animationDelay: `${i * 0.05}s`, marginBottom: '14px' }}
                  >
                    <div>
                      <span className="term-prefix">$</span>
                      <span className="term-cmd">{block.cmd}</span>
                    </div>
                    {block.output.split('\n').map((line, j) => (
                      <div key={j} className="term-output">{line}</div>
                    ))}
                  </div>
                ))}
                {visibleBlocks >= terminalBlocks.length && (
                  <div className="term-line" style={{ animationDelay: '0.1s' }}>
                    <span className="term-prefix">$</span>
                    <span className="term-cursor" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
