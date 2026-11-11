/**
 * Sayt bo'yicha asosiy ma'lumotlar: kontaktlar, navigatsiya, statistika.
 * Telefon, havola yoki raqamni o'zgartirish kerak bo'lsa — faqat shu yerda o'zgartiring.
 */
export const site = {
  name: 'Salohiddin Mahmudov',
  shortName: 'SM',
  role: 'Grafik dizayner',
  telegramChannel: 'https://t.me/Creative_Dizayner1',
  telegramPersonal: 'https://t.me/maxmudov_salohiddin',
  telegramPersonalUsername: 'maxmudov_salohiddin',
  instagram: 'https://www.instagram.com/teacher_salohiddin',
  pinterest: 'https://www.pinterest.com/maxmudov_7l/',
  phones: [
    { display: '+998 88 969 38 38', href: 'tel:+998889693838' },
    { display: '+998 77 146 44 66', href: 'tel:+998771464466' },
  ],
}

export const navItems = [
  { id: 'home', label: 'Bosh sahifa' },
  { id: 'about', label: 'Men haqimda' },
  { id: 'experience', label: 'Tajriba' },
  { id: 'services', label: 'Xizmatlar' },
  { id: 'works', label: 'Ishlarim' },
  { id: 'teaching', label: "Ta'lim" },
  { id: 'contact', label: 'Aloqa' },
] as const

/** Hero va statistika bo'limlarida ishlatiladi */
export const stats = [
  { value: 4, suffix: '+', label: 'yil professional tajriba', short: 'yil tajriba' },
  { value: 20, suffix: '+', label: 'kompaniya bilan hamkorlik', short: 'kompaniya bilan hamkorlik' },
  { value: 50, suffix: '+', label: "o'quvchi", short: 'shogird' },
  { value: 10, suffix: '+', label: "ish bilan ta'minlangan shogird", short: "ish bilan ta'minlangan shogird" },
]

/** Rasm fayl nomlari (src/assets/images/ ichiga tashlang) */
export const siteImages = {
  portrait: 'portrait-salohiddin.png',
  aboutPortrait: 'portrait-about.jpg',
  classroom1: 'teaching-classroom-1.jpg',
  classroom2: 'teaching-classroom-2.jpg',
}
