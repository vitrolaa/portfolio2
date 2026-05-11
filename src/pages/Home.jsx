import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const ROLES = {
  pt: ['Desenvolvedor Full Stack', 'Backend Developer', 'Criador de Soluções'],
  en: ['Full Stack Developer', 'Backend Developer', 'Problem Solver'],
}

export default function Home() {
  const { t, lang } = useLang()
  const roleRef = useRef(null)
  const roleIdx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const roles = ROLES[lang]
    roleIdx.current = 0
    charIdx.current = 0
    deleting.current = false

    function tick() {
      const role = roles[roleIdx.current]
      if (!roleRef.current) return

      if (!deleting.current) {
        charIdx.current++
        roleRef.current.textContent = role.slice(0, charIdx.current)
        if (charIdx.current === role.length) {
          deleting.current = true
          timerRef.current = setTimeout(tick, 1800)
          return
        }
        timerRef.current = setTimeout(tick, 80)
      } else {
        charIdx.current--
        roleRef.current.textContent = role.slice(0, charIdx.current)
        if (charIdx.current === 0) {
          deleting.current = false
          roleIdx.current = (roleIdx.current + 1) % roles.length
          timerRef.current = setTimeout(tick, 300)
          return
        }
        timerRef.current = setTimeout(tick, 40)
      }
    }

    timerRef.current = setTimeout(tick, 400)
    return () => clearTimeout(timerRef.current)
  }, [lang])

  return (
    <main className="hero-page">
      {/* Mesh background */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="mesh-blob blob-1" />
        <div className="mesh-blob blob-2" />
        <div className="mesh-blob blob-3" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          {lang === 'pt' ? 'Disponível para projetos' : 'Available for projects'}
        </div>

        <h1 className="hero-greeting">{t('hero.greeting')}</h1>
        <h2 className="hero-name">{t('hero.name')}</h2>

        <div className="hero-role-wrap">
          <span className="hero-role-text" ref={roleRef} />
          <span className="hero-cursor" aria-hidden="true">|</span>
        </div>

        <p className="hero-desc">{t('hero.description')}</p>

        <div className="hero-cta">
          <Link to="/about" className="btn btn-primary">{t('hero.cta.about')}</Link>
          <Link to="/projects" className="btn btn-outline">{t('hero.cta.projects')}</Link>
          <Link to="/contact" className="btn btn-ghost">{t('hero.cta.contact')}</Link>
        </div>

        <div className="hero-stack">
          {['Java', 'Node.js', 'MySQL', 'REST API', 'JavaScript'].map(tech => (
            <span key={tech} className="stack-chip">{tech}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="code-card">
          <div className="code-header">
            <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
            <span className="code-filename">vitor.js</span>
          </div>
          <pre className="code-body">{`const developer = {
  name: "Vitor Brito",
  role: "Full Stack Dev",
  skills: [
    "Java", "Node.js",
    "MySQL", "REST API"
  ],
  passion: "building things",
  available: true
}`}</pre>
        </div>
      </div>
    </main>
  )
}
