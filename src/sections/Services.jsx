import { HiCode, HiDesktopComputer, HiClipboardCheck, HiChatAlt2 } from 'react-icons/hi'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'

const services = [
  {
    icon: <HiCode className="text-3xl" />,
    title: 'Web & Mobile Application Development',
    desc: 'Builds responsive web and mobile-friendly applications using the technologies reflected in my projects and toolkit.',
    features: ['React / HTML / CSS / JavaScript', 'PHP / Laravel integration', 'Mobile-first responsive layouts', 'Project-based implementation'],
    color: 'blue',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    border: 'border-blue-500/20',
    hover: 'hover:border-blue-500/40',
  },
  {
    icon: <HiDesktopComputer className="text-3xl" />,
    title: 'Frontend Development',
    desc: 'Creates clean, dynamic interfaces with a focus on usability, structure, and modern presentation.',
    features: ['React.js / Angular.js', 'Tailwind CSS / Bootstrap', 'Interactive UI components', 'Readable and maintainable structure'],
    color: 'violet',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    border: 'border-violet-500/20',
    hover: 'hover:border-violet-500/40',
  },
  {
    icon: <HiClipboardCheck className="text-3xl" />,
    title: 'QA & Testing',
    desc: 'Supports quality assurance through detailed test cases, functionality checks, and validation for web systems.',
    features: ['Manual testing', 'Test case documentation', 'Functionality validation', 'Usability and data checks'],
    color: 'emerald',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    border: 'border-emerald-500/20',
    hover: 'hover:border-emerald-500/40',
  },
  {
    icon: <HiChatAlt2 className="text-3xl" />,
    title: 'AI Integration, Chatbots & FAQs',
    desc: 'Adds AI-powered chatbot support and FAQ automation to websites so users can find answers faster and systems feel smarter.',
    features: ['Chatbot integration', 'FAQ automation', 'User inquiry support', 'AI-assisted navigation'],
    color: 'orange',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
    border: 'border-orange-500/20',
    hover: 'hover:border-orange-500/40',
  },
]

export default function Services() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Services"
          title="What I offer"
          subtitle="Services aligned with my projects, toolkit, and the AI chatbot and FAQ features you build."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((svc, i) => (
            <Reveal
              key={svc.title}
              delay={i * 0.08}
              duration={0.5}
              y={28}
              className={`group p-6 md:p-10 rounded-2xl border bg-white dark:bg-blue-950/30 border-purple-200/50 dark:border-blue-900/50 hover:border-purple-400/70 dark:hover:border-blue-800/70 transition-all duration-300 card-hover`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-purple-100/60 dark:bg-blue-950/40 text-purple-600 dark:text-blue-400 mb-5`}>
                {svc.icon}
              </div>
              <h3 className="font-display font-700 text-slate-900 dark:text-white text-xl mb-2">{svc.title}</h3>
              <p className="font-body text-slate-700 dark:text-blue-300 text-sm leading-relaxed mb-5">{svc.desc}</p>
              <ul className="space-y-2">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-body text-slate-700 dark:text-blue-300">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-600 dark:bg-blue-400 bg-current`} />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* CTA Banner */}
        <Reveal duration={0.5} y={20} className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-purple-100/40 dark:from-blue-600/10 via-stone-50 dark:via-blue-950/30 to-purple-100/40 dark:to-purple-600/10 dark:border-blue-500/20 border-purple-200/50 p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 dark:from-blue-500/5 to-purple-100/30 dark:to-purple-500/5" />
          <div className="relative z-10">
            <h3 className="font-display font-800 text-2xl md:text-3xl text-slate-900 dark:text-white mb-3">
              Ready to build something great?
            </h3>
            <p className="font-body text-slate-700 dark:text-blue-300 mb-6 max-w-md mx-auto">
              Let's talk about your project. I'm available for freelance work and open to new opportunities.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 dark:bg-blue-600 hover:bg-purple-700 dark:hover:bg-blue-700 text-white font-display font-600 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 dark:focus-visible:ring-blue-500"
            >
              Start a Project
              <FiArrowRight />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
