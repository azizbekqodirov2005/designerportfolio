export interface Collaboration {
  id: string
  name: string
  location?: string
  type: string
  description: string
  /** src/assets/images/ ichidagi logotip/rasm fayl nomi (ixtiyoriy) */
  image?: string
}

export const collaborations: Collaboration[] = [
  {
    id: 'mendeleyev',
    name: 'Mendeleyev maktablari',
    type: "Freelance · Ta'lim muassasalari",
    description: "Ta'lim muassasalari uchun turli grafik dizayn materiallari tayyorlangan.",
    image: 'logo-mendeleyev.png',
  },
  {
    id: 'oquv-markazlari',
    name: "O‘quv markazlari",
    type: "Freelance · Ta'lim markazlari",
    description: "Ta'lim markazlari uchun reklama va vizual dizayn loyihalari amalga oshirilgan.",
  },
  {
    id: 'uz-km',
    name: 'UZ K&M',
    location: 'Andijon',
    type: 'Onlayn hamkorlik',
    description: "Onlayn formatda grafik dizayn yo‘nalishida hamkorlik qilingan.",
    image: 'logo-uz-km.png',
  },
  {
    id: 'ads-uz',
    name: 'ADS UZ',
    location: 'Toshkent',
    type: 'Professional hamkorlik',
    description: "Kursni tamomlaganidan so‘ng ADS UZ bilan professional hamkorlik qilgan.",
    image: 'logo-ads-uz.png',
  },
]
