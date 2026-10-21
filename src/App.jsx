import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme.jsx'
import ScrollToTop from './hooks/ScrollToTop.jsx'
import Background from './components/Background.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import About from './pages/About.jsx'
import Uses from './pages/Uses.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Background />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}
