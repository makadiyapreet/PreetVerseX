import React, { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const move = (e) => {
      const { clientX: x, clientY: y } = e
      if (dot.current) {
        dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`
      }
    }

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', handleHover)
        el.addEventListener('mouseleave', handleUnhover)
      })
    }

    const handleHover = () => ring.current?.classList.add('hovered')
    const handleUnhover = () => ring.current?.classList.remove('hovered')

    window.addEventListener('mousemove', move)
    // Re-attach on DOM changes
    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
