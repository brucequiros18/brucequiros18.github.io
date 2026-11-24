import { Link } from 'react-router-dom'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import TechGrid from '../components/TechGrid.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Socials from '../components/Socials.jsx'
import { EXPERTISE, PROFILE, RESUME } from '../data/site.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

const pad = (n) => String(n).padStart(2, '0')

export default function Resume() {
  usePageTitle('Resume')

  const edu = RESUME.education

  return (
    <main id="main">
      <section className="section page-intro resume-intro">
        <div className="container">
          <p className="eyebrow">Resume</p>

          <div className="resume-head">
            <div className="resume-id">
              <h1 className="resume-name">{PROFILE.name}</h1>
              <p className="hero-role">{PROFILE.role}</p>
              <p className="lead">{RESUME.summary}</p>

              <div className="btn-row no-print">
                <button type="button" className="btn btn--primary" onClick={() => window.print()}>
                  Print / Save as PDF
                </button>
                <Link className="btn btn--ghost" to="/contact">
                  Get in touch
                </Link>
              </div>
            </div>

            <aside className="facts resume-facts" aria-label="Contact details">
              <h2>Details</h2>
              <dl>
                <div className="fact-row">
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                  </dd>
                </div>
                <div className="fact-row">
                  <dt>Phone</dt>
                  <dd>
                    <a href="tel:+639953941510">{PROFILE.phone}</a>
                  </dd>
                </div>
                <div className="fact-row">
                  <dt>Base</dt>
                  <dd>{PROFILE.location}</dd>
                </div>
                <div className="fact-row">
                  <dt>Status</dt>
                  <dd>{PROFILE.availability}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <SectionHead title="Education" index={edu.period} as="h2" />

          <div className="timeline">
            <article className="job">
              <div className="job-period">
                {edu.period}
                <br />
                {edu.location}
              </div>
              <div>
                <div className="job-head">
                  <h3>{edu.degree}</h3>
                  <span className="job-org">{edu.school}</span>
                </div>
                <p className="job-summary">{edu.summary}</p>
                <p className="job-subhead">Specializations</p>
                <ul className="job-wins">
                  {edu.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Experience />

      <Projects />

      <TechGrid />

      <section className="section--tight">
        <div className="container">
          <SectionHead title="Expertise" index="what I do" as="h2" />
          <ul className="expertise-list">
            {EXPERTISE.map((area, i) => (
              <li key={area}>
                <span className="p-num">/{pad(i + 1)}</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>

          <div className="resume-languages">
            <SectionHead title="Languages" index="spoken" as="h2" />
            <ul className="chips">
              {RESUME.languages.map((lang) => (
                <li key={lang} className="chip">
                  {lang}
                </li>
              ))}
            </ul>
            <div className="resume-socials no-print">
              <p className="c-label" style={{ margin: '30px 0 14px' }}>
                Find me on
              </p>
              <Socials />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
