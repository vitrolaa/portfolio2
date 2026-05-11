import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-brand">
          <span className="logo-bracket">&lt;</span>VB<span className="logo-bracket">/&gt;</span>
        </p>
        <p className="footer-copy">{t('footer.rights')}</p>
        <p className="footer-made">{t('footer.made')}</p>
      </div>
    </footer>
  )
}
