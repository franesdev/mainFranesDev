import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import FocusExperience from "@/components/enfoque/focus-experience"
import LanguageToggle from "@/components/language-toggle"
import Footer from "@/components/footer"

const TITLE = "Pomodoro online gratis + música para concentrarte | FranesDev"
const DESCRIPTION =
  "Temporizador Pomodoro online gratis y sin registro, con música para concentrarte. Ciclos de 25/5/15 minutos configurables, aviso sonoro y contador de ciclos. Mejora tu concentración desde el navegador."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "pomodoro",
    "pomodoro online",
    "temporizador pomodoro",
    "pomodoro gratis",
    "pomodoro sin registro",
    "temporizador de concentración",
    "música para concentrarse",
    "técnica pomodoro",
  ],
  alternates: { canonical: "/enfoque" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://franes.dev/enfoque",
    siteName: "FranesDev",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Pomodoro online gratis — FranesDev" }],
    locale: "es_EC",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.jpg"] },
}

// ✏️ Preguntas frecuentes (también se publican como datos estructurados para Google)
const faqs = [
  {
    q: "¿Este temporizador Pomodoro es gratis?",
    a: "Sí. Es 100% gratis, sin registro y sin anuncios. Solo abre la página y presiona Iniciar.",
  },
  {
    q: "¿Puedo cambiar los 25 minutos?",
    a: "Sí. En “Ajustar tiempos” puedes elegir la duración del foco, del descanso y del descanso largo. Tu navegador recuerda tu preferencia para la próxima vez.",
  },
  {
    q: "¿Funciona en el celular?",
    a: "Sí. Funciona en cualquier navegador moderno, en celular, tablet o computadora. Mantén la pestaña abierta para escuchar el aviso al terminar cada ciclo.",
  },
  {
    q: "¿Qué música suena?",
    a: "HolaBeats: música instrumental sin copyright pensada para concentrarte. Puedes escucharla desde Spotify o YouTube sin salir de la página.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Pomodoro online — FranesDev",
      url: "https://franes.dev/enfoque",
      description: DESCRIPTION,
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Web",
      inLanguage: "es",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Person", name: "Franklin Paute", url: "https://franes.dev" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

export default function EnfoquePage() {
  return (
    <main className="relative min-h-[100dvh] bg-zinc-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="absolute inset-x-0 top-0 h-[36rem] bg-gradient-to-b from-brand-navy via-zinc-950/80 to-zinc-950 pointer-events-none" />

      {/* Barra mínima: la página es para concentrarse, sin menú completo */}
      <header className="relative z-10 max-w-6xl mx-auto px-4 pt-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-bold text-white">FranesDev</span>
        </Link>
        <LanguageToggle />
      </header>

      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-6 pb-12 md:pt-8">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Pomodoro online <span className="text-brand">gratis</span> con música para concentrarte
          </h1>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base">
            Temporizador de enfoque sin registro · 25 min de foco, 5 de descanso · Música HolaBeats
          </p>
        </div>

        <FocusExperience />
      </section>

      {/* Contenido para Google y para quien quiera entender la técnica */}
      <section className="relative z-10 border-t border-zinc-800/60 bg-zinc-900/30">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-16 space-y-10">
          <article>
            <h2 className="text-2xl font-bold mb-3">¿Qué es la técnica Pomodoro?</h2>
            <div className="space-y-3 text-zinc-300 leading-relaxed">
              <p>
                La técnica Pomodoro es un método de gestión del tiempo creado por Francesco Cirillo: trabajas{" "}
                <strong className="text-white">25 minutos de concentración total</strong> en una sola tarea y luego
                tomas <strong className="text-white">5 minutos de descanso</strong>. Cada 4 ciclos haces un descanso
                largo de 15 a 30 minutos.
              </p>
              <p>
                Funciona porque divide el trabajo en bloques cortos y concretos: es más fácil empezar, evitas
                distraerte y el descanso llega antes de que se agote tu energía. Es la misma forma en que un
                programador divide un problema grande en partes pequeñas.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-bold mb-3">Cómo usar este temporizador</h2>
            <ol className="list-decimal pl-5 space-y-2 text-zinc-300 leading-relaxed">
              <li>Elige una sola tarea y presiona <strong className="text-white">Iniciar</strong>.</li>
              <li>Pon música HolaBeats en Spotify o YouTube si te ayuda a concentrarte.</li>
              <li>Trabaja sin interrupciones hasta que suene el aviso.</li>
              <li>Toma tu descanso lejos de la pantalla y empieza el siguiente ciclo.</li>
            </ol>
          </article>

          <article>
            <h2 className="text-2xl font-bold mb-4">Preguntas frecuentes</h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 open:border-brand/30"
                >
                  <summary className="cursor-pointer list-none font-medium text-white flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-brand transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-2 text-zinc-400 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </article>

          <p className="text-zinc-400">
            Hecho por{" "}
            <Link href="/" className="text-brand hover:underline">
              FranesDev
            </Link>{" "}
            — piensa como programador, vive mejor.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
