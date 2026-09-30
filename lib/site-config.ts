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

// ✏️ Páginas que venden: imágenes de ejemplo (1200×800, 3:2). Ilustrativas, no clientes reales.
export const landingExamples = [
  { image: "/landing-ejemplo-1.jpg", alt: { es: "Ejemplo de landing page para un negocio local", en: "Landing page example for a local business" } },
  { image: "/landing-ejemplo-2.jpg", alt: { es: "Ejemplo de landing page de servicios", en: "Services landing page example" } },
]

// ✏️ Música de /enfoque: HolaBeats (copyright libre). Embeds oficiales, sin alojar audio.
export const HOLABEATS = {
  spotifyUrl: "https://open.spotify.com/artist/7CvWoscqVQJvqb0OcBRQO7",
  spotifyEmbed: "https://open.spotify.com/embed/artist/7CvWoscqVQJvqb0OcBRQO7?utm_source=generator&theme=0",
  youtubeUrl: "https://www.youtube.com/playlist?list=PLWpS2U83SbfilfcPqtKnYtrFe8ol3_sIw",
  youtubeEmbed: "https://www.youtube-nocookie.com/embed/videoseries?list=PLWpS2U83SbfilfcPqtKnYtrFe8ol3_sIw",
}
