import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Timeline.css'

function TimelineEvent({ event, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`tl-event ${isLeft ? 'tl-left' : 'tl-right'}`}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="tl-dot" />
      <div className="tl-card">
        <span className="tl-year">{event.year}</span>
        <h4 className="tl-title">{event.title}</h4>
        <p className="tl-org">{event.org}</p>
        <p className="tl-desc">{event.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Timeline({ events }) {
  return (
    <div className="tl-container">
      <div className="tl-line" />
      {events.map((event, i) => (
        <TimelineEvent key={`${event.year}-${event.title}`} event={event} index={i} />
      ))}
    </div>
  )
}
