import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './TopButton.css'

export default function TopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="top-button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Scroll to top"
          data-cursor
          title="Back to top"
        >
          <i className="fas fa-arrow-up" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
