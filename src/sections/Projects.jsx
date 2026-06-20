import { HiSparkles } from 'react-icons/hi'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'

const projects = [
  {
    id: '01',
    title: 'UST-ROAR',
    desc: 'Developed an automated role-based activity management system for student organizations with AI-powered chatbot integration to assist users in navigating system features and inquiries.',
    detail: 'Designed and implemented front-end functionalities with a focus on intuitive UI/UX design to improve user experience and accessibility.',
    role: 'Development',
    stack: ['React', 'Automation', 'Accessibility'],
    tags: ['UST', 'AI Chatbot', 'Student Org'],
    color: 'blue',
    gradient: 'from-blue-600/20 to-blue-900/5',
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    badge: 'bg-blue-500/10 text-blue-400',
  },
  {
    id: '02',
    title: 'SaTaLa (Sagip Taal Lake)',
    desc: 'Developed a web platform supporting environmental monitoring and community engagement for Taal Lake conservation.',
    detail: 'Contributed to UI/UX development, system functionality, and data structuring to enhance usability and information flow.',
    role: 'Web Platform',
    stack: ['Web', 'Environmental', 'Community'],
    tags: ['SaTaLa', 'Conservation', 'Monitoring'],
    color: 'emerald',
    gradient: 'from-emerald-600/20 to-emerald-900/5',
    border: 'border-emerald-500/20',
    accent: 'text-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    id: '03',
    title: 'Project Weltz-site',
    desc: 'Online Platform and Ordering System for Fire Protection Supplies.',
    detail: 'Served as Quality Assurance and Software Testing for the system. Designed and documented detailed test cases to validate system functionality, usability, and data accuracy.',
    role: 'QA / Testing',
    stack: ['QA', 'Testing', 'Documentation'],
    tags: ['Ordering System', 'Fire Protection', 'QA'],
    color: 'violet',
    gradient: 'from-violet-600/20 to-violet-900/5',
    border: 'border-violet-500/20',
    accent: 'text-violet-400',
    badge: 'bg-violet-500/10 text-violet-400',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Projects"
          title="Projects"
          subtitle="Selected work showing development, automation, QA, and system testing experience."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i * 0.08}
              duration={0.5}
              y={28}
              className={`group relative p-6 md:p-10 rounded-2xl border card-hover overflow-hidden bg-stone-50/50 dark:bg-blue-950/30 border-purple-200/50 dark:border-blue-900/50 transition-colors duration-300`}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-mono text-4xl font-800 text-gray-100 dark:text-white/5 select-none">
                {project.id}
              </span>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-blue-950/40 border border-purple-300/50 dark:border-blue-900/50 text-purple-700 dark:text-blue-300 transition-colors duration-300`}>
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-display font-700 text-slate-900 dark:text-white text-xl mb-2 leading-tight">
                {project.title}
              </h3>
              <p className="font-body text-slate-700 dark:text-blue-300 text-sm leading-relaxed mb-5">
                {project.desc}
              </p>

                <p className="font-body text-slate-600 dark:text-blue-200 text-sm leading-relaxed mb-5">
                  {project.detail}
                </p>

              <p className="text-xs font-mono text-slate-600 dark:text-blue-400/70 mb-4">
                Focus: <span className={`text-slate-900 dark:text-blue-300`}>{project.role}</span>
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-purple-100 dark:bg-blue-950/50 border border-purple-300 dark:border-blue-900/50 text-gray-700 dark:text-blue-300 font-mono transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/[0.02] dark:via-white/[0.02] to-transparent pointer-events-none" />
            </Reveal>
          ))}
        </div>

        {/* More coming soon */}
        <Reveal className="mt-8 text-center" duration={0.45} y={12}>
          <p className="text-slate-600 dark:text-blue-400/70 font-mono text-sm flex items-center justify-center gap-2">
            <HiSparkles className="text-purple-600 dark:text-blue-400" />
            More projects coming soon · Open to collaboration
          </p>
        </Reveal>
      </div>
    </section>
  )
}
