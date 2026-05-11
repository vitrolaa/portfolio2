import { createContext, useContext, useState, useCallback } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'pt')

  const toggleLanguage = useCallback(() => {
    setLang(prev => {
      const next = prev === 'pt' ? 'en' : 'pt'
      localStorage.setItem('lang', next)
      document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en'
      return next
    })
  }, [])

  const t = useCallback((key) => {
    return translations[lang]?.[key] ?? key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
