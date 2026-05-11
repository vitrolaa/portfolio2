import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const PROJECTS = [
  {
    key: 'healthtalk',
    github: 'https://github.com/vitrolaa/healthTalk',
    tech: ['Java', 'MySQL', 'REST API', 'AI Integration'],
    features: ['f1', 'f2', 'f3', 'f4', 'f5'],
    color: '#a78bfa',
  },
  {
    key: 'netguardian',
    github: 'https://github.com/vitrolaa/NetGuardian',
    tech: ['Node.js', 'Express', 'MySQL', 'PostgreSQL', 'SQLite'],
    features: ['f1', 'f2', 'f3', 'f4', 'f5'],
    color: '#34d399',
  },
  {
    key: 'labhub',
    github: 'https://github.com/vitrolaa/LabHub',
    tech: ['Java', 'MySQL', 'JDBC'],
    features: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'],
    color: '#60a5fa',
  },
]

const ICONS = {
  healthtalk: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  netguardian: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  labhub: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
    </svg>
  ),
}

function ProjectCard({ project }) {
  const { t } = useLang()
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const name = t(`projects.${project.key}.name`)
  const desc = t(`projects.${project.key}.desc`)

  return (
    <article
      className="project-card fade-in"
      ref={ref}
      style={{ '--card-accent': project.color }}
    >
      <div className="project-card-top">
        <div className="project-icon" style={{ color: project.color }}>
          {ICONS[project.key]}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-link"
          aria-label={`GitHub ${name}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      <h3 className="project-name" style={{ color: project.color }}>{name}</h3>
      <p className="project-desc">{desc}</p>

      <div className="project-tech">
        {project.tech.map(tech => (
          <span key={tech} className="tech-tag" style={{ borderColor: project.color + '55', color: project.color }}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-features">
        <p className="features-label">{t('projects.mainFeatures')}</p>
        <ul className="features-list">
          {project.features.map(fk => (
            <li key={fk}>
              <span className="feature-dot" style={{ background: project.color }} />
              {t(`projects.${project.key}.${fk}`)}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-cta"
        style={{ color: project.color }}
      >
        {t('projects.viewGithub')}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </a>
    </article>
  )
}

export default function Projects() {
  const { t } = useLang()

  return (
    <main className="page-main">
      <div className="page-header">
        <h1 className="page-title">{t('projects.title')}</h1>
        <p className="page-subtitle">{t('projects.subtitle')}</p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map(p => <ProjectCard key={p.key} project={p} />)}
      </div>

      <div className="page-actions">
        <Link to="/contact" className="btn btn-primary">{t('nav.contact')}</Link>
        <a
          href="https://github.com/vitrolaa"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          {t('projects.moreGithub')}
        </a>
      </div>
    </main>
  )
}
