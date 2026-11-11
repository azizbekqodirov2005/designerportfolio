import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  index: string
  label: string
  title: ReactNode
  subtitle?: string
  id?: string
  className?: string
}

export default function SectionHeading({ index, label, title, subtitle, id, className = '' }: Props) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <Reveal>
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          <span className="text-accent">{index}</span>
          <span className="h-px w-10 bg-line" />
          <span>{label}</span>
        </p>
      </Reveal>
      <Reveal delay={0.08} as="h2" className="max-w-4xl text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        <span id={id}>{title}</span>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16} as="p" className="mt-5 max-w-2xl text-base text-muted sm:text-lg">
          {subtitle}
        </Reveal>
      )}
    </div>
  )
}
