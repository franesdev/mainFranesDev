// ✏️ Datos editables del sitio. Cambia valores aquí sin tocar los componentes.

export const WHATSAPP_NUMBER = "593997825115"

export const whatsappLink = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`

// ✏️ YouTube: ID del canal (empieza con "UC"). Se usa para leer el RSS público, sin API key.
// Para verlo: youtube.com → tu canal → Compartir canal → Copiar ID del canal.
export const YOUTUBE_CHANNEL_ID = "UCWvyzeQFEwiyDU1UYdLGaSQ"
export const YOUTUBE_CHANNEL_URL = "https://youtube.com/@franesdev"

// ✏️ Sobre mí: foto (800×1000, vertical 4:5) y 3 datos en tarjetas.
export const ABOUT_PHOTO = "/sobre-mi-placeholder.jpg"

export const aboutStats = [
  { value: "2014", label: { es: "Dev desde", en: "Dev since" } },
  { value: "+16K", label: { es: "Comunidad en redes", en: "Social community" } },
  { value: "Papá Dev", label: { es: "Código y familia", en: "Code and family" } },
]

// ✏️ Mejores reels: thumbnail vertical (540×960, 9:16) en /public y link al post.
export const bestReels: {
  thumbnail: string
  href: string
  platform: "instagram" | "tiktok"
  title: { es: string; en: string }
}[] = [
  {
    thumbnail: "/reel-1.jpg",
    href: "https://instagram.com/franesdev",
    platform: "instagram",
    title: { es: "Reel destacado 1", en: "Featured reel 1" },
  },
  {
    thumbnail: "/reel-2.jpg",
    href: "https://tiktok.com/@franesdev",
    platform: "tiktok",
    title: { es: "Reel destacado 2", en: "Featured reel 2" },
  },
  {
    thumbnail: "/reel-3.jpg",
    href: "https://instagram.com/franesdev",
    platform: "instagram",
    title: { es: "Reel destacado 3", en: "Featured reel 3" },
  },
  {
    thumbnail: "/reel-4.jpg",
    href: "https://tiktok.com/@franesdev",
    platform: "tiktok",
    title: { es: "Reel destacado 4", en: "Featured reel 4" },
  },
]

// ✏️ Páginas que venden: imágenes de ejemplo (1200×800, 3:2). Ilustrativas, no clientes reales.
export const landingExamples = [
  { image: "/landing-ejemplo-1.jpg", alt: { es: "Ejemplo de landing page para un negocio local", en: "Landing page example for a local business" } },
  { image: "/landing-ejemplo-2.jpg", alt: { es: "Ejemplo de landing page de servicios", en: "Services landing page example" } },
]
