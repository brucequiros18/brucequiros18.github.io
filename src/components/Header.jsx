import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme.jsx'
import { NAV_LINKS, PROFILE, PROJECTS } from '../data/site.js'

function Dropdown() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (!open) return

    const onOutsideClick = () => setOpen(false)
    const onEscape = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('click', onOutsideClick)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('click', onOutsideClick)
      document.removeEventListener('keydown', onEscape)
    }
  }, [open])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <li className="dropdown" ref={wrapRef}>
      <button
        className="dropdown-toggle"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={(e) => {
          e.stopPropagation()
          setOpen((o) => !o)
        }}
      >
        Work <span className="dropdown-arrow" aria-hidden="true">▼</span>
      </button>
      <ul className={`dropdown-menu${open ? ' active' : ''}`}>
        {PROJECTS.map((project) => (
          <li key={project.slug}>
            <Link to={`/work/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main">
        <Link className="brand" to="/" aria-label="Nash Bruce Quiros — home">
          <span className="chrome-lights" aria-hidden="true">
            <span className="chrome-light chrome-light--r"></span>
            <span className="chrome-light chrome-light--a"></span>
            <span className="chrome-light chrome-light--g"></span>
          </span>
          <span className="chrome-title">{PROFILE.brand}</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          ☰
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <Dropdown />
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                aria-current={location.pathname === link.to ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="theme-toggle"
          aria-label="Switch accent theme"
          aria-checked={theme === 'teal'}
          role="switch"
          title="Switch accent theme"
          onClick={toggleTheme}
        >
          <span className="theme-toggle-dot" aria-hidden="true"></span>
        </button>
      </nav>
    </header>
  )
}
