import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const SKILLS = [
  { name: 'Java', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'MySQL', level: 70 },
  { name: 'REST API', level: 85 },
  { name: 'JavaScript', level: 72 },
  { name: 'PostgreSQL', level: 60 },
]

function SkillBar({ name, level }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.width = level + '%'
        obs.unobserve(el)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [level])

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" ref={ref} style={{ width: 0 }} />
      </div>
    </div>
  )
}

export default function About() {
  const { t } = useLang()
  const bioRef = useFadeIn()
  const infoRef = useFadeIn()
  const skillsRef = useFadeIn()

  return (
    <main className="page-main">
      <div className="page-header">
        <h1 className="page-title">{t('about.title')}</h1>
        <p className="page-subtitle">{t('about.subtitle')}</p>
      </div>

      <div className="about-grid">
        {/* Bio card */}
        <div className="card fade-in" ref={bioRef}>
          <div className="card-icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <h2 className="card-title">{t('about.who')}</h2>
          <p className="card-text">{t('about.bio1')}</p>
          <p className="card-text">{t('about.bio2')}</p>
          <p className="card-text">{t('about.bio3')}</p>
        </div>

        {/* Professional Info */}
        <div className="card fade-in" ref={infoRef}>
          <div className="card-icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
          </div>
          <h2 className="card-title">{t('about.profInfo')}</h2>

          <h3 className="card-section-title">{t('about.focus')}</h3>
          <p className="card-text">{t('about.focusDesc')}</p>

          <h3 className="card-section-title">{t('about.experience')}</h3>
          <ul className="info-list">
            {['exp1','exp2','exp3','exp4'].map(k => (
              <li key={k} className="info-list-item">
                <span className="info-bullet" />
                {t(`about.${k}`)}
              </li>
            ))}
          </ul>

          <h3 className="card-section-title">{t('about.interests')}</h3>
          <p className="card-text">{t('about.interestsDesc')}</p>
        </div>
      </div>

      {/* Skills */}
      <div className="skills-section fade-in" ref={skillsRef}>
        <h2 className="section-label">Stack</h2>
        <div className="skills-grid">
          {SKILLS.map(s => <SkillBar key={s.name} {...s} />)}
        </div>
      </div>

      <div className="page-actions">
        <Link to="/projects" className="btn btn-primary">{t('about.viewProjects')}</Link>
        <Link to="/contact" className="btn btn-outline">{t('nav.contact')}</Link>
      </div>
    </main>
  )
}
