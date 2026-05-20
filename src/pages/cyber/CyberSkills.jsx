import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './CyberSkills.css'

// Radar chart data
const radarAxes = [
  { label: 'Pen Testing', value: 60 },
  { label: 'Forensics', value: 55 },
  { label: 'Net Security', value: 65 },
  { label: 'Web App Sec', value: 70 },
  { label: 'OSINT', value: 50 },
  { label: 'Crypto', value: 45 },
]

// Tool grid
const toolGroups = [
  {
    category: 'Exploitation Frameworks',
    tools: [
      { name: 'Metasploit', level: 'Proficient' },
      { name: 'Burp Suite', level: 'Proficient' },
      { name: 'OWASP ZAP', level: 'Proficient' },
      { name: 'SQLmap', level: 'Learning' },
    ],
  },
  {
    category: 'Network Tools',
    tools: [
      { name: 'Wireshark', level: 'Proficient' },
      { name: 'Nmap', level: 'Proficient' },
      { name: 'Zenmap', level: 'Learning' },
    ],
  },
  {
    category: 'OS Platforms',
    tools: [
      { name: 'Kali Linux', level: 'Proficient' },
      { name: 'Parrot OS', level: 'Learning' },
      { name: 'Linux Terminal', level: 'Proficient' },
    ],
  },
  {
    category: 'Forensics',
    tools: [
      { name: 'Autopsy', level: 'Learning' },
      { name: 'Volatility', level: 'Learning' },
      { name: 'FTK', level: 'Learning' },
    ],
  },
  {
    category: 'Programming',
    tools: [
      { name: 'Python', level: 'Proficient' },
      { name: 'Bash', level: 'Learning' },
      { name: 'C/C++', level: 'Learning' },
    ],
  },
]

// Kill chain
const killChain = [
  { phase: 'Recon', tools: 'Nmap, OSINT, Shodan' },
  { phase: 'Weaponize', tools: 'Metasploit, Python scripts' },
  { phase: 'Deliver', tools: 'Phishing, Social Engineering' },
  { phase: 'Exploit', tools: 'Burp Suite, SQLmap, XSS' },
  { phase: 'Install', tools: 'Meterpreter, Reverse shells' },
  { phase: 'C2', tools: 'Cobalt Strike, Netcat' },
  { phase: 'Exfiltrate', tools: 'Data extraction, Steganography' },
]

function RadarChart() {
  const cx = 180, cy = 180, maxR = 110
  const n = radarAxes.length
  const angleStep = (2 * Math.PI) / n

  const getPoint = (i, r) => ({
    x: cx + r * Math.sin(i * angleStep),
    y: cy - r * Math.cos(i * angleStep),
  })

  // Grid circles
  const gridLevels = [0.25, 0.5, 0.75, 1]
  // Data polygon
  const dataPoints = radarAxes.map((a, i) => getPoint(i, (a.value / 100) * maxR))

  return (
    <div className="radar-wrap">
      <svg viewBox="0 0 360 360" className="radar-svg">
        {/* Grid */}
        {gridLevels.map(level => (
          <polygon
            key={level}
            points={Array.from({ length: n }, (_, i) => {
              const p = getPoint(i, level * maxR)
              return `${p.x},${p.y}`
            }).join(' ')}
            fill="none"
            stroke="rgba(255,45,85,0.12)"
            strokeWidth="1"
          />
        ))}
        {/* Axis lines */}
        {radarAxes.map((_, i) => {
          const p = getPoint(i, maxR)
          return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(255,45,85,0.1)" strokeWidth="1" />
        })}
        {/* Data area */}
        <polygon points={dataPoints.map(p => `${p.x},${p.y}`).join(' ')} fill="rgba(255,45,85,0.15)" stroke="#FF2D55" strokeWidth="2" />
        {/* Data dots */}
        {dataPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="#FF2D55" />
        ))}
        {/* Labels */}
        {radarAxes.map((a, i) => {
          const p = getPoint(i, maxR + 30)
          return (
            <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
              fill="#6B7A99" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">
              {a.label}
            </text>
          )
        })}
        {/* Value labels */}
        {radarAxes.map((a, i) => {
          const p = getPoint(i, (a.value / 100) * maxR - 12)
          return (
            <text key={`v${i}`} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
              fill="#FF2D55" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">
              {a.value}%
            </text>
          )
        })}
      </svg>
    </div>
  )
}

function KillChainDiagram() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="killchain-wrap">
      <h3 className="cyber-section-title">CYBER KILL CHAIN</h3>
      <div className="killchain-row">
        {killChain.map((step, i) => (
          <React.Fragment key={step.phase}>
            <div
              className={`killchain-step ${hoveredIndex === i ? 'active' : ''}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="killchain-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="killchain-name">{step.phase}</span>
              {hoveredIndex === i && (
                <div className="killchain-tooltip">
                  <span className="killchain-tooltip-label">Preet's tools:</span>
                  <span>{step.tools}</span>
                </div>
              )}
            </div>
            {i < killChain.length - 1 && <span className="killchain-arrow">→</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

const badgeColor = { Expert: '#00FF9C', Proficient: '#FF2D55', Learning: '#4A9EFF' }

export default function CyberSkills() {
  return (
    <div className="cyberskills">
      <div className="cyberskills-inner">
        {/* Radar */}
        <section className="cyberskills-radar-section">
          <h3 className="cyber-section-title">THREAT CAPABILITY RADAR</h3>
          <RadarChart />
        </section>

        {/* Tool Grid */}
        <section className="cyberskills-tools-section">
          <h3 className="cyber-section-title">ARSENAL</h3>
          <div className="tools-grid">
            {toolGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                className="tool-group-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: gi * 0.1 }}
              >
                <h4 className="tool-group-title">{group.category}</h4>
                {group.tools.map(tool => (
                  <div key={tool.name} className="tool-row">
                    <span className="tool-name">{tool.name}</span>
                    <span className="tool-badge" style={{ color: badgeColor[tool.level], borderColor: badgeColor[tool.level] }}>
                      {tool.level}
                    </span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Kill Chain */}
        <section className="cyberskills-killchain-section">
          <KillChainDiagram />
        </section>
      </div>
    </div>
  )
}
