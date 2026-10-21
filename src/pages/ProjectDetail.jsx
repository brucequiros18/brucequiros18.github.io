import { Link, useParams } from 'react-router-dom'
import ImgSlot from '../components/ImgSlot.jsx'
import NotFound from './NotFound.jsx'
import { PROJECTS, padIndex } from '../data/site.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)
  usePageTitle(project ? project.title : 'Project')

  if (!project) return <NotFound />

  const index = PROJECTS.indexOf(project)
  const previous = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length]
  const next = PROJECTS[(index + 1) % PROJECTS.length]
  const galleryClass = project.gallery.length > 1 ? 'project-gallery' : 'project-gallery project-gallery--single'

  return (
    <main id="main">
      <section className="section page-intro">
        <div className="container">
          <p className="eyebrow">
            <Link className="crumb" to="/work">
              ← Work
            </Link>
          </p>
          <div className="section-head">
            <h1 className="page-title">{project.title}</h1>
            <span className="section-index mono">
              {padIndex(index + 1)} / {padIndex(PROJECTS.length)}
            </span>
          </div>
          <p className="lead" style={{ maxWidth: '62ch' }}>
            {project.summary}
          </p>
          <div className="project-meta" style={{ marginTop: 18 }}>
            {project.tags.map((tag, tagIndex) => (
              <span key={tag}>
                {tagIndex > 0 && ' · '}
                <span className="tag">{tag}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight" data-reveal>
        <div className="container">
          <div className={galleryClass}>
            {project.gallery.map((shot) => (
              <figure key={shot.src} className="img-slot img-slot--detail">
                <img src={shot.src} alt={shot.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container">
          <div className="project-detail">
            <div className="project-detail-main">
              <h2 className="project-detail-h">About this project</h2>
              {project.aboutCopy.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <aside className="project-detail-side">
              <h2 className="project-detail-h">Highlights</h2>
              <ul className="project-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>

          <nav className="project-nav" aria-label="More projects">
            <Link className="project-nav-link" to={`/work/${previous.slug}`}>
              <span className="mono">← previous</span>
              <span>{previous.title}</span>
            </Link>
            <Link className="project-nav-link" to="/work">
              <span className="mono">all projects</span>
              <span>See everything I've built</span>
            </Link>
            <Link className="project-nav-link project-nav-link--next" to={`/work/${next.slug}`}>
              <span className="mono">next →</span>
              <span>{next.title}</span>
            </Link>
          </nav>
        </div>
      </section>
    </main>
  )
}
