import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/site'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)
  const shown = reduce ? to : n

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, to])

  return (
    <span ref={ref} aria-label={`${to}${suffix}`}>
      <span aria-hidden="true">
        {shown}
        <span className="text-accent">{suffix}</span>
      </span>
    </span>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden border-y border-line">
      <div className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading index="06" label="Natijalar" title="Raqamlar ortidagi natijalar" />
        <dl className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-ink p-8 sm:p-10">
              <dd className="text-6xl font-extrabold leading-none tracking-tighter sm:text-7xl xl:text-8xl">
                <Counter to={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-5 max-w-[14rem] border-t border-line pt-4 text-sm leading-snug text-muted">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
