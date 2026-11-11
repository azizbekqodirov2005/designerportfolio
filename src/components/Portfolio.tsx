import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { portfolio, portfolioCategories, type PortfolioItem } from '../data/portfolio'
import PortfolioModal from './PortfolioModal'
import ImagePlaceholder from './ui/ImagePlaceholder'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

type Filter = (typeof portfolioCategories)[number]

const aspectClass: Record<PortfolioItem['aspect'], string> = {
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  tall: 'aspect-[3/4.6]',
}

export default function Portfolio() {
  const reduce = useReducedMotion()
  const [filter, setFilter] = useState<Filter>('Barchasi')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = useMemo(
    () => (filter === 'Barchasi' ? portfolio : portfolio.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="works" className="border-t border-line bg-ink-2/50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          index="05"
          label="Portfolio"
          title="Tanlangan ishlarim"
          subtitle="Har bir dizayn ortida o‘ziga xos g‘oya va yondashuv bor."
        />

        <Reveal>
          <div role="group" aria-label="Ishlarni kategoriya bo'yicha filtrlash" className="mb-10 flex flex-wrap gap-2">
            {portfolioCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  filter === c ? 'border-accent bg-accent text-ink' : 'border-line text-muted hover:border-fg/40 hover:text-fg'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {portfolio.some((p) => p.placeholder) && (
          <p className="mb-8 border-l-2 border-accent pl-4 text-sm text-muted">
            Quyidagi kartochkalar — <strong className="text-fg">namuna (placeholder)</strong>. Ular haqiqiy mijoz ishlari emas;
            real dizaynlar yuklangach almashtiriladi.
          </p>
        )}

        <motion.ul layout={!reduce} className="columns-1 gap-5 sm:columns-2 lg:columns-3" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {items.map((p, idx) => (
              <motion.li
                key={p.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(idx)}
                  aria-label={`${p.title} — ${p.category}. Batafsil ko'rish`}
                  className="group relative block w-full overflow-hidden border border-line text-left"
                >
                  <div className={`${aspectClass[p.aspect]} w-full overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105`}>
                    <ImagePlaceholder file={p.image} alt={`${p.title} — ${p.category}`} hint={p.placeholder ? 'Namuna · rasm joyi' : 'Rasm joyi'} />
                  </div>
                  {p.placeholder && (
                    <span className="absolute left-3 top-3 bg-ink/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                      Namuna
                    </span>
                  )}
                  <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{p.category}</span>
                    <span className="mt-1 flex items-center justify-between gap-3 text-lg font-extrabold">
                      {p.title}
                      <Maximize2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {items.length === 0 && <p className="py-16 text-center text-muted">Bu kategoriyada hozircha ish yo‘q.</p>}
      </div>

      <PortfolioModal
        items={items}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={(i) => setOpenIndex(i)}
      />
    </section>
  )
}
