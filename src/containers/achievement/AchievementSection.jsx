import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { achievements } from '../../portfolio'
import './AchievementSection.css'

function AchievementCard({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      className="ach-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <span className="ach-icon" role="img" aria-label={item.title}>{item.icon}</span>
      <h3 className="ach-title">{item.title}</h3>
      <p className="ach-desc">{item.desc}</p>
    </motion.div>
  )
}

export default function AchievementSection() {
  return (
    <section className="ach-section" id="achievements">
      <h2 className="ach-heading">Achievements</h2>
      <div className="ach-grid">
        {achievements.map((item, i) => (
          <AchievementCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
