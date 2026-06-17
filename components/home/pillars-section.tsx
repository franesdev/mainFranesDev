"use client"

import { motion } from "framer-motion"
import { Puzzle, Brain, BookHeart } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function PillarsSection() {
  const { language } = useLanguageContext()

  const content = {
    es: {
      title: "Qué vas a encontrar aquí",
      subtitle: "Tres formas de entrenar tu mente, sin escribir una línea de código.",
      pillars: [
        {
          icon: Puzzle,
          title: "Acertijos de lógica",
          desc: "Retos semanales que entrenan tu razonamiento. No se resuelven copiando en ChatGPT — se resuelven pensando.",
        },
        {
          icon: Brain,
          title: "Mentalidad y forma de pensar",
          desc: "Cómo descomponer problemas, cuestionar suposiciones y decidir con criterio. La herramienta más valiosa que tienes.",
        },
        {
          icon: BookHeart,
          title: "Historias reales de Papá Dev",
          desc: "Lo que aprendo siendo dev, padre y persona. Sin filtros, sin atajos mágicos. Proceso real, aprendizaje real.",
        },
      ],
    },
    en: {
      title: "What you'll find here",
      subtitle: "Three ways to train your mind, without writing a single line of code.",
      pillars: [
        {
          icon: Puzzle,
          title: "Logic puzzles",
          desc: "Weekly challenges that train your reasoning. You won't solve them by copying into ChatGPT — you solve them by thinking.",
        },
        {
          icon: Brain,
          title: "Mindset & how to think",
          desc: "How to break down problems, question assumptions, and decide with judgment. The most valuable tool you have.",
        },
        {
          icon: BookHeart,
          title: "Real Dad Dev stories",
          desc: "What I learn as a dev, dad, and human. No filters, no magic shortcuts. Real process, real learning.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section id="pillars" className="py-20 md:py-28 px-4 bg-zinc-900/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 hover:border-brand/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/15 border border-brand/25 flex items-center justify-center mb-6 group-hover:bg-brand/25 transition-colors">
                <pillar.icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}