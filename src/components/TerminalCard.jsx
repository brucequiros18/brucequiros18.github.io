import { HERO_STATUSES, PROFILE } from '../data/site.js'

export default function TerminalCard({ reveal = false }) {
  return (
    <div className="term" data-reveal={reveal ? '' : undefined}>
      <div className="term-bar">
        <span className="term-dot term-dot--danger" aria-hidden="true"></span>
        <span className="term-dot term-dot--accent" aria-hidden="true"></span>
        <span className="term-dot term-dot--muted" aria-hidden="true"></span>
        <span className="term-title mono">nash@portfolio — profile</span>
      </div>
      <div className="term-body">
        <dl className="profile">
          <div className="profile-row">
            <dt>Name</dt>
            <dd>{PROFILE.name}</dd>
          </div>
          <div className="profile-row">
            <dt>Focus</dt>
            <dd>AI &amp; Innovation · Mobile Apps · Web Systems · Game Development</dd>
          </div>
          <div className="profile-row">
            <dt>Status</dt>
            <dd>
              <span className="profile-status">
                {HERO_STATUSES.map((line) => (
                  <span key={line} className="status-line">
                    {line}
                  </span>
                ))}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
