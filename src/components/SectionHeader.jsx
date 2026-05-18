import Reveal from './Reveal'

export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <Reveal className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200/50 dark:border-blue-900/50 bg-purple-100/60 dark:bg-blue-950/30 text-purple-800 dark:text-blue-400 text-xs font-mono uppercase tracking-widest mb-4" delay={0} duration={0.45} y={10}>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-blue-400 animate-pulse" />
        {tag}
      </Reveal>
      <Reveal delay={0.08} duration={0.5} y={14}>
        <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16} duration={0.5} y={14}>
          <p className="text-slate-600 dark:text-blue-300 font-body max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
