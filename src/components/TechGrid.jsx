import ChipsList from './ChipsList.jsx'
import { TECH_STACK } from '../data/site.js'
import SectionHead from './SectionHead.jsx'

export default function TechGrid() {
  return (
    <section className="section" data-reveal>
      <div className="container">
        <SectionHead title="Skills & Tools" index="stack" />
        <div className="tech-grid">
          {TECH_STACK.map((group) => (
            <div key={group.heading}>
              <h3 className="tech-head">{group.heading}</h3>
              <ChipsList items={group.chips} ariaLabel={group.heading} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
