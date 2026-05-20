import React, { createContext, useContext, useState, useEffect, useRef } from 'react'
import { applyTheme, getStoredTheme } from '../theme/themeConfig'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStoredTheme)
  const prevThemeRef = useRef(theme === 'cyber' ? 'light' : theme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      prevThemeRef.current = next
      return next
    })
  }

  const setCyberMode = () => {
    if (theme !== 'cyber') prevThemeRef.current = theme
    setTheme('cyber')
  }

  const setNormalMode = () => {
    setTheme(prevThemeRef.current || 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setCyberMode, setNormalMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
