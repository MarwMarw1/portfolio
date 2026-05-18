import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { HiSun, HiMoon } from 'react-icons/hi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean)

    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: 0.15,
      }
    )

    sections.forEach((section) => observer.observe(section))
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const handleNav = (href) => {
    setActiveSection(href)
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-[#080c14]/90 backdrop-blur-xl border-b border-[#192433]'
              : 'bg-stone-50/90 backdrop-blur-xl border-b border-purple-200/50'
            : 'bg-transparent'
        }`}
      >
        <motion.div
          className="h-px bg-gradient-to-r origin-left"
          style={{
            scaleX: scrollProgress / 100,
            backgroundImage: isDark
              ? 'linear-gradient(to right, transparent, rgb(96, 165, 250), transparent)'
              : 'linear-gradient(to right, transparent, rgb(124, 58, 237), transparent)'
          }}
        />
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className={`font-display font-800 text-xl tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <span>JH</span>
            <span className={isDark ? 'text-blue-400' : 'text-purple-600'}>.</span>
          </a>
          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <motion.button
                  onClick={() => handleNav(link.href)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className={`font-body text-sm transition-colors duration-200 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${
                    activeSection === link.href
                      ? isDark ? 'text-white' : 'text-slate-900'
                      : isDark ? 'text-blue-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-1 left-0 h-px ${isDark ? 'bg-[#3b82f6]' : 'bg-[#7c3aed]'}`}
                    initial={false}
                    animate={{ width: activeSection === link.href ? '100%' : '0%' }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                </motion.button>
              </li>
            ))}
          </ul>

          {/* CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isDark
                  ? 'text-yellow-400 hover:bg-[#192433]'
                  : 'text-orange-500 hover:bg-[#f5f6f8]'
              }`}
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
            <button
              onClick={() => handleNav('#contact')}
              className={`px-4 py-2 text-sm font-display font-600 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg ${
                isDark
                  ? 'text-[#3b82f6] border border-[#3b82f6]/40 hover:bg-[#3b82f6]/10 focus-visible:ring-blue-500'
                  : 'text-[#7c3aed] border border-[#7c3aed]/40 hover:bg-[#7c3aed]/10 focus-visible:ring-purple-500'
              }`}
              aria-label="Hire me"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle + theme button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isDark
                  ? 'text-yellow-400'
                  : 'text-orange-500'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className={`text-2xl z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg ${
                isDark
                  ? 'text-white focus-visible:ring-blue-500'
                  : 'text-slate-900 focus-visible:ring-purple-500'
              }`}
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.985 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-0 z-40 backdrop-blur-[18px] flex flex-col items-center justify-center gap-8 border-t transition-colors duration-300 ${
              isDark
                ? 'bg-[#080c14]/95 border-white/5'
                : 'bg-stone-50/95 border-slate-200/30'
            }`}
          >
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.05,
                  },
                },
              }}
              className="flex flex-col items-center gap-4"
            >
              {links.map((link) => (
                <motion.button
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 18, scale: 0.98 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleNav(link.href)}
                  className={`font-display text-3xl font-700 transition-colors duration-200 px-6 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    activeSection === link.href 
                      ? isDark ? 'text-blue-400 focus-visible:ring-blue-500' : 'text-purple-600 focus-visible:ring-purple-500'
                      : isDark ? 'text-blue-200 hover:text-blue-400' : 'text-slate-700 hover:text-purple-600'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: links.length * 0.08, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleNav('#contact')}
              className="mt-4 px-8 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-display font-600 rounded-xl text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition-colors duration-200"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
