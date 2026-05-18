import { FiMail, FiLinkedin } from 'react-icons/fi'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'

const contactLinks = [
  {
    icon: <FiMail className="text-xl" />,
    label: 'Email',
    value: 'jamiehernandez20043@gmail.com',
    href: 'mailto:jamiehernandez20043@gmail.com',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: <FiLinkedin className="text-xl" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jose-maria-hernandez-b9731538a/',
    href: 'https://www.linkedin.com/in/jose-maria-hernandez-b9731538a/',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Contact"
          title="Contact"
          subtitle="Reach out anytime for opportunities, inquiries, or collaboration."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <Reveal duration={0.6} y={24} className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-2xl border border-purple-200/50 dark:border-blue-900/50 bg-stone-50/50 dark:bg-blue-950/20">
              <p className="text-xs font-mono tracking-[0.35em] text-slate-600 dark:text-blue-400/70 mb-3">CONTACT</p>
              <h3 className="font-display font-700 text-slate-900 dark:text-white text-2xl mb-3">Get in touch</h3>
              <p className="font-body text-slate-700 dark:text-blue-300 text-sm leading-relaxed mb-6">
                Use the details below to reach me directly.
              </p>

              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === 'LinkedIn' ? '_blank' : undefined}
                    className={`flex items-center gap-4 p-4 rounded-xl border bg-purple-100/40 dark:bg-blue-950/30 border-purple-200/50 dark:border-blue-900/50 hover:bg-purple-100 dark:hover:bg-blue-950/50 transition-all duration-200 card-hover group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 dark:focus-visible:ring-blue-500`}
                    aria-label={link.label}
                  >
                    <span className={`bg-purple-100 dark:${link.bg} text-purple-600 dark:${link.color} p-2.5 rounded-lg text-xl`}>
                      {link.icon}
                    </span>
                    <div>
                      <p className="text-xs font-mono text-slate-600 dark:text-blue-400/70 mb-0.5">{link.label}</p>
                      <p className="font-body text-sm text-slate-900 dark:text-white">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <div className="p-4 rounded-xl border border-purple-200 dark:border-blue-900/50 bg-purple-50 dark:bg-blue-950/20">
                  <p className="text-xs font-mono text-slate-600 dark:text-blue-400/70 mb-1">Phone</p>
                  <p className="text-slate-900 dark:text-white font-body text-sm">+63 962 955 7821</p>
                </div>
                <div className="p-4 rounded-xl border border-purple-200/50 dark:border-blue-900/50 bg-purple-100/40 dark:bg-blue-950/30">
                  <p className="text-xs font-mono text-slate-600 dark:text-blue-400/70 mb-1">Location</p>
                  <p className="text-slate-900 dark:text-white font-body text-sm">Angono, Rizal, Philippines</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal duration={0.6} y={24} className="lg:col-span-3">
            <div className="p-6 md:p-8 rounded-2xl border border-purple-200/50 dark:border-blue-900/50 bg-gradient-to-br from-purple-50/60 dark:from-blue-950/30 via-stone-50 dark:via-blue-900/20 to-purple-50/40 dark:to-blue-950/20">
              <h3 className="font-display font-700 text-gray-900 dark:text-white text-xl mb-5">Direct details</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-stone-50/60 dark:bg-blue-950/30 border border-purple-200/50 dark:border-blue-900/50">
                  <p className="text-xs font-mono text-slate-600 dark:text-blue-400/70 mb-2">Email</p>
                  <a href="mailto:jamiehernandez20043@gmail.com" className="text-slate-900 dark:text-blue-300 hover:text-purple-600 dark:hover:text-blue-200 transition-colors duration-200 font-body">
                    jamiehernandez20043@gmail.com
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50/60 dark:bg-blue-950/30 border border-purple-200/50 dark:border-blue-900/50">
                  <p className="text-xs font-mono text-slate-600 dark:text-blue-400/70 mb-2">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/jose-maria-hernandez-b9731538a/" target="_blank" rel="noreferrer" className="text-purple-600 dark:text-blue-300 hover:underline font-body">
                    www.linkedin.com/in/jose-maria-hernandez-b9731538a/
                  </a>
                </div>
              </div>

              <div className="mt-6 p-5 rounded-2xl border border-purple-200/50 dark:border-blue-900/50 bg-stone-50/60 dark:bg-blue-950/30">
                <p className="text-xs font-mono text-gray-600 dark:text-blue-400/70 mb-2">Preferred contact</p>
                <p className="text-gray-700 dark:text-blue-200 text-sm leading-relaxed">
                  Email and LinkedIn are the fastest ways to reach me for internship opportunities and collaboration.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
