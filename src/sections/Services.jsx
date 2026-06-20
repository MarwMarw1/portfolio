import { HiCode, HiDesktopComputer, HiChatAlt2 } from 'react-icons/hi'
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
    features: ['React.js / Next.js', 'Tailwind CSS / Bootstrap', 'Interactive UI components'],
    color: 'violet',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    border: 'border-violet-500/20',
    hover: 'hover:border-violet-500/40',
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
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionHeader
            tag="Services"
            title="What I offer"
            subtitle="Services aligned with my projects, toolkit, and the AI chatbot and FAQ features you build."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 justify-items-center">
          {services.map((svc, i) => (
            <Reveal
              key={svc.title}
              delay={i * 0.08}
              duration={0.5}
              y={28}
              className="group w-full p-6 md:p-10 rounded-2xl border bg-white dark:bg-blue-950/30 border-purple-200/50 dark:border-blue-900/50 hover:border-purple-400/70 dark:hover:border-blue-800/70 transition-all duration-300 card-hover"
            >
              <div className="flex justify-center">
                <div className="inline-flex p-3 rounded-xl bg-purple-100/60 dark:bg-blue-950/40 text-purple-600 dark:text-blue-400 mb-5">
                  {svc.icon}
                </div>
              </div>
              <h3 className="font-display font-700 text-slate-900 dark:text-white text-xl mb-2 text-center">{svc.title}</h3>
              <p className="font-body text-slate-700 dark:text-blue-300 text-sm leading-relaxed mb-5 text-center">{svc.desc}</p>
              <ul className="space-y-2">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center justify-center gap-2 text-sm font-body text-slate-700 dark:text-blue-300">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-600 dark:bg-blue-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
