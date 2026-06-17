"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { FaYoutube, FaInstagram } from "react-icons/fa"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function HeroHome() {
  const { language } = useLanguageContext()

  const content = {
    es: {
      tagline: "Piensa como programador. Vive mejor.",
      subtitle:
        "Acertijos, lógica y mentalidad para pensar con claridad. No enseño código — enseño a pensar mejor, aunque nunca hayas programado.",
      badge: "Lógica · Mentalidad · Papá Dev",
      youtube: "Ver en YouTube",
      instagram: "Seguir en Instagram",
      scroll: "Conoce más",
    },
    en: {
      tagline: "Think like a programmer. Live better.",
      subtitle:
        "Logic puzzles, mindset, and clear thinking. I don't teach code — I help you think better, even if you've never programmed.",
      badge: "Logic · Mindset · Dad Dev",
      youtube: "Watch on YouTube",
      instagram: "Follow on Instagram",
      scroll: "Learn more",
    },
  }

  const t = content[language]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[100dvh] flex items-center px-4 pt-24 md:pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand/8 via-zinc-950 to-zinc-950" />
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-brand/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/25 text-brand text-sm font-medium mb-8">
            {t.badge}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            {t.tagline.split(". ").map((part, i, arr) => (
              <span key={i}>
                {i === 0 ? (
                  <span className="text-brand">{part}.</span>
                ) : (
                  <span> {part}{i < arr.length - 1 ? "." : ""}</span>
                )}
              </span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://youtube.com/@franesdev"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-dark text-zinc-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-brand/20 hover:shadow-brand/30 hover:-translate-y-0.5"
            >
              <FaYoutube className="h-5 w-5" />
              {t.youtube}
            </a>
            <a
              href="https://instagram.com/franesdev"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-zinc-700 hover:border-brand/50 text-zinc-300 hover:text-white bg-zinc-900/50 hover:bg-zinc-900 font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaInstagram className="h-5 w-5 text-brand" />
              {t.instagram}
            </a>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            onClick={() => scrollTo("about")}
            className="mt-12 md:mt-16 flex flex-col items-center gap-2 text-zinc-500 hover:text-brand transition-colors mx-auto"
            aria-label={t.scroll}
          >
            <span className="text-xs tracking-wide">{t.scroll}</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}