import SectionHead from './SectionHead.jsx'
import ProjectRow from './ProjectRow.jsx'
import { PROJECTS } from '../data/site.js'

export default function Projects() {
  return (
    <section className="section" data-reveal>
      <div className="container">
        <SectionHead title="Projects I've Built" index={`${PROJECTS.length} shipped`} />
        <div className="projects">
          {PROJECTS.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
