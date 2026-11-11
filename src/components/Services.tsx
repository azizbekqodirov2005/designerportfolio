import { ArrowUpRight, Megaphone, Package, PenTool, Printer, Shapes, Smartphone } from 'lucide-react'
import type { ComponentType } from 'react'
import { services, type Service } from '../data/services'
import { scrollToId } from '../lib/scroll'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const iconMap: Record<Service['icon'], ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>> = {
  branding: PenTool,
  social: Smartphone,
  advertising: Megaphone,
  print: Printer,
  packaging: Package,
  creative: Shapes,
}

/** Har bir xizmat uchun o'ziga xos dekorativ motiv (hover'da jonlanadi) */
function Motif({ id }: { id: Service['icon'] }) {
  const base = 'pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-accent/0 transition-all duration-500 group-hover:text-accent/25'
  switch (id) {
    case 'branding':
      return (
        <svg viewBox="0 0 100 100" className={`${base} group-hover:rotate-12`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="50" cy="50" r="38" />
          <circle cx="50" cy="50" r="22" />
          <path d="M12 50h76M50 12v76" />
        </svg>
      )
    case 'social':
      return (
        <svg viewBox="0 0 100 100" className={`${base} group-hover:-translate-x-1 group-hover:translate-y-1`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="28" y="10" width="44" height="80" rx="8" />
          <rect x="36" y="20" width="28" height="28" />
          <path d="M36 58h28M36 66h18" />
        </svg>
      )
    case 'advertising':
      return (
        <svg viewBox="0 0 100 100" className={`${base} group-hover:scale-110`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M10 60 70 20v60L10 40Z" />
          <path d="M80 36c6 6 6 22 0 28M88 26c12 12 12 36 0 48" />
        </svg>
      )
    case 'print':
      return (
        <svg viewBox="0 0 100 100" className={`${base} group-hover:-rotate-6`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M20 20h60v60H20Z" />
          <path d="M20 20 8 8M80 20l12-12M20 80 8 92M80 80l12 12" />
          <circle cx="50" cy="50" r="14" />
        </svg>
      )
    case 'packaging':
      return (
        <svg viewBox="0 0 100 100" className={`${base} group-hover:-translate-y-1`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M50 10 88 30v40L50 90 12 70V30Z" />
          <path d="M12 30l38 20 38-20M50 50v40" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 100 100" className={`${base} group-hover:rotate-45`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M50 8 62 38l30 12-30 12-12 30-12-30L8 50l30-12Z" />
        </svg>
      )
  }
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading index="04" label="Xizmatlar" title="Biznesingiz uchun qanday dizayn yarataman?" />

      <ul className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon]
          return (
            <Reveal as="li" key={s.id} delay={(i % 3) * 0.08} className="bg-ink">
              <article className="group relative flex h-full min-h-[22rem] flex-col overflow-hidden p-7 transition-colors duration-300 hover:bg-ink-2 sm:p-9">
                <Motif id={s.icon} />
                <div className="mb-10 flex items-start justify-between">
                  <span className="text-5xl font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] transition-all duration-300 group-hover:text-accent group-hover:[-webkit-text-stroke:1px_transparent]">
                    {s.number}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-line text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                    <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden={true} />
                  </span>
                </div>
                <h3 className="text-xl font-extrabold leading-tight sm:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm text-fg/90">
                      <span className="h-px w-4 bg-accent transition-all duration-300 group-hover:w-7" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => scrollToId('contact')}
                  className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-bold text-muted transition-colors group-hover:text-accent focus-visible:text-accent"
                >
                  Buyurtma berish
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
              </article>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
