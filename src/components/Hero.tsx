import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { site, siteImages, stats } from '../data/site'
import { scrollToId } from '../lib/scroll'
import ImagePlaceholder from './ui/ImagePlaceholder'

const ease = [0.22, 1, 0.36, 1] as const

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduce = useReducedMotion()
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  })

  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* fon: setka + yumshoq yorug'lik + sekin aylanuvchi halqa */}
      <div className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]" aria-hidden="true" />
      <div className="absolute -right-40 top-10 -z-10 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />
      <div className="animate-spin-slow absolute -left-32 bottom-10 -z-10 hidden h-80 w-80 rounded-full border border-dashed border-line md:block" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-24">
        <div className="lg:col-span-7">
          <motion.p
            {...fade(0.1)}
            className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            GRAFIK DIZAYNER · CREATIVE PROFESSIONAL
          </motion.p>

          <h1 className="text-[2.4rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.4rem] xl:text-7xl">
            <Line delay={0.15}>Men g‘oyalarni</Line>
            <Line delay={0.27}>
              <span className="text-accent">unutilmas vizual</span>
            </Line>
            <Line delay={0.39}>
              <span className="text-accent">tajribaga</span>
            </Line>
            <Line delay={0.51}>aylantiraman.</Line>
          </h1>

          <motion.p {...fade(0.6)} className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Men Salohiddin Mahmudov — 4 yillik tajribaga ega grafik dizayner. Brendlar, kompaniyalar va bizneslar uchun
            kreativ, zamonaviy va natijaga yo‘naltirilgan dizayn yechimlarini yarataman.
          </motion.p>

          <motion.div {...fade(0.72)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.telegramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-ink transition-transform hover:scale-[1.03] active:scale-95"
            >
              Loyihani boshlash
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('works')
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-4 text-base font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Ishlarimni ko‘rish
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* portret maydoni */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-line">
            {/* Haqiqiy foto: src/assets/images/portrait-salohiddin.jpg */}
            <ImagePlaceholder file={siteImages.portrait} alt="Salohiddin Mahmudov portreti" hint="Portret uchun joy" eager />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden border border-line bg-ink px-5 py-3 sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Hozir</p>
            <p className="text-sm font-bold">Qo‘qon IT Academy · Ustoz</p>
          </div>
          <div className="absolute -right-3 -top-3 grid h-20 w-20 place-items-center rounded-full bg-accent text-center text-[10px] font-extrabold uppercase leading-tight text-ink sm:-right-5 sm:-top-5 sm:h-24 sm:w-24">
            4+ yil
            <br />
            tajriba
          </div>
        </motion.div>
      </div>

      {/* statistika */}
      <motion.div {...fade(0.9)} className="border-y border-line bg-ink-2/60">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.short}
              className={`px-5 py-7 sm:px-8 ${i % 2 === 1 ? 'border-l border-line' : ''} ${i >= 2 ? 'border-t border-line lg:border-t-0' : ''} ${
                i > 0 ? 'lg:border-l lg:border-line' : ''
              }`}
            >
              <dt className="order-2 mt-1 text-xs text-muted sm:text-sm">{s.short}</dt>
              <dd className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {String(s.value).padStart(2, '0')}
                <span className="text-accent">{s.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  )
}
