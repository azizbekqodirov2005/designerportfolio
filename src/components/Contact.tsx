import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { site } from '../data/site'
import { TelegramIcon } from './ui/BrandIcons'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const serviceOptions = ['Logotip va branding', 'SMM dizayn', 'Reklama dizayni', 'Qadoq dizayni', 'Boshqa']

interface Errors {
  name?: string
  phone?: string
  service?: string
  message?: string
}

/** O'zbekiston raqami: 9 ta raqam yoki 998 bilan 12 ta raqam */
function isValidPhone(raw: string) {
  const d = raw.replace(/\D/g, '')
  return d.length === 9 || (d.length === 12 && d.startsWith('998'))
}

function buildMessage(v: { name: string; phone: string; service: string; message: string }) {
  return [
    'Assalomu alaykum, Salohiddin! Saytingizdan yozyapman.',
    '',
    `👤 Ism: ${v.name.trim()}`,
    `📞 Telefon: ${v.phone.trim()}`,
    `🎨 Xizmat: ${v.service}`,
    `📝 Loyiha haqida: ${v.message.trim()}`,
  ].join('\n')
}

type Handoff =
  | { status: 'idle' }
  | { status: 'ready'; text: string; copied: boolean; opened: boolean }

const fieldClass =
  'w-full border border-line bg-ink px-4 py-3.5 text-base text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none'

export default function Contact() {
  const [values, setValues] = useState({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [handoff, setHandoff] = useState<Handoff>({ status: 'idle' })
  const [recopied, setRecopied] = useState(false)

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((s) => ({ ...s, [k]: e.target.value }))
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }))
  }

  const validate = (): Errors => {
    const e: Errors = {}
    if (values.name.trim().length < 2) e.name = 'Iltimos, ismingizni kiriting.'
    if (!isValidPhone(values.phone)) e.phone = "Telefon raqamni to'g'ri kiriting (masalan: +998 90 123 45 67)."
    if (!values.service) e.service = 'Kerakli xizmatni tanlang.'
    if (values.message.trim().length < 5) e.message = "Loyiha haqida qisqacha yozing (kamida 5 ta belgi)."
    return e
  }

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) {
      const first = (['name', 'phone', 'service', 'message'] as const).find((k) => e[k])
      if (first) document.getElementById(`field-${first}`)?.focus()
      return
    }

    const text = buildMessage(values)
    const url = `${site.telegramPersonal}?text=${encodeURIComponent(text)}`

    // Popup bloklanmasligi uchun foydalanuvchi bosishi zahoti, sinxron ochamiz
    const win = window.open(url, '_blank', 'noopener,noreferrer')
    const opened = win !== null

    const finish = (copied: boolean) => setHandoff({ status: 'ready', text, copied, opened })
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(
        () => finish(true),
        () => finish(false),
      )
    } else {
      finish(false)
    }
  }

  const copyAgain = async () => {
    if (handoff.status !== 'ready') return
    try {
      await navigator.clipboard.writeText(handoff.text)
      setRecopied(true)
      setTimeout(() => setRecopied(false), 2200)
    } catch {
      // Nusxalab bo'lmasa — foydalanuvchi matnni qo'lda belgilab oladi (textarea tanlanadi)
      document.getElementById('handoff-text')?.focus()
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div className="absolute -left-40 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          index="09"
          label="Aloqa"
          title={
            <>
              Keling, g‘oyangizni <span className="text-accent">birgalikda</span> amalga oshiramiz.
            </>
          }
          subtitle="Yangi loyiha, hamkorlik yoki dizayn buyurtmasi bo‘yicha bog‘laning. G‘oyangizni professional dizayn orqali amalga oshirishga yordam beraman."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-4 lg:col-span-5">
            <Reveal>
              <a
                href={site.telegramPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 bg-accent p-6 text-ink transition-transform hover:scale-[1.02] active:scale-[0.99]"
              >
                <span className="flex items-center gap-4">
                  <TelegramIcon className="h-8 w-8" />
                  <span>
                    <span className="block text-lg font-extrabold">Telegram orqali bog‘lanish</span>
                    <span className="block text-sm font-medium opacity-70">@{site.telegramPersonalUsername}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-line p-6">
                <a href={site.phones[0].href} className="group mb-5 flex items-center gap-4 text-lg font-extrabold hover:text-accent">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-line text-accent transition-colors group-hover:border-accent">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  Telefon orqali bog‘lanish
                </a>
                <ul className="space-y-1 border-t border-line pt-4">
                  {site.phones.map((p) => (
                    <li key={p.href}>
                      <a href={p.href} className="flex items-center justify-between py-3 text-xl font-bold tracking-tight transition-colors hover:text-accent sm:text-2xl">
                        {p.display}
                        <ArrowUpRight className="h-5 w-5 text-muted" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={onSubmit} noValidate className="space-y-5 border border-line bg-ink-2/60 p-6 sm:p-9" aria-label="Buyurtma shakli">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="field-name" className="mb-2 block text-sm font-semibold">Ismingiz</label>
                  <input
                    id="field-name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={set('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'err-name' : undefined}
                    className={fieldClass}
                    placeholder="Ismingiz"
                  />
                  {errors.name && <p id="err-name" role="alert" className="mt-2 text-sm text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="field-phone" className="mb-2 block text-sm font-semibold">Telefon raqamingiz</label>
                  <input
                    id="field-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={set('phone')}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'err-phone' : undefined}
                    className={fieldClass}
                    placeholder="+998 90 123 45 67"
                  />
                  {errors.phone && <p id="err-phone" role="alert" className="mt-2 text-sm text-red-400">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="field-service" className="mb-2 block text-sm font-semibold">Qanday xizmat kerak?</label>
                <select
                  id="field-service"
                  name="service"
                  value={values.service}
                  onChange={set('service')}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'err-service' : undefined}
                  className={`${fieldClass} appearance-none`}
                >
                  <option value="" disabled>Xizmatni tanlang</option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {errors.service && <p id="err-service" role="alert" className="mt-2 text-sm text-red-400">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="field-message" className="mb-2 block text-sm font-semibold">Loyiha haqida qisqacha ma&apos;lumot</label>
                <textarea
                  id="field-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={set('message')}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'err-message' : undefined}
                  className={`${fieldClass} resize-y`}
                  placeholder="Nima kerak, qachongacha, qanday uslub yoqadi..."
                />
                {errors.message && <p id="err-message" role="alert" className="mt-2 text-sm text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-ink transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
              >
                Xabar yuborish
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
              <p className="text-xs leading-relaxed text-muted">
                Shakl serverga ma&apos;lumot yubormaydi: xabar tayyorlanib, Telegram orqali Salohiddinga yuborish uchun ochiladi.
              </p>

              <AnimatePresence>
                {handoff.status === 'ready' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                    role="status"
                  >
                    <div className="border border-accent/50 bg-ink p-5">
                      <p className="text-sm font-bold text-accent">Xabar tayyor — hali yuborilgani yo‘q</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {handoff.opened
                          ? 'Telegram ochildi. Xabar yozish maydonida matn bo‘lmasa, ' + (handoff.copied ? 'nusxalangan matnni qo‘yib (Ctrl/Cmd+V)' : 'quyidagi matnni nusxalab') + ' yuboring.'
                          : "Telegram oynasi ochilmadi (brauzer bloklagan bo'lishi mumkin). Quyidagi matnni nusxalab, Telegramda yuboring."}
                        {handoff.copied && ' Matn nusxalandi.'}
                      </p>
                      <textarea
                        id="handoff-text"
                        readOnly
                        value={handoff.text}
                        rows={6}
                        onFocus={(e) => e.currentTarget.select()}
                        className="mt-4 w-full resize-none border border-line bg-ink-2 p-3 text-sm text-fg/90"
                        aria-label="Tayyorlangan xabar matni"
                      />
                      <div className="mt-3 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={copyAgain}
                          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                        >
                          {recopied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                          {recopied ? 'Nusxalandi' : 'Matnni nusxalash'}
                        </button>
                        <a
                          href={site.telegramPersonal}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-bold text-ink"
                        >
                          <TelegramIcon className="h-4 w-4" /> Telegramni ochish
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
