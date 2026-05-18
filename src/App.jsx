import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
// Skills section consolidated into About (Toolkit)
import Projects from './sections/Projects'
import Services from './sections/Services'
import Contact from './sections/Contact'

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('theme-mode')
    if (stored) return stored === 'dark'
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (!window.location.hash) {
      window.history.scrollRestoration = 'manual'
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])

  useEffect(() => {
    // Update document and localStorage
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
    }
    localStorage.setItem('theme-mode', isDark ? 'dark' : 'light')
  }, [isDark])

  const handleThemeToggle = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="noise-bg grid-lines min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} onThemeToggle={handleThemeToggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
