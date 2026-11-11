import { Layers, Lightbulb, Palette, Sparkles } from 'lucide-react'
import { siteImages } from '../data/site'
import ImagePlaceholder from './ui/ImagePlaceholder'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const points = [
  { icon: Sparkles, title: '4 yillik tajriba', text: 'Marketing bo‘limi, freelance va onlayn hamkorliklar orqali shakllangan amaliy bilim.' },
  { icon: Palette, title: 'Kreativ yondashuv', text: 'Har bir loyiha uchun alohida g‘oya va vizual til izlayman — shablonga tayanmayman.' },
  { icon: Lightbulb, title: 'Professional falsafa', text: 'Dizayn chiroyli bo‘lishi bilan birga vazifani hal qilishi va natija berishi kerak.' },
  { icon: Layers, title: 'Turli sohalar bilan ishlash', text: 'Ta’lim, savdo, kafe va boshqa yo‘nalishdagi kompaniyalar bilan ishlash tajribasi.' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading index="01" label="Tanishuv" title="Men haqimda" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden border border-line lg:aspect-[3/4]">
              {/* Haqiqiy foto: src/assets/images/portrait-about.jpg */}
              <ImagePlaceholder file={siteImages.aboutPortrait} alt="Salohiddin Mahmudov" hint="Portret uchun joy" />
            </div>
            <div className="absolute -bottom-5 right-4 bg-accent px-5 py-4 text-ink sm:-right-5">
              <p className="text-4xl font-extrabold leading-none">04+</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider">yil tajriba</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-6">
          <Reveal as="p" className="text-xl font-semibold leading-snug sm:text-2xl lg:text-3xl">
            Grafik dizayn men uchun shunchaki kasb emas, balki g‘oyalarni <span className="text-accent">vizual hikoyaga</span> aylantirish san&apos;atidir.
          </Reveal>
          <Reveal delay={0.08} as="p" className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            4 yillik faoliyatim davomida turli sohalardagi kompaniyalar, ta&apos;lim muassasalari va bizneslar bilan hamkorlik qildim. Marketing bo‘limida ishlash, mustaqil loyihalar va onlayn hamkorliklar orqali tajribamni oshirib bordim.
          </Reveal>
          <Reveal delay={0.14} as="p" className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Bugungi kunda Qo‘qon IT Academy’da grafik dizayn yo‘nalishi bo‘yicha dars beraman. O‘z tajribamni yangi avlod dizaynerlariga ulashib, ularning professional rivojlanishiga hissa qo‘shaman.
          </Reveal>

          <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal as="li" key={p.title} delay={0.05 * i} className="bg-ink p-6">
                <p.icon className="mb-4 h-6 w-6 text-accent" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
