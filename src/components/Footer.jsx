import { FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-purple-200/50 dark:border-blue-900/50 py-10 px-6 bg-stone-50/50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-700 text-xl text-slate-900 dark:text-white">
          JH<span className="text-purple-600 dark:text-blue-400">.</span>
        </p>
        <p className="text-slate-700 dark:text-blue-300 text-sm font-body text-center">
          © {new Date().getFullYear()} Jamie Hernandez. Built with React + Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/jose-maria-hernandez-b9731538a/', label: 'LinkedIn' },
            { icon: <FiMail />, href: 'mailto:jamiehernandez20043@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-slate-600 dark:text-blue-300 hover:text-purple-600 dark:hover:text-blue-400 transition-colors duration-200 text-xl"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
