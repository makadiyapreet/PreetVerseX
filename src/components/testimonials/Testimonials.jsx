import React, { useState, useEffect, useCallback } from 'react'
import { testimonials } from '../../portfolio'
import './Testimonials.css'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const hasMultiple = testimonials.length > 1

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-advance every 5s if multiple
  useEffect(() => {
    if (!hasMultiple) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [hasMultiple, next])

  const t = testimonials[current]

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-card-inner">
        <span className="testimonial-quotemark">{'\u201C'}</span>
        <blockquote className="testimonial-text">{t.quote}</blockquote>
        <span className="testimonial-quotemark closing">{'\u201D'}</span>
        <div className="testimonial-divider" />
        <div className="testimonial-author-row">
          {t.photo && <img src={t.photo} alt={t.name} className="testimonial-photo" />}
          <div>
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-role">{t.title}</div>
          </div>
        </div>
      </div>

      {hasMultiple && (
        <div className="testimonial-controls">
          <button className="testimonial-arrow" onClick={prev} data-cursor>‹</button>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`testimonial-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
          <button className="testimonial-arrow" onClick={next} data-cursor>›</button>
        </div>
      )}
    </div>
  )
}
