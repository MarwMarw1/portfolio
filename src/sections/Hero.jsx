import { motion } from 'framer-motion'
import { FiArrowDown, FiLinkedin } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

const roles = ['Frontend Developer', 'AI Automation Builder']

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-200/20 dark:bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-200/15 dark:bg-purple-500/4 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-100/15 dark:bg-emerald-500/4 blur-[80px] pointer-events-none" />

      {/* Floating dots decoration */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-500/40 dark:bg-blue-500/40"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + (i % 3) * 30}%`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 dark:border-blue-900/50 bg-purple-50 dark:bg-blue-950/30 backdrop-blur text-sm font-mono text-purple-700 dark:text-blue-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for freelance work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-800 text-5xl md:text-7xl lg:text-8xl text-gray-900 dark:text-white leading-none tracking-tight mb-4"
        >
          Jamie
          <br />
          <span className="gradient-text">Hernandez</span>
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6"
        >
          {roles.map((role, i) => (
            <span key={role} className="flex items-center gap-2">
              <span className="font-body text-sm md:text-base text-gray-600 dark:text-blue-300 font-300">{role}</span>
              {i < roles.length - 1 && (
                <span className="text-purple-500 dark:text-blue-400 text-xs">◆</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-body text-gray-600 dark:text-blue-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          I help businesses build{' '}
          <span className="text-gray-900 dark:text-white font-semibold">modern websites</span> and{' '}
          <span className="text-gray-900 dark:text-white font-semibold">AI-powered systems</span> that improve
          customer experience and automate workflows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group relative px-7 py-3.5 bg-purple-600 hover:bg-purple-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-display font-600 rounded-xl transition-all duration-200 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 dark:focus-visible:ring-blue-500"
            aria-label="View projects"
          >
            <span className="relative z-10 flex items-center gap-2">
              <HiSparkles className="text-lg" />
              View Projects
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-7 py-3.5 border border-purple-300 dark:border-blue-900/50 hover:border-purple-500 dark:hover:border-blue-500/50 text-gray-900 dark:text-white font-display font-600 rounded-xl transition-all duration-200 hover:bg-purple-500/5 dark:hover:bg-blue-500/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 dark:focus-visible:ring-blue-500"
            aria-label="Contact me"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
            {[
              { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/jose-maria-hernandez-b9731538a/', label: 'LinkedIn' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg border border-purple-200 dark:border-blue-900/50 flex items-center justify-center text-gray-600 dark:text-blue-300 hover:text-gray-900 dark:hover:text-white hover:border-purple-500 dark:hover:border-blue-500/50 hover:bg-purple-500/5 dark:hover:bg-blue-500/5 transition-all duration-200 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 dark:focus-visible:ring-blue-500"
              >
                {icon}
              </a>
            ))}
          <div className="w-px h-5 bg-purple-200 dark:bg-blue-900/50" />
          <span className="text-gray-500 dark:text-blue-400/70 text-xs font-mono">IT Student · Freelancer</span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 dark:text-blue-400/70 hover:text-purple-600 dark:hover:text-blue-400 transition-colors duration-200 text-xl"
        aria-label="Scroll down"
      >
        <FiArrowDown />
      </motion.button>
    </section>
  )
}
