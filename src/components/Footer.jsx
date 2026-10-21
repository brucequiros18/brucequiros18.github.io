import { PROFILE } from '../data/site.js'
import Socials from './Socials.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <p className="eyebrow">Contact</p>
          <h2>
            Let's create something
            <br />
            amazing together.
          </h2>
          <a className="email-link" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
        </div>

        <div className="footer-bottom">
          <p className="mono">© 2026 {PROFILE.name} · {PROFILE.location}</p>
          <Socials />
        </div>
      </div>
    </footer>
  )
}
