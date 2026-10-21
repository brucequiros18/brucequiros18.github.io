import { PROFILE, CONTACT_LIST } from '../data/site.js'
import ImgSlot from '../components/ImgSlot.jsx'
import Socials from '../components/Socials.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function Contact() {
  usePageTitle('Contact')

  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <div className="section-head">
            <h2>
              Let's build your
              <br />
              next project together.
            </h2>
          </div>

          <div className="contact-grid">
            <div>
              <ImgSlot src={PROFILE.avatar} alt={PROFILE.name} className="img-slot--portrait img-slot--contact" />

              <ul className="contact-list">
                {CONTACT_LIST.map((item) => (
                  <li key={item.label}>
                    <span className="c-label">{item.label}</span>
                    {item.href ? (
                      <a className="c-value" href={item.href}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="c-value">{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>

              <p className="c-label" style={{ margin: '30px 0 14px' }}>
                Find me on
              </p>
              <Socials />
            </div>

            <div>
              <form
                className="form-card"
                method="get"
                action={`mailto:${PROFILE.email}`}
                encType="text/plain"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="Name"
                    type="text"
                    maxLength={70}
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    maxLength={190}
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="Message"
                    maxLength={4000}
                    placeholder="Tell me about your project idea, mobile app, website, game, or AI solution."
                    required
                  ></textarea>
                  <p className="form-note">Opens your email client — 12–4000 characters</p>
                </div>
                <button className="btn btn--primary" type="submit">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
