/**
 * PORTFOLIO MA'LUMOTLARI
 * ----------------------
 * Yangi ish qo'shish uchun:
 *  1) Rasmni `src/assets/images/portfolio/` papkasiga tashlang (masalan: `branding-01.jpg`)
 *  2) Quyidagi ro'yxatga yangi obyekt qo'shing va `image` maydoniga fayl nomini yozing
 *  3) `placeholder: true` ni olib tashlang (yoki `false` qiling)
 *
 * Hozirgi yozuvlar — FAQAT NAMUNA (placeholder). Ular haqiqiy mijoz ishlari emas
 * va saytda "Namuna" belgisi bilan ko'rsatiladi.
 */
export type PortfolioCategory = 'Branding' | 'SMM dizayn' | 'Reklama' | 'Poster' | 'Qadoq dizayni'

export const portfolioCategories: ('Barchasi' | PortfolioCategory)[] = [
  'Barchasi',
  'Branding',
  'SMM dizayn',
  'Reklama',
  'Poster',
  'Qadoq dizayni',
]

export interface PortfolioItem {
  id: string
  title: string
  category: PortfolioCategory
  description: string
  /** src/assets/images/ ichidagi fayl nomi. Topilmasa — placeholder ko'rsatiladi */
  image?: string
  /** Rasm nisbati (masonry uchun): kenglik / balandlik */
  aspect: 'portrait' | 'square' | 'landscape' | 'tall'
  /** true bo'lsa — "Namuna" belgisi ko'rsatiladi */
  placeholder?: boolean
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Branding loyiha',
    category: 'Branding',
    description: "Bu yerga logotip va firma uslubi loyihasining tavsifi yoziladi. Hozircha — namuna.",
    image: 'portfolio/branding-01.jpg',
    aspect: 'portrait',
    placeholder: true,
  },
  {
    id: 'p2',
    title: 'SMM dizayn to‘plami',
    category: 'SMM dizayn',
    description: "Instagram post va stories to'plamining tavsifi shu yerda bo'ladi. Hozircha — namuna.",
    image: 'portfolio/smm-01.jpg',
    aspect: 'square',
    placeholder: true,
  },
  {
    id: 'p3',
    title: 'Reklama banneri',
    category: 'Reklama',
    description: "Reklama banneri loyihasining tavsifi shu yerda bo'ladi. Hozircha — namuna.",
    image: 'portfolio/reklama-01.jpg',
    aspect: 'landscape',
    placeholder: true,
  },
  {
    id: 'p4',
    title: 'Poster dizayni',
    category: 'Poster',
    description: "Poster loyihasining tavsifi shu yerda bo'ladi. Hozircha — namuna.",
    image: 'portfolio/poster-01.jpg',
    aspect: 'tall',
    placeholder: true,
  },
  {
    id: 'p5',
    title: 'Qadoq dizayni',
    category: 'Qadoq dizayni',
    description: "Mahsulot qadog'i loyihasining tavsifi shu yerda bo'ladi. Hozircha — namuna.",
    image: 'portfolio/packaging-01.jpg',
    aspect: 'square',
    placeholder: true,
  },
  {
    id: 'p6',
    title: 'Brend identika',
    category: 'Branding',
    description: "Brend identika loyihasining tavsifi shu yerda bo'ladi. Hozircha — namuna.",
    image: 'portfolio/branding-02.jpg',
    aspect: 'landscape',
    placeholder: true,
  },
  {
    id: 'p7',
    title: 'Stories seriyasi',
    category: 'SMM dizayn',
    description: "Stories seriyasi loyihasining tavsifi shu yerda bo'ladi. Hozircha — namuna.",
    image: 'portfolio/smm-02.jpg',
    aspect: 'tall',
    placeholder: true,
  },
  {
    id: 'p8',
    title: 'Aksiya posteri',
    category: 'Poster',
    description: "Aksiya posteri loyihasining tavsifi shu yerda bo'ladi. Hozircha — namuna.",
    image: 'portfolio/poster-02.jpg',
    aspect: 'portrait',
    placeholder: true,
  },
]
