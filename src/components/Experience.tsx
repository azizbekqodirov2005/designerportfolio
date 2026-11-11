import { Briefcase, CalendarDays } from 'lucide-react'
import { experience } from '../data/experience'
import Collaborations from './Collaborations'
import ImagePlaceholder from './ui/ImagePlaceholder'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-ink-2/50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          index="02"
          label="Tajriba"
          title="Professional faoliyatim"
          subtitle="Har bir tajriba — yangi bilim, yangi yondashuv va yangi imkoniyat."
        />

        <div className="relative">
          {/* vertikal chiziq */}
          <div className="absolute bottom-0 left-[11px] top-2 w-px bg-line md:left-1/2" aria-hidden="true" />

          <p className="relative mb-8 ml-9 inline-flex items-center gap-2 border border-accent/40 bg-ink px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent md:ml-0 md:left-1/2 md:-translate-x-1/2">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            May 2024 – Yanvar 2026 · parallel ishlagan
          </p>

          <ol className="grid gap-8 md:grid-cols-2 md:gap-x-16">
            {experience.map((e, i) => (
              <Reveal as="li" key={e.id} delay={i * 0.1} className="relative pl-9 md:pl-0">
                <span
                  className={`absolute left-0 top-8 h-[23px] w-[23px] rounded-full border-2 border-accent bg-ink md:top-10 ${
                    i === 0 ? 'md:-right-[calc(2rem+11.5px)] md:left-auto' : 'md:-left-[calc(2rem+11.5px)]'
                  }`}
                  aria-hidden="true"
                />
                <article className="group border border-line bg-ink p-6 transition-colors hover:border-accent/60 sm:p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden border border-line">
                      {/* Logotip: src/assets/images/{logo} */}
                      <ImagePlaceholder file={e.logo} alt={`${e.company} logotipi`} hint="Logo" compact imgClassName="object-contain p-2" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
                      <Briefcase className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                      {e.department}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">{e.company}</h3>
                  <p className="mt-2 text-base font-semibold text-accent">{e.position}</p>
                  <p className="mt-1 text-sm text-muted">{e.period}</p>
                  <p className="mt-5 border-t border-line pt-5 text-sm leading-relaxed text-muted sm:text-base">{e.description}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>

        <Collaborations />
      </div>
    </section>
  )
}
