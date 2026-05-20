import React, { useState } from 'react'
import './ProjectReactions.css'

const REACTIONS = [
  { emoji: '\u{1F525}', label: 'Fire' },
  { emoji: '\u2B50', label: 'Star' },
  { emoji: '\u{1F4A1}', label: 'Insightful' },
  { emoji: '\u{1F680}', label: 'Amazing' },
]

export default function ProjectReactions({ projectId }) {
  const storageKey = 'reactions_' + projectId

  const [counts, setCounts] = useState(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) return JSON.parse(stored)
      // Seed with small random counts for visual appeal
      const seed = {}
      REACTIONS.forEach(r => { seed[r.emoji] = Math.floor(Math.random() * 5) })
      return seed
    } catch (e) {
      const fallback = {}
      REACTIONS.forEach(r => { fallback[r.emoji] = 0 })
      return fallback
    }
  })

  const [userReaction, setUserReaction] = useState(() => {
    return localStorage.getItem(storageKey + '_user') || null
  })

  const handleReact = (emoji) => {
    const isRemoving = userReaction === emoji
    const newCounts = Object.assign({}, counts)

    if (userReaction) {
      newCounts[userReaction] = Math.max(0, (newCounts[userReaction] || 0) - 1)
    }
    if (!isRemoving) {
      newCounts[emoji] = (newCounts[emoji] || 0) + 1
    }

    const newUserReaction = isRemoving ? null : emoji
    setCounts(newCounts)
    setUserReaction(newUserReaction)
    localStorage.setItem(storageKey, JSON.stringify(newCounts))
    localStorage.setItem(storageKey + '_user', newUserReaction || '')
  }

  return (
    <div className="reactions" onClick={e => e.preventDefault()}>
      {REACTIONS.map(function(r) {
        return (
          <button
            key={r.emoji}
            onClick={function(e) { e.preventDefault(); e.stopPropagation(); handleReact(r.emoji); }}
            className={'reaction-btn' + (userReaction === r.emoji ? ' active' : '')}
            title={r.label}
            aria-label={r.label + ' reaction'}
          >
            <span className="reaction-emoji" role="img" aria-label={r.label}>{r.emoji}</span>
            <span className="reaction-count">{counts[r.emoji] || 0}</span>
          </button>
        )
      })}
    </div>
  )
}
