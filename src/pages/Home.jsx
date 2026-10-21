import { Link } from 'react-router-dom'
import Ticker from '../components/Ticker.jsx'
import ImgSlot from '../components/ImgSlot.jsx'
import TerminalCard from '../components/TerminalCard.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import TechGrid from '../components/TechGrid.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { ABOUT_HOME, FOCUS_AREAS, PROFILE } from '../data/site.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function Home() {
  usePageTitle()

  return (
    <main id="main">
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">{PROFILE.eyebrow}</p>

              <h1 className="type-name" data-type>
                {PROFILE.name}
                <span className="type-caret" aria-hidden="true"></span>
              </h1>

              <p className="hero-role">{PROFILE.role}</p>

              <p className="lead">{PROFILE.tagline}</p>

              <div className="btn-row">
                <Link className="btn btn--primary" to="/work">
                  View my work
                </Link>
                <Link className="btn btn--ghost" to="/contact">
                  Get in touch
                </Link>
              </div>

              <div className="hero-foot">
                <span>
                  <span className="pulse" aria-hidden="true"></span>
                  {PROFILE.availability}
                </span>
                <span>{PROFILE.location}</span>
                <span>{PROFILE.degree}</span>
              </div>
            </div>

            <aside className="hero-aside">
              <ImgSlot src={PROFILE.avatar} alt={PROFILE.name} />

              <TerminalCard reveal />
            </aside>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="section--tight">
        <div className="container">
          <ul className="focus-grid" aria-label="Focus areas">
            {FOCUS_AREAS.map((area) => (
              <li key={area.label} className="focus-item">
                <span className="focus-label">{area.label}</span>
                <span className="focus-detail mono">{area.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container">
          <SectionHead title="About me" index="student · developer · creator" />
          {ABOUT_HOME.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="lead" style={{ maxWidth: '62ch', marginBottom: 18 }}>
              {paragraph}
            </p>
          ))}
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link className="btn btn--ghost" to="/about">
              More about me
            </Link>
          </div>
        </div>
      </section>

      <Experience />
      <Projects />
      <TechGrid />
    </main>
  )
}
