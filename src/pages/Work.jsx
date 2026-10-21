import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import TechGrid from '../components/TechGrid.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function Work() {
  usePageTitle('Work')

  return (
    <main id="main">
      <section className="section page-intro">
        <div className="container">
          <p className="eyebrow">Work</p>
          <SectionHead title="What I build" index="software · apps · games" />
        </div>
      </section>

      <Experience />
      <Projects />
      <TechGrid />
    </main>
  )
}
