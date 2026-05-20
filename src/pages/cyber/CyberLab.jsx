import React, { useState, useEffect, useRef, useCallback } from 'react'
import './CyberLab.css'

/* =====================
   KILL CHAIN DATA
   ===================== */
const killChainPhases = [
  { id: 'recon', name: 'RECONNAISSANCE', icon: '🔍', desc: 'Gathering information about the target.',
    tools: ['Nmap', 'Shodan', 'theHarvester', 'Maltego', 'Recon-ng'],
    techniques: ['Port Scanning', 'OSINT', 'DNS Enumeration', 'Subdomain Discovery'],
    defense: ['Network monitoring', 'Honeypots', 'DNS sinkholing', 'Rate limiting'] },
  { id: 'weaponize', name: 'WEAPONIZATION', icon: '⚙', desc: 'Creating a deliverable payload.',
    tools: ['Metasploit', 'msfvenom', 'SET', 'Cobalt Strike'],
    techniques: ['Payload crafting', 'Macro generation', 'Exploit packaging'],
    defense: ['Anti-malware', 'Sandboxing', 'Email filtering', 'Content disarming'] },
  { id: 'deliver', name: 'DELIVERY', icon: '📨', desc: 'Transmitting the payload to the target.',
    tools: ['Gophish', 'King Phisher', 'Social Engineering'],
    techniques: ['Phishing emails', 'Watering holes', 'USB drops', 'Supply chain'],
    defense: ['SPF/DKIM/DMARC', 'User training', 'Web filters', 'USB policies'] },
  { id: 'exploit', name: 'EXPLOITATION', icon: '💥', desc: 'Executing the payload on the target.',
    tools: ['Metasploit', 'Burp Suite', 'SQLMap', 'BeEF'],
    techniques: ['Buffer overflow', 'SQL injection', 'XSS', 'RCE'],
    defense: ['Patching', 'ASLR/DEP', 'WAF', 'Input validation'] },
  { id: 'install', name: 'INSTALLATION', icon: '📥', desc: 'Installing persistence mechanisms.',
    tools: ['Empire', 'Mimikatz', 'PowerShell'],
    techniques: ['Registry mods', 'Rootkits', 'Scheduled tasks', 'DLL hijacking'],
    defense: ['EDR', 'Application whitelisting', 'File integrity monitoring'] },
  { id: 'c2', name: 'COMMAND & CONTROL', icon: '📡', desc: 'Establishing remote communication.',
    tools: ['Cobalt Strike', 'Empire', 'Covenant', 'Sliver'],
    techniques: ['DNS tunneling', 'HTTP beacons', 'Encrypted channels'],
    defense: ['DNS monitoring', 'Network segmentation', 'Traffic analysis', 'IDS/IPS'] },
  { id: 'action', name: 'ACTIONS ON OBJECTIVES', icon: '🎯', desc: 'Achieving the final goal.',
    tools: ['Mimikatz', 'BloodHound', 'Exfiltration tools'],
    techniques: ['Data exfiltration', 'Privilege escalation', 'Lateral movement'],
    defense: ['DLP', 'Least privilege', 'Micro-segmentation', 'Audit logging'] },
]

/* =====================
   CTF WRITEUPS DATA
   ===================== */
const ctfWriteups = [
  { id: 'ctf-1', title: 'SQL Injection — Login Bypass', platform: 'TryHackMe', category: 'web', difficulty: 'Easy',
    methodology: 'Identified login form vulnerable to boolean-based SQLi. Used UNION SELECT to dump credentials.',
    tools: ['Burp Suite', 'SQLMap'], flag: 'THM{sql_1nj3ct10n_m4st3r}' },
  { id: 'ctf-2', title: 'Memory Forensics — Malware Analysis', platform: 'HackTheBox', category: 'forensics', difficulty: 'Medium',
    methodology: 'Extracted memory dump using Volatility. Identified suspicious process injection and recovered C2 IP.',
    tools: ['Volatility', 'Strings', 'Wireshark'], flag: 'HTB{v0l4t1l1ty_f0r3ns1cs}' },
  { id: 'ctf-3', title: 'RSA Weak Key Attack', platform: 'PicoCTF', category: 'crypto', difficulty: 'Medium',
    methodology: 'Factored weak RSA modulus using Fermat\'s method. Decrypted ciphertext with recovered private key.',
    tools: ['Python', 'RsaCtfTool', 'OpenSSL'], flag: 'picoCTF{sm4ll_pr1m3s_4r3_b4d}' },
  { id: 'ctf-4', title: 'XSS — Cookie Theft', platform: 'TryHackMe', category: 'web', difficulty: 'Easy',
    methodology: 'Found reflected XSS in search parameter. Crafted payload to exfiltrate admin session cookie.',
    tools: ['Burp Suite', 'Browser DevTools'], flag: 'THM{xss_c00k13_st34l3r}' },
  { id: 'ctf-5', title: 'Disk Image Analysis', platform: 'HackTheBox', category: 'forensics', difficulty: 'Hard',
    methodology: 'Mounted disk image, recovered deleted files using Autopsy. Found encrypted ZIP, cracked with John.',
    tools: ['Autopsy', 'FTK Imager', 'John the Ripper'], flag: 'HTB{d1sk_f0r3ns1cs_pr0}' },
  { id: 'ctf-6', title: 'Caesar Cipher Decode', platform: 'PicoCTF', category: 'crypto', difficulty: 'Easy',
    methodology: 'Identified Caesar cipher with ROT-13 shift. Decoded using frequency analysis.',
    tools: ['CyberChef', 'Python'], flag: 'picoCTF{c43s4r_c1ph3r_cr4ck3d}' },
]

const ctfCategories = ['all', 'web', 'forensics', 'crypto']

/* =====================
   THREAT MATRIX GAME
   ===================== */
function ThreatMatrix() {
  const canvasRef = useRef(null)
  const [gameState, setGameState] = useState('idle')
  const [level, setLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [bestTime, setBestTime] = useState(null)
  const [attempts, setAttempts] = useState(0)
  const angleRef = useRef(0)
  const speedRef = useRef(2)
  const safezoneRef = useRef({ start: 0, size: 60 })
  const rafRef = useRef(null)
  const startTimeRef = useRef(null)

  const maxLevel = 5
  const cx = 150, cy = 150, radius = 110

  const initLevel = useCallback((lvl) => {
    const sizes = [60, 48, 36, 28, 22]
    const speeds = [2, 2.8, 3.5, 4.5, 5.5]
    safezoneRef.current = { start: Math.random() * 360, size: sizes[Math.min(lvl - 1, 4)] }
    speedRef.current = speeds[Math.min(lvl - 1, 4)]
    angleRef.current = 0
    startTimeRef.current = Date.now()
  }, [])

  const startGame = useCallback(() => {
    setGameState('playing')
    setLevel(1)
    setScore(0)
    setAttempts(0)
    initLevel(1)
  }, [initLevel])

  useEffect(() => {
    if (gameState !== 'playing') return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    canvas.width = 300 * dpr
    canvas.height = 300 * dpr
    ctx.scale(dpr, dpr)

    const draw = () => {
      ctx.clearRect(0, 0, 300, 300)
      // Background ring
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 16
      ctx.stroke()
      // Safe zone
      const safeStart = (safezoneRef.current.start - 90) * (Math.PI / 180)
      const safeEnd = (safezoneRef.current.start - 90 + safezoneRef.current.size) * (Math.PI / 180)
      ctx.beginPath()
      ctx.arc(cx, cy, radius, safeStart, safeEnd)
      ctx.strokeStyle = '#00FF9C'
      ctx.lineWidth = 16
      ctx.stroke()
      // Cursor
      const cursorAngle = (angleRef.current - 90) * (Math.PI / 180)
      const dotX = cx + radius * Math.cos(cursorAngle)
      const dotY = cy + radius * Math.sin(cursorAngle)
      ctx.beginPath()
      ctx.arc(dotX, dotY, 12, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.08)'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(dotX, dotY, 6, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.fill()
      // Center text
      ctx.fillStyle = 'rgba(255,255,255,0.3)'
      ctx.font = '600 10px "Space Mono", monospace'
      ctx.textAlign = 'center'
      ctx.fillText('CLICK TO', cx, cy - 6)
      ctx.fillStyle = '#ffffff'
      ctx.font = '700 14px "Space Mono", monospace'
      ctx.fillText('UNLOCK', cx, cy + 12)
      ctx.fillStyle = 'rgba(255,45,85,0.6)'
      ctx.font = '18px sans-serif'
      ctx.fillText('🔒', cx, cy - 22)
      angleRef.current = (angleRef.current + speedRef.current) % 360
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [gameState, level])

  const handleClick = () => {
    if (gameState !== 'playing') return
    const angle = angleRef.current
    const safe = safezoneRef.current
    let inZone = false
    if (safe.start + safe.size > 360) {
      inZone = angle >= safe.start || angle <= (safe.start + safe.size) % 360
    } else {
      inZone = angle >= safe.start && angle <= safe.start + safe.size
    }
    setAttempts(a => a + 1)
    if (inZone) {
      const elapsed = ((Date.now() - startTimeRef.current) / 1000).toFixed(1)
      if (!bestTime || parseFloat(elapsed) < parseFloat(bestTime)) setBestTime(elapsed)
      setScore(s => s + level * 100)
      if (level >= maxLevel) {
        setGameState('success')
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
      } else {
        setLevel(l => l + 1)
        initLevel(level + 1)
      }
    } else {
      setGameState('fail')
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }

  const passRate = attempts > 0 ? Math.round((score / (attempts * 100)) * 100) : 0

  return (
    <section className="lab-section tm-section">
      <div className="tm-layout">
        <div className="tm-game-side">
          <div className="tm-game-header">
            <span className="tm-label">◇ THREAT MATRIX</span>
            <span className="tm-layer">
              {gameState === 'playing' ? `DECRYPTING LAYER ${level}/${maxLevel}...`
                : gameState === 'success' ? 'ALL LAYERS DECRYPTED'
                : gameState === 'fail' ? 'DECRYPTION FAILED' : 'SYSTEM READY'}
            </span>
          </div>
          <div className="tm-canvas-wrap" onClick={handleClick}>
            <canvas ref={canvasRef} className="tm-canvas" width={300} height={300} />
            {gameState === 'idle' && (
              <div className="tm-overlay" onClick={startGame}>
                <span className="tm-ov-icon">🔒</span>
                <span className="tm-ov-text">CLICK TO START</span>
              </div>
            )}
            {gameState === 'success' && (
              <div className="tm-overlay success">
                <span className="tm-ov-icon">🔓</span>
                <span className="tm-ov-text glow">ACCESS GRANTED</span>
                <span className="tm-ov-sub">SCORE: {score}</span>
                <button className="tm-retry" onClick={startGame}>REPLAY</button>
              </div>
            )}
            {gameState === 'fail' && (
              <div className="tm-overlay fail">
                <span className="tm-ov-icon">⛔</span>
                <span className="tm-ov-text red">INTRUSION DETECTED</span>
                <span className="tm-ov-sub">REACHED LAYER {level}</span>
                <button className="tm-retry" onClick={startGame}>RETRY</button>
              </div>
            )}
          </div>
          <div className="tm-legend">
            <span>SYSTEM READY</span>
            <span className="tm-legend-item"><span className="tm-dot green" /> SAFE ZONE</span>
            <span className="tm-legend-item"><span className="tm-dot white" /> CURSOR</span>
          </div>
        </div>
        <div className="tm-info-side">
          <div className="tm-info-badge">◆ TRAINING MODULE V9.0</div>
          <h2 className="tm-info-title">Active Defense<br />Protocol Training</h2>
          <p className="tm-info-desc">
            Cybersecurity isn't just about software; it's about reflex.
            Test your skills with the Threat Matrix simulator. Align the
            phase shifts to unlock the secure core.
          </p>
          <div className="tm-stats">
            <div className="tm-stat"><span className="tm-stat-val">{passRate}<small>%</small></span><span className="tm-stat-lbl">PASS RATE</span></div>
            <div className="tm-stat"><span className="tm-stat-val">{bestTime || '—'}<small>s</small></span><span className="tm-stat-lbl">BEST TIME</span></div>
            <div className="tm-stat"><span className="tm-stat-val">Level <strong>{level}</strong></span><span className="tm-stat-lbl">DEPTH</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================
   KILL CHAIN COMPONENT
   ===================== */
function InteractiveKillChain() {
  const [activePhase, setActivePhase] = useState(null)
  const [showDefense, setShowDefense] = useState(false)

  return (
    <section className="lab-section">
      <h3 className="cyber-section-title">INTERACTIVE KILL CHAIN</h3>
      <p className="lab-section-sub">{'>'} Click any phase to explore offensive tools, techniques, and defensive countermeasures.</p>
      <div className="lab-defense-toggle">
        <button className={`defense-toggle-btn ${!showDefense ? 'active' : ''}`} onClick={() => setShowDefense(false)}>⚔ OFFENSE</button>
        <button className={`defense-toggle-btn ${showDefense ? 'active' : ''}`} onClick={() => setShowDefense(true)}>🛡 DEFENSE</button>
      </div>
      <div className="killchain-timeline">
        {killChainPhases.map((phase, i) => (
          <div key={phase.id} className="killchain-phase-wrap">
            <button className={`killchain-phase ${activePhase === phase.id ? 'active' : ''}`}
              onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}>
              <span className="kc-number">{String(i + 1).padStart(2, '0')}</span>
              <span className="kc-icon">{phase.icon}</span>
              <span className="kc-name">{phase.name}</span>
            </button>
            {activePhase === phase.id && (
              <div className="kc-details">
                <p className="kc-desc">{phase.desc}</p>
                <div className="kc-detail-section">
                  <h5 className="kc-detail-title">{showDefense ? '🛡 DEFENSES' : '⚔ TOOLS'}</h5>
                  <div className="kc-tags">
                    {(showDefense ? phase.defense : phase.tools).map(item => (
                      <span key={item} className={`kc-tag ${showDefense ? 'defense' : 'offense'}`}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="kc-detail-section">
                  <h5 className="kc-detail-title">{showDefense ? '🔒 MITIGATIONS' : '🎯 TECHNIQUES'}</h5>
                  <div className="kc-tags">
                    {(showDefense ? phase.defense : phase.techniques).map(item => (
                      <span key={item} className={`kc-tag ${showDefense ? 'defense' : 'offense'}`}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {i < killChainPhases.length - 1 && <div className="kc-connector" />}
          </div>
        ))}
      </div>
    </section>
  )
}

/* =====================
   CTF WRITEUPS COMPONENT
   ===================== */
function CTFWriteups() {
  const [filter, setFilter] = useState('all')
  const [revealed, setRevealed] = useState({})
  const filtered = filter === 'all' ? ctfWriteups : ctfWriteups.filter(w => w.category === filter)
  const toggleFlag = (id) => setRevealed(prev => ({ ...prev, [id]: !prev[id] }))
  const difficultyColor = (d) => d === 'Easy' ? '#00FF9C' : d === 'Medium' ? '#FFB300' : '#FF2D55'

  return (
    <section className="lab-section">
      <h3 className="cyber-section-title">CTF WRITEUPS</h3>
      <p className="lab-section-sub">{'>'} Documented challenge solutions from HackTheBox, TryHackMe, and PicoCTF.</p>
      <div className="ctf-filter-bar">
        {ctfCategories.map(cat => (
          <button key={cat} className={`ctf-filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>
            {cat.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="ctf-grid">
        {filtered.map(writeup => (
          <div key={writeup.id} className="ctf-card">
            <div className="ctf-card-header">
              <span className="ctf-platform">{writeup.platform}</span>
              <span className="ctf-difficulty" style={{ color: difficultyColor(writeup.difficulty) }}>{writeup.difficulty}</span>
            </div>
            <h4 className="ctf-title">{writeup.title}</h4>
            <span className="ctf-category-tag">{writeup.category}</span>
            <p className="ctf-methodology">{writeup.methodology}</p>
            <div className="ctf-tools">
              {writeup.tools.map(t => <span key={t} className="ctf-tool-tag">{t}</span>)}
            </div>
            <div className="ctf-flag-section">
              <button className="ctf-flag-btn" onClick={() => toggleFlag(writeup.id)}>
                {revealed[writeup.id] ? '🏴 HIDE FLAG' : '🏴 REVEAL FLAG'}
              </button>
              {revealed[writeup.id] && <code className="ctf-flag-text">{writeup.flag}</code>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* =====================
   MAIN LAB PAGE
   ===================== */
export default function CyberLab() {
  return (
    <div className="cyberlab">
      <div className="cyberlab-inner">
        <div className="cyberlab-hero">
          <h2 className="cyberlab-title">
            <span className="cyberlab-title-icon">⚗</span>
            CYBER LAB
          </h2>
          <p className="cyberlab-subtitle">
            Interactive cybersecurity playground — test your reflexes, explore attack
            methodologies, and document CTF solutions.
          </p>
        </div>

        <ThreatMatrix />
        <InteractiveKillChain />
        <CTFWriteups />
      </div>
    </div>
  )
}
