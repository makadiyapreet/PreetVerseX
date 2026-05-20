import React from 'react'
import { useTranslation } from 'react-i18next'
import './LangSwitcher.css'

const langs = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हि' },
  { code: 'gu', label: 'ગુ' },
]

export default function LangSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language?.slice(0, 2) // handle 'en-US' → 'en'

  return (
    <div className="lang-switcher" role="group" aria-label="Language selector">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`lang-btn ${current === code ? 'active' : ''}`}
          aria-label={`Switch to ${code}`}
          data-cursor
        >
          {label}
        </button>
      ))}
    </div>
  )
}
