import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

const ids = navItems.map((n) => n.id)

export default function Navbar() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menyu ochiq bo'lganda sahifa skrollini to'xtatish + Escape bilan yopish
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Desktop o'lchamga o'tganda mobil menyuni yopish
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    // Menyu yopilgach (body overflow tiklangach) skroll qilamiz
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Asosiy navigatsiya" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            go('home')
          }}
          className="flex items-baseline gap-2 text-sm font-extrabold tracking-tight"
          aria-label="Bosh sahifaga o'tish"
        >
          <span className="text-xl">
            SM<span className="text-accent">.</span>
          </span>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-muted sm:inline">
            / {site.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  go(item.id)
                }}
                aria-current={active === item.id ? 'true' : undefined}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-fg ${
                  active === item.id ? 'text-fg' : 'text-muted'
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span layoutId="nav-dot" className="absolute inset-x-3 -bottom-0.5 h-px bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              go('contact')
            }}
            className="group hidden items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] active:scale-95 sm:inline-flex"
          >
            Loyiha boshlash
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-fg transition-colors hover:border-accent lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-ink lg:hidden"
          >
            <ul className="flex h-full flex-col justify-center gap-1 px-5 pb-10 sm:px-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      go(item.id)
                    }}
                    className={`flex items-baseline gap-4 border-b border-line py-3.5 text-3xl font-extrabold tracking-tight ${
                      active === item.id ? 'text-accent' : 'text-fg'
                    }`}
                  >
                    <span className="text-xs font-semibold text-muted">0{i + 1}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-6 sm:hidden">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    go('contact')
                  }}
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-bold text-ink"
                >
                  Loyiha boshlash <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
