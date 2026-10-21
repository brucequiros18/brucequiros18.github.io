import ChipsList from './ChipsList.jsx'
import { EXPERIENCE } from '../data/site.js'

export default function Job() {
  return (
    <article className="job">
      <p className="job-period mono">
        {EXPERIENCE.period}
        <br />
        {EXPERIENCE.location}
      </p>
      <div>
        <div className="job-head">
          <h3>{EXPERIENCE.title}</h3>
        </div>
        <p className="job-org" style={{ margin: '0 0 10px' }}>
          {EXPERIENCE.org}
        </p>
        <p className="job-summary">{EXPERIENCE.summary}</p>

        <h4 className="job-subhead">Specializations</h4>
        <ChipsList items={EXPERIENCE.specializations} ariaLabel="Specializations" />

        <h4 className="job-subhead" style={{ marginTop: 26 }}>
          Core skills
        </h4>
        <ChipsList items={EXPERIENCE.coreSkills} ariaLabel="Core skills" accent />
      </div>
    </article>
  )
}
