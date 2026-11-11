import { ArrowUpRight, BookOpenCheck, BriefcaseBusiness, Hammer, Users } from 'lucide-react'
import { site, siteImages } from '../data/site'
import ImagePlaceholder from './ui/ImagePlaceholder'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const highlights = [
  { icon: Users, big: '50+', text: 'o‘quvchi' },
  { icon: BriefcaseBusiness, big: '10+', text: 'ish bilan ta\'minlangan shogird' },
  { icon: Hammer, big: 'Amaliy', text: 'mashg‘ulotlar' },
  { icon: BookOpenCheck, big: 'Real', text: 'loyihalar asosida ta\'lim' },
]

export default function Teaching() {
  return (
    <section id="teaching" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading index="07" label="Ta'lim" title="Bilim ulashish — kelajak yaratish" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <Reveal as="p" className="text-lg leading-relaxed text-muted sm:text-xl">
            Hozirda <span className="font-semibold text-fg">Qo‘qon IT Academy</span>’da grafik dizayn yo‘nalishi bo‘yicha dars beraman. Maqsadim — o‘quvchilarga nafaqat dizayn dasturlarini, balki kreativ fikrlash, professional yondashuv va real loyihalar ustida ishlash ko‘nikmalarini ham o‘rgatish.
          </Reveal>

          <ul className="mt-10 grid grid-cols-2 gap-px border border-line bg-line">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.text} delay={i * 0.06} className="bg-ink p-5 sm:p-6">
                <h.icon className="mb-4 h-5 w-5 text-accent" strokeWidth={1.7} aria-hidden="true" />
                <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">{h.big}</p>
                <p className="mt-1 text-sm text-muted">{h.text}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <a
              href={site.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-ink transition-transform hover:scale-[1.03] active:scale-95"
            >
              Telegram kanalga o&apos;tish
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-5 gap-4 lg:col-span-6">
          <Reveal className="col-span-3">
            <div className="aspect-[3/4] overflow-hidden border border-line">
              {/* Sinf xonasi foto: src/assets/images/teaching-classroom-1.jpg */}
              <ImagePlaceholder file={siteImages.classroom1} alt="Qo‘qon IT Academy sinf xonasi" hint="Dars / sinf foto" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="col-span-2 pt-12">
            <div className="aspect-[3/5] overflow-hidden border border-line">
              {/* Sinf xonasi foto: src/assets/images/teaching-classroom-2.jpg */}
              <ImagePlaceholder file={siteImages.classroom2} alt="Dars jarayoni" hint="Dars / sinf foto" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
