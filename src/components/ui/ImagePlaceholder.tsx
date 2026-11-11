import { ImageIcon } from 'lucide-react'
import { getImage } from '../../lib/assets'

interface Props {
  /** src/assets/images/ ichidagi fayl nomi. Topilmasa placeholder ko'rsatiladi. */
  file?: string
  alt: string
  /** Placeholder ustida chiqadigan yozuv (qaysi rasm kerakligi) */
  hint?: string
  className?: string
  imgClassName?: string
  eager?: boolean
  /** Kichik joylar (logo) uchun: faqat ikonka, matnsiz */
  compact?: boolean
}

/**
 * Almashtiriladigan rasm. Fayl mavjud bo'lsa — haqiqiy rasm (lazy loading bilan),
 * aks holda — fayl nomini ko'rsatuvchi placeholder.
 */
export default function ImagePlaceholder({ file, alt, hint, className = '', imgClassName = '', eager, compact }: Props) {
  const src = getImage(file)
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName} ${className}`}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={`${alt} (placeholder)`}
      className={`placeholder-stripes flex h-full w-full flex-col items-center justify-center gap-2 bg-ink-2 p-2 sm:p-4 text-center ${className}`}
    >
      <ImageIcon className="h-6 w-6 text-muted" strokeWidth={1.5} aria-hidden="true" />
      {!compact && (
        <>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">{hint ?? 'Rasm joyi'}</span>
          {file && <code className="max-w-full break-all text-[10px] text-accent/80">{file}</code>}
        </>
      )}
    </div>
  )
}
