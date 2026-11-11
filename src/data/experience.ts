export interface ExperienceItem {
  id: string
  company: string
  position: string
  department: string
  period: string
  description: string
  /** src/assets/images/ ichidagi logotip fayl nomi (ixtiyoriy) */
  logo?: string
}

/**
 * Ikkala ish joyi BIR VAQTDA (parallel) bo'lgan — shuning uchun period bir xil.
 */
export const experience: ExperienceItem[] = [
  {
    id: 'toyona-savdo',
    company: "To'yona Savdo",
    position: 'Grafik dizayner',
    department: "Marketing bo'limi",
    period: 'May 2024 – Yanvar 2026',
    description:
      "Marketing bo‘limida grafik dizayner sifatida faoliyat yuritib, kompaniyaning vizual materiallari va marketing dizaynlari ustida ishlagan.",
    logo: 'logo-toyona-savdo.png',
  },
  {
    id: 'qahvachi-cafe',
    company: 'Qahvachi Cafe',
    position: 'Grafik dizayner',
    department: "Marketing bo'limi",
    period: 'May 2024 – Yanvar 2026',
    description:
      'Kafe marketing faoliyati uchun turli grafik materiallar va reklama vizuallarini tayyorlagan.',
    logo: 'logo-qahvachi-cafe.png',
  },
]
