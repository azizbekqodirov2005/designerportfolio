export interface Service {
  id: string
  number: string
  title: string
  description: string
  items: string[]
  /** Lucide ikonka nomi — Services.tsx ichidagi iconMap bilan mos */
  icon: 'branding' | 'social' | 'advertising' | 'print' | 'packaging' | 'creative'
}

export const services: Service[] = [
  {
    id: 'branding',
    number: '01',
    title: 'Branding & Logo Design',
    description: 'Brendingizning tanilishi va ishonchi uchun mustahkam vizual asos.',
    items: ['Logotip yaratish', 'Firma uslubi', 'Brand identity', 'Brend vizual konsepsiyasi'],
    icon: 'branding',
  },
  {
    id: 'social',
    number: '02',
    title: 'Social Media Design',
    description: "Ijtimoiy tarmoqlarda e'tiborni tortadigan va yagona uslubdagi vizuallar.",
    items: ['Instagram post va stories', 'SMM dizayn', 'Reklama bannerlari', 'Kontent vizuallari'],
    icon: 'social',
  },
  {
    id: 'advertising',
    number: '03',
    title: 'Advertising Design',
    description: 'Sotuvga va tanilishga xizmat qiladigan reklama materiallari.',
    items: ['Reklama bannerlari', 'Poster va flayerlar', 'Promo materiallar', 'Marketing dizaynlari'],
    icon: 'advertising',
  },
  {
    id: 'print',
    number: '04',
    title: 'Print Design',
    description: 'Bosmaga tayyor, aniq va sifatli poligrafiya maketlari.',
    items: ['Vizitkalar', 'Bukletlar', 'Kataloglar', 'Poligrafiya mahsulotlari'],
    icon: 'print',
  },
  {
    id: 'packaging',
    number: '05',
    title: 'Qadoq dizayni',
    description: "Mahsulotni javonda ajratib ko'rsatadigan qadoq va yorliq dizayni.",
    items: ['Mahsulot qadoqlari', 'Yorliqlar', 'Mahsulot vizuallari'],
    icon: 'packaging',
  },
  {
    id: 'creative',
    number: '06',
    title: 'Creative Design',
    description: "Standart doiradan chiqadigan, g'oyaga asoslangan vizual yechimlar.",
    items: ['Kreativ kompozitsiyalar', 'Photo manipulation', 'Zamonaviy vizual konsepsiyalar'],
    icon: 'creative',
  },
]
