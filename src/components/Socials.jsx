import { SOCIALS } from '../data/site.js'

export default function Socials() {
  return (
    <div className="socials">
      {SOCIALS.map((social) => (
        <a
          key={social.label}
          className="social-link"
          href={social.href}
          rel="noopener"
          target="_blank"
          aria-label={social.label}
        >
          <svg
            className="social-ico"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
            focusable="false"
          >
            <path fill="currentColor" d={social.path} />
          </svg>
          <span>{social.label}</span>
        </a>
      ))}
    </div>
  )
}
