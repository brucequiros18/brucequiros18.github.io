import SectionHead from '../components/SectionHead.jsx'
import { EXPERTISE, PRINCIPLES_WORKFLOW, USES } from '../data/site.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function UsesPage() {
  usePageTitle('Uses')

  return (
    <main id="main">
      <section className="section page-intro">
        <div className="container">
          <p className="eyebrow">Uses</p>
          <div className="section-head">
            <h1 className="page-title">
              The stack I
              <br />
              actually use.
            </h1>
            <span className="section-index mono">tools · workflow</span>
          </div>
          <p className="lead" style={{ maxWidth: '60ch' }}>
            The tools I reach for when building software, apps, and games. Simple, dependable, and a
            little unconventional.
          </p>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container">
          <div className="uses-grid">
            {USES.map((group) => (
              <div key={group.category} className="uses-col">
                <h2 className="uses-cat mono">{group.category}</h2>
                <ul className="uses-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container">
          <SectionHead title="How I Build" index="how I work" />
          <div className="workflow">
            {PRINCIPLES_WORKFLOW.map((principle) => (
              <div key={principle.num} className="principle">
                <span className="p-num">{principle.num}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
