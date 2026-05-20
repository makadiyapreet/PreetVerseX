import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import './StatsCounter.css'

const stats = [
  { label: 'Projects Built', target: 9, suffix: '+' },
  { label: 'Certifications', target: 12, suffix: '+' },
  { label: 'Internships', target: 2, suffix: '' },
  { label: 'Volunteerships', target: 3, suffix: '' },
]

function AnimatedNumber({ target, suffix, trigger }) {
  const [count, setCount] = useState(0)
  const frameRef = useRef(null)

  const animate = useCallback(() => {
    const duration = 1500
    const start = performance.now()

    const step = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }

    frameRef.current = requestAnimationFrame(step)
  }, [target])

  useEffect(() => {
    if (trigger) {
      animate()
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [trigger, animate])

  return (
    <span className="stat-counter-num">
      {count}{suffix}
    </span>
  )
}

export default function StatsCounter() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stats-card" key={stat.label}>
            <div className="stats-accent-bar" />
            <AnimatedNumber
              target={stat.target}
              suffix={stat.suffix}
              trigger={inView}
            />
            <span className="stats-card-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
