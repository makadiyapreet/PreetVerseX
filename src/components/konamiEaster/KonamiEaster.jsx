import React, { useState, useEffect, useCallback } from 'react'
import './KonamiEaster.css'

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA',
]

export default function KonamiEaster() {
  const [triggered, setTriggered] = useState(false)
  const inputRef = React.useRef([])

  const handleKeyDown = useCallback((e) => {
    const key = e.code
    inputRef.current = [...inputRef.current, key].slice(-KONAMI_CODE.length)
    if (inputRef.current.length === KONAMI_CODE.length &&
      inputRef.current.every((k, i) => k === KONAMI_CODE[i])) {
      setTriggered(true)
      setTimeout(() => setTriggered(false), 4000)
      inputRef.current = []
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!triggered) return null

  return (
    <div className="konami-overlay" onClick={() => setTriggered(false)}>
      <div className="konami-content">
        <div className="konami-siren-bar top" />
        <div className="konami-siren-bar bottom" />

        <div className="konami-center">
          <div className="konami-icon">⚠</div>
          <h1 className="konami-title">DEFCON 1</h1>
          <p className="konami-sub">MAXIMUM THREAT LEVEL DETECTED</p>
          <div className="konami-details">
            <span>{'>'} ALL SYSTEMS: COMPROMISED</span>
            <span>{'>'} SHIELDS: OFFLINE</span>
            <span>{'>'} COUNTERMEASURES: ENGAGED</span>
          </div>
          <button className="konami-dismiss" onClick={() => setTriggered(false)}>
            [ACKNOWLEDGE]
          </button>
        </div>
      </div>
    </div>
  )
}
