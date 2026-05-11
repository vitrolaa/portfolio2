import { useLang } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLang()
  const isEN = lang === 'en'

  return (
    <button
      className="lang-toggle"
      onClick={toggleLanguage}
      title={isEN ? 'Switch to Portuguese' : 'Mudar para Inglês'}
      aria-label="Toggle language"
    >
      <span className="lang-flag">{isEN ? '🇺🇸' : '🇧🇷'}</span>
      <span className="lang-label">{isEN ? 'PT' : 'EN'}</span>
    </button>
  )
}
