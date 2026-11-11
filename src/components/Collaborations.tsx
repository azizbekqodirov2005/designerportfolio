import { MapPin } from 'lucide-react'
import { collaborations } from '../data/collaborations'
import ImagePlaceholder from './ui/ImagePlaceholder'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Collaborations() {
  return (
    <div id="collaborations" className="mt-24 lg:mt-32">
      <SectionHeading
        index="03"
        label="Hamkorlik"
        title="Freelance va hamkorlik loyihalari"
        subtitle="Turli soha va tashkilotlar bilan amalga oshirilgan hamkorliklar."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {collaborations.map((c, i) => (
          <Reveal as="li" key={c.id} delay={i * 0.07}>
            <article className={`group flex h-full flex-col border border-line bg-ink transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 ${i % 2 === 1 ? 'lg:mt-8' : ''}`}>
              <div className="aspect-[16/10] overflow-hidden border-b border-line">
                {/* Logotip/rasm: src/assets/images/{image} */}
                <ImagePlaceholder file={c.image} alt={`${c.name} logotipi`} hint="Logo / rasm" imgClassName="object-contain p-6" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{c.type}</p>
                <h3 className="mt-3 text-xl font-extrabold leading-tight">{c.name}</h3>
                {c.location && (
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {c.location}
                  </p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-muted">{c.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
