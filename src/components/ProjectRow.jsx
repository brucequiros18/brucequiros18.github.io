import { Link } from 'react-router-dom'

export default function ProjectRow({ project }) {
  return (
    <article className="project">
      <div>
        <h3>
          <Link to={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
      </div>
      <div className="project-meta">
        {project.tags.map((tag, index) => (
          <span key={tag}>
            {index > 0 && ' · '}
            <span className="tag">{tag}</span>
          </span>
        ))}
        <Link className="project-link mono" to={`/work/${project.slug}`}>
          details →
        </Link>
      </div>
    </article>
  )
}
