import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './SkillBars.css'

function SkillBar({ name, level, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div className="skillbar-row" ref={ref}>
      <div className="skillbar-info">
        <span className="skillbar-name">{name}</span>
        <span className="skillbar-pct">{level}%</span>
      </div>
      <div className="skillbar-track">
        <motion.div
          className="skillbar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function SkillBars({ categories }) {
  return (
    <div className="skillbars-grid">
      {categories.map((cat) => (
        <div className="skillbars-card" key={cat.title}>
          <h3 className="skillbars-title">{cat.title}</h3>
          {cat.bars.map((bar, i) => (
            <SkillBar
              key={bar.name}
              name={bar.name}
              level={bar.level}
              delay={i * 0.1}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
