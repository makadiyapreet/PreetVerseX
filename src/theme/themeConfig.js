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
    '--bg': '#0A1628',
    '--bg-card': '#142238',
    '--primary': '#5AA8F5',
    '--accent': '#5AA8F5',
    '--text': '#E8F4FD',
    '--text-sub': '#94B3CC',
    '--border': 'rgba(90,168,245,0.18)',
    '--shadow': '0 4px 20px rgba(0,0,0,0.45)',
    '--header-bg': 'rgba(10, 22, 40, 0.88)',
    '--footer-bg': '#081020',
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
