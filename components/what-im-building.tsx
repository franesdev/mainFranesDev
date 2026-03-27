"use client"

import { motion } from "framer-motion"
import { useLanguageContext } from "@/contexts/LanguageContext"

const prodStack = [
  { label: ".NET / C#", note: { en: "Backend & APIs", es: "Backend y APIs" } },
  { label: "React", note: { en: "Web frontend", es: "Frontend web" } },
  { label: "Next.js", note: { en: "Full-stack apps", es: "Apps full-stack" } },
  { label: ".NET MAUI", note: { en: "Cross-platform mobile", es: "Móvil multiplataforma" } },
  { label: "TypeScript", note: { en: "Type-safe code", es: "Código tipado" } },
  { label: "SQL Server", note: { en: "Data layer", es: "Capa de datos" } },
]

const learningStack = [
  { label: "Flutter", note: { en: "Cross-platform (Dart)", es: "Multiplataforma (Dart)" } },
  { label: "Xcode", note: { en: "Native iOS toolchain", es: "Cadena nativa iOS" } },
  { label: "Swift", note: { en: "iOS language", es: "Lenguaje iOS" } },
  { label: "SwiftUI", note: { en: "Declarative UI", es: "UI declarativa" } },
]

export default function WhatImBuilding() {
  const { language } = useLanguageContext()

  const t = {
    en: {
      title: "What I Build",
      subtitle: "Production stack · Learning stack",
      prod_title: "In production",
      prod_desc: "Tools I use in real projects every day.",
      learning_title: "Learning now",
      learning_badge: "In progress",
      learning_desc: "I'm picking up Flutter and native iOS — and I'll document every step of it publicly.",
      note: "When I learn something new, I share it. That's the deal.",
    },
    es: {
      title: "Lo Que Construyo",
      subtitle: "Stack de producción · Stack en aprendizaje",
      prod_title: "En producción",
      prod_desc: "Herramientas que uso en proyectos reales todos los días.",
      learning_title: "Aprendiendo ahora",
      learning_badge: "En progreso",
      learning_desc: "Estoy aprendiendo Flutter y iOS nativo — y voy a documentar cada paso en público.",
      note: "Cuando aprendo algo nuevo, lo comparto. Eso es lo que hago.",
    },
  }

  const data = t[language]

  return (
    <section id="what-im-building" className="py-20 px-4 bg-zinc-900/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{data.title}</h2>
          <p className="text-zinc-500 text-sm tracking-widest uppercase">{data.subtitle}</p>
          <div className="h-px w-24 bg-gradient-to-r from-lime-500 to-amber-500 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Production stack */}
          <motion.div
            className="bg-zinc-900/60 border border-lime-500/25 rounded-2xl p-8 hover:border-lime-500/50 transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-lime-500" />
              <h3 className="text-lime-400 font-semibold text-sm uppercase tracking-wider">{data.prod_title}</h3>
            </div>
            <p className="text-zinc-500 text-sm mb-7">{data.prod_desc}</p>
            <div className="grid grid-cols-2 gap-3">
              {prodStack.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  className="bg-zinc-800/60 rounded-xl px-4 py-3 border border-zinc-700/50 hover:border-lime-500/40 transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <div className="text-white font-semibold text-sm">{tech.label}</div>
                  <div className="text-zinc-500 text-xs mt-0.5">{tech.note[language]}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning stack */}
          <motion.div
            className="bg-zinc-900/60 border border-amber-500/25 rounded-2xl p-8 hover:border-amber-500/50 transition-colors duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <h3 className="text-amber-400 font-semibold text-sm uppercase tracking-wider">{data.learning_title}</h3>
              <span className="ml-auto text-xs font-medium px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
                {data.learning_badge}
              </span>
            </div>
            <p className="text-zinc-500 text-sm mb-7">{data.learning_desc}</p>
            <div className="grid grid-cols-2 gap-3">
              {learningStack.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  className="bg-zinc-800/60 rounded-xl px-4 py-3 border border-zinc-700/50 hover:border-amber-500/40 transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <div className="text-white font-semibold text-sm">{tech.label}</div>
                  <div className="text-zinc-500 text-xs mt-0.5">{tech.note[language]}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          className="text-center py-6 px-8 border border-zinc-800 rounded-2xl bg-zinc-900/30"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-zinc-400 text-base italic">"{data.note}"</p>
        </motion.div>
      </div>
    </section>
  )
}
