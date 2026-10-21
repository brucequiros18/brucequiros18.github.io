import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function NotFound() {
  usePageTitle('404')

  return (
    <main id="main">
      <section className="section not-found">
        <div className="container">
          <p className="nf-code">404</p>
          <p>That page doesn't exist — it may have been moved or unplugged.</p>
          <Link className="btn btn--primary" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  )
}
