import { navItems, site } from '../data/site'
import { scrollToId } from '../lib/scroll'
import { InstagramIcon, PinterestIcon, TelegramIcon } from './ui/BrandIcons'

const socialLinks = [
  { label: 'Telegram kanal', href: site.telegramChannel, Icon: TelegramIcon },
  { label: 'Instagram', href: site.instagram, Icon: InstagramIcon },
  { label: 'Pinterest', href: site.pinterest, Icon: PinterestIcon },
]

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2/60">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-3xl font-extrabold tracking-tight">
              SM<span className="text-accent">.</span>{' '}
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">/ {site.name}</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              4 yillik tajribaga ega grafik dizayner. Branding, SMM, reklama va kreativ dizayn yechimlari — g‘oyangizdan natijagacha.
            </p>
          </div>

          <nav aria-label="Sayt bo'limlari" className="md:col-span-3">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Bo‘limlar</h2>
            <ul className="space-y-2.5">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToId(n.id)
                    }}
                    className="text-sm text-fg/90 transition-colors hover:text-accent"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Aloqa</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={site.telegramPersonal} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  Telegram: @{site.telegramPersonalUsername}
                </a>
              </li>
              {site.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="transition-colors hover:text-accent">{p.display}</a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (yangi oynada ochiladi)`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:bg-accent hover:text-ink"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-line pt-6 text-xs text-muted">
          © {YEAR} Salohiddin Mahmudov. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  )
}
