import { ArrowUpRight } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { site } from '../data/site'
import { InstagramIcon, PinterestIcon, TelegramIcon } from './ui/BrandIcons'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

interface Social {
  name: string
  username: string
  href: string
  description: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const socials: Social[] = [
  {
    name: 'Telegram',
    username: '@Creative_Dizayner1',
    href: site.telegramChannel,
    description: 'Dizayn bo‘yicha yangiliklar va ta’lim materiallari kanali.',
    Icon: TelegramIcon,
  },
  {
    name: 'Instagram',
    username: '@teacher_salohiddin',
    href: site.instagram,
    description: 'Ishlar, jarayon va kundalik dizayn hayotidan lavhalar.',
    Icon: InstagramIcon,
  },
  {
    name: 'Pinterest',
    username: '@maxmudov_7l',
    href: site.pinterest,
    description: 'Vizual ilhom va g‘oyalar to‘plami.',
    Icon: PinterestIcon,
  },
]

export default function SocialMedia() {
  return (
    <section id="social" className="border-t border-line bg-ink-2/50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <SectionHeading index="08" label="Tarmoqlar" title="Ijtimoiy tarmoqlarda" />
        <ul className="grid gap-5 md:grid-cols-3">
          {socials.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 0.08}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.name}: ${s.username} (yangi oynada ochiladi)`}
                className="group relative flex h-full flex-col justify-between overflow-hidden border border-line bg-ink p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent"
              >
                <span className="absolute inset-x-0 bottom-0 h-0 bg-accent transition-all duration-300 group-hover:h-1" aria-hidden="true" />
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-line text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                    <s.Icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true" />
                </div>
                <div className="mt-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{s.name}</p>
                  <p className="mt-2 break-all text-xl font-extrabold">{s.username}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
