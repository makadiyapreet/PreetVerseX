export const themes = {
  light: {
    name: 'light',
    '--bg': '#EBF5FB',
    '--bg-card': '#FFFFFF',
    '--primary': '#0D2137',
    '--accent': '#4A90D9',
    '--text': '#1A1A2E',
    '--text-sub': '#5A6A7A',
    '--border': 'rgba(13,33,55,0.12)',
    '--shadow': '0 4px 20px rgba(13,33,55,0.10)',
    '--header-bg': 'rgba(235, 245, 251, 0.82)',
    '--footer-bg': '#0D2137',
  },
  dark: {
    name: 'dark',
    '--bg': '#0A0A0F',
    '--bg-card': '#111118',
    '--primary': '#FF2D55',
    '--accent': '#00FF9C',
    '--text': '#E0E8FF',
    '--text-sub': '#6B7A99',
    '--border': 'rgba(0,255,156,0.12)',
    '--shadow': '0 4px 20px rgba(0,0,0,0.55)',
    '--header-bg': 'rgba(10, 10, 15, 0.90)',
    '--footer-bg': '#06060A',
  },
  cyber: {
    name: 'cyber',
    '--bg': '#050508',
    '--bg-card': '#0D0D14',
    '--primary': '#FF2D55',
    '--accent': '#00FF9C',
    '--text': '#E0E8FF',
    '--text-sub': '#6B7A99',
    '--border': 'rgba(255,45,85,0.20)',
    '--shadow': '0 4px 20px rgba(255,45,85,0.15)',
    '--terminal': '#00FF9C',
    '--threat': '#FF2D55',
    '--header-bg': 'rgba(5, 5, 8, 0.9)',
    '--footer-bg': '#050508',
  }
}

export const applyTheme = (themeName) => {
  const theme = themes[themeName] || themes.light
  const root = document.documentElement
  Object.entries(theme).forEach(([key, val]) => {
    if (key.startsWith('--')) root.style.setProperty(key, val)
  })
  localStorage.setItem('preet_theme', themeName)
}

export const getStoredTheme = () => {
  return localStorage.getItem('preet_theme') || 'light'
}
