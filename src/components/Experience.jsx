import { Link } from 'react-router-dom'
import SectionHead from './SectionHead.jsx'
import Job from './Job.jsx'

export default function Experience() {
  return (
    <section className="section" data-reveal>
      <div className="container">
        <SectionHead title="Experience" index="1 role" />
        <div className="timeline">
          <Job />
        </div>
      </div>
    </section>
  )
}
