import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'

const skills = [
  { name: 'C#', level: 72 },
  { name: 'HTML & CSS', level: 92 },
  { name: 'JavaScript', level: 86 },
  { name: 'PHP', level: 68 },
  { name: 'Angular.js', level: 64 },
  { name: 'React.js', level: 82 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'Bootstrap', level: 74 },
  { name: 'Laravel', level: 66 },
]

const focusPoints = [
  'Web and mobile application development',
  'Software development, QA, and testing',
  'Real-world internship readiness',
]

const strengthBadges = [
  'Frontend thinking',
  'QA-minded',
  'Responsive builds',
  'AI chatbot support',
]

function SkillBar({ name, level, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="group"
    >
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-slate-900 dark:text-white font-medium group-hover:text-purple-600 dark:group-hover:text-blue-300 transition-colors duration-200">{name}</span>
          <span className="text-sm text-gray-600 dark:text-blue-400/70">{level}%</span>
        </div>
        <div className="w-full bg-purple-100/60 dark:bg-blue-950/40 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.08 + delay, ease: 'easeOut' }}
            className="h-3 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 dark:from-sky-400 dark:via-violet-400 dark:to-indigo-400 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-purple-200/15 dark:bg-blue-500/6 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-purple-200/10 dark:bg-purple-500/5 blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="About Me" title="Who I am" />

        <div className="flex justify-center mb-12">
          <Reveal className="w-full max-w-4xl" duration={0.6} y={24}>
            <div className="relative overflow-hidden rounded-3xl border border-purple-200/50 dark:border-blue-900/50 bg-gradient-to-br from-purple-50/60 dark:from-blue-950/30 via-stone-50 dark:via-blue-900/20 to-purple-50/40 dark:to-blue-950/20 p-6 sm:p-8 shadow-lg dark:shadow-[0_20px_80px_rgba(15,23,42,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.06),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.10),transparent_30%)] pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200/50 dark:border-blue-900/50 bg-purple-100/60 dark:bg-blue-950/30 text-purple-700 dark:text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-blue-400 animate-pulse" />
                  About
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-700 text-slate-900 dark:text-white mb-4">
                  Jose Maria C. Hernandez
                </h2>

                <p className="text-slate-700 dark:text-blue-200 leading-relaxed max-w-3xl text-base md:text-lg mb-6">
                  A graduating Bachelor of Science in Information Technology student from the University of Santo Tomas, specializing in Web and Mobile Application Development. Seeking an internship to apply skills in software development, quality assurance, and testing, while gaining real-world industry experience.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {strengthBadges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-full border border-purple-200/50 dark:border-blue-900/40 bg-purple-100/60 dark:bg-blue-950/25 text-sm text-slate-700 dark:text-blue-300 hover:bg-purple-100 dark:hover:bg-blue-950/35 transition-colors duration-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                  {[
                    { label: 'Focus', value: 'Web + Mobile' },
                    { label: 'Strength', value: 'QA + Testing' },
                    { label: 'Goal', value: 'Internship-ready' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="rounded-2xl border border-purple-200/50 dark:border-white/10 bg-purple-100/40 dark:bg-blue-950/30 p-4"
                    >
                      <p className="text-xs font-mono text-slate-600 dark:text-blue-400/70 mb-1">{item.label}</p>
                      <p className="text-slate-900 dark:text-white font-medium">{item.value}</p>
                    </motion.div>
                  ))}
                </div>

                <div id="toolkit" className="rounded-2xl border border-purple-200/50 dark:border-blue-900/50 bg-purple-100/40 dark:bg-blue-950/20 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <h4 className="text-slate-900 dark:text-white font-medium text-lg">Toolkit</h4>
                    <span className="text-xs font-mono text-slate-600 dark:text-blue-400/70 uppercase tracking-[0.25em]">Core Skills</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      {skills.map((s, i) => (
                        <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.06} />
                      ))}
                    </div>

                    <div className="space-y-5">
                      <div>
                        <p className="text-slate-700 dark:text-blue-300 mb-2 text-sm">Programming languages & Frameworks</p>
                        <div className="flex flex-wrap gap-2">
                          {['C#', 'HTML & CSS', 'JavaScript', 'PHP', 'Angular.js', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Laravel'].map((t) => (
                            <span key={t} className="px-3 py-1 bg-purple-100/60 dark:bg-blue-950/40 text-sm text-slate-700 dark:text-blue-300 rounded-full hover:bg-purple-100 dark:hover:bg-blue-950/50 transition border border-purple-200/50 dark:border-blue-900/40">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-slate-700 dark:text-blue-300 mb-2 text-sm">Tools</p>
                        <div className="flex flex-wrap gap-2">
                          {['Visual Studio Code', 'MySQL', 'GitHub'].map((t) => (
                            <span key={t} className="px-3 py-1 bg-purple-100/60 dark:bg-blue-950/40 text-sm text-slate-700 dark:text-blue-300 rounded-full hover:bg-purple-100 dark:hover:bg-blue-950/50 transition border border-purple-200/50 dark:border-blue-900/40">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-slate-700 dark:text-blue-300 mb-2 text-sm">Quality Assurance & Testing</p>
                        <div className="flex flex-wrap gap-2">
                          {['Test case design', 'Manual testing', 'Documentation', 'Verification'].map((t) => (
                            <span key={t} className="px-3 py-1 bg-purple-100/60 dark:bg-blue-950/40 text-sm text-slate-700 dark:text-blue-300 rounded-full hover:bg-purple-100 dark:hover:bg-blue-950/50 transition border border-purple-200/50 dark:border-blue-900/40">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
