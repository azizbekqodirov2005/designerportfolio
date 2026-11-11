/**
 * Markaziy rasm yordamchisi.
 *
 * Haqiqiy rasmlarni `src/assets/images/` papkasiga (ichki papkalar ham mumkin) tashlang
 * va data fayllarida faqat FAYL NOMINI yozing (masalan: "portrait-salohiddin.jpg").
 * Fayl topilsa — rasm ko'rsatiladi, topilmasa — chiroyli placeholder chiqadi.
 */
const files = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const byName: Record<string, string> = {}
for (const [path, url] of Object.entries(files)) {
  byName[path.split('/').pop() as string] = url
}

export function getImage(fileName?: string): string | undefined {
  if (!fileName) return undefined
  return byName[fileName]
}
