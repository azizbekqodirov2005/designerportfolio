import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef } from 'react'
import type { PortfolioItem } from '../data/portfolio'
import ImagePlaceholder from './ui/ImagePlaceholder'

interface Props {
  items: PortfolioItem[]
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}

export default function PortfolioModal({ items, index, onClose, onChange }: Props) {
  const reduce = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)
  const open = index !== null && items[index] !== undefined
  const item = open ? items[index as number] : null

  const prev = useCallback(() => {
    if (index === null) return
    onChange((index - 1 + items.length) % items.length)
  }, [index, items.length, onChange])

  const next = useCallback(() => {
    if (index === null) return
    onChange((index + 1) % items.length)
  }, [index, items.length, onChange])

  useEffect(() => {
    if (!open) return
    lastFocused.current = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'Tab') {
        // oddiy focus tuzog'i
        const nodes = document.querySelectorAll<HTMLElement>('#portfolio-dialog button')
        if (nodes.length === 0) return
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      lastFocused.current?.focus?.()
    }
  }, [open, onClose, prev, next])

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          id="portfolio-dialog"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} — ${item.category}`}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              <span className="text-accent">{String((index as number) + 1).padStart(2, '0')}</span> / {String(items.length).padStart(2, '0')}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Yopish"
              className="grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Oldingi ish"
              className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-ink/70 transition-colors hover:border-accent hover:text-accent sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>

            <AnimatePresence mode="wait">
              <motion.figure
                key={item.id}
                initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex max-h-full w-full max-w-4xl flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="min-h-0 flex-1 overflow-hidden border border-line">
                  <div className="mx-auto aspect-[4/3] max-h-[55vh] w-full sm:max-h-[60vh]">
                    <ImagePlaceholder
                      file={item.image}
                      alt={`${item.title} — ${item.category}`}
                      hint={item.placeholder ? 'Namuna · rasm joyi' : 'Rasm joyi'}
                      imgClassName="object-contain"
                    />
                  </div>
                </div>
                <figcaption className="mt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {item.category}
                    {item.placeholder && <span className="ml-3 border border-accent/50 px-2 py-0.5 text-[10px]">Namuna</span>}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Keyingi ish"
              className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-ink/70 transition-colors hover:border-accent hover:text-accent sm:right-6"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="h-6 sm:h-10" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
