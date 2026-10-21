import ImgSlot from '../components/ImgSlot.jsx'
import ChipsList from '../components/ChipsList.jsx'
import TechGrid from '../components/TechGrid.jsx'
import { ABOUT_PAGES, EXPERTISE, PROFILE, PRINCIPLES_BUILD, QUICK_FACTS } from '../data/site.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function About() {
  usePageTitle('About')

  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <p className="eyebrow">About me</p>

          <div className="about-grid">
            <div className="about-copy">
              <h1 className="page-title" style={{ marginBottom: 26 }}>
                The future, built
                <br />
                one project at a time.
              </h1>
              {ABOUT_PAGES.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="about-side">
              <ImgSlot src="/images/about.jpg" alt={PROFILE.name} />

              <aside className="facts" aria-label="Quick facts">
                <h3>Quick Facts</h3>
                <dl>
                  {QUICK_FACTS.map((fact) => (
                    <div key={fact.term} className="fact-row">
                      <dt>{fact.term}</dt>
                      <dd>{fact.detail}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>

          <div className="principles">
            <div className="section-head" style={{ marginBottom: 10 }}>
              <h2>How I Build</h2>
            </div>

            {PRINCIPLES_BUILD.map((principle) => (
              <div key={principle.num} className="principle">
                <span className="p-num">{principle.num}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="principles">
            <div className="section-head" style={{ marginBottom: 10 }}>
              <h2>Areas of Expertise</h2>
            </div>

            <ul className="expertise-list">
              {EXPERTISE.map((area, i) => (
                <li key={area}>
                  <span className="p-num">/{String(i + 1).padStart(2, '0')}</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TechGrid />
    </main>
  )
}
