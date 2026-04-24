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
      title: "What I'm Creating",
      subtitle: "Weekly content built around one idea: thinking beats prompting",
      description: "Every week I publish reels, challenges, a long video, and notes. Here's what each piece is for.",
      items: [
        {
          icon: <Code2 className="h-8 w-8" />,
          title: "Puzzles AI Can't Solve",
          description: "Every week a new logic challenge. The goal isn't the answer — it's training how you think before you ask AI for anything."
        },
        {
          icon: <Layout className="h-8 w-8" />,
          title: "Logic and AI Videos",
          description: "Reels and long-form videos about how to think better in a world where AI already writes code. For devs and for anyone else."
        },
        {
          icon: <Rocket className="h-8 w-8" />,
          title: "Dev Log — Real Notes",
          description: "A periodic email with what I learn while building real software. No marketing, no hype. Just the honest process."
        },
        {
          icon: <BookOpen className="h-8 w-8" />,
          title: "Building in Public",
          description: "I share the real process of learning while being a dad and a dev. Everything evolves as I learn and publish."
        }
      ],
      note: "All content is free. The goal is simple: you leave smarter, not more dependent.",
      status: "Publishing Weekly"
    },
    es: {
      title: "Lo Que Estoy Creando",
      subtitle: "Contenido semanal construido alrededor de una idea: pensar gana al promptear",
      description: "Cada semana publico reels, retos, un video largo y notas. Esto es para lo que sirve cada pieza.",
      items: [
        {
          icon: <Code2 className="h-8 w-8" />,
          title: "Acertijos que la IA no resuelve",
          description: "Cada semana un reto lógico nuevo. El objetivo no es el resultado — es entrenar la forma de pensar antes de pedirle algo a la IA."
        },
        {
          icon: <Layout className="h-8 w-8" />,
          title: "Videos de lógica e IA",
          description: "Reels y videos largos sobre cómo pensar mejor en un mundo donde la IA ya programa. Para devs y para cualquier persona."
        },
        {
          icon: <Rocket className="h-8 w-8" />,
          title: "Dev Log — notas reales",
          description: "Un email periódico con lo que aprendo construyendo software real. Sin marketing, sin hype. Solo el proceso honesto."
        },
        {
          icon: <BookOpen className="h-8 w-8" />,
          title: "Construyendo en público",
          description: "Comparto el proceso real de aprender siendo papá y dev. Todo evoluciona mientras aprendo y publico."
        }
      ],
      note: "Todo el contenido es gratis. El objetivo es simple: te vas más inteligente, no más dependiente.",
      status: "Publicando Semanalmente"
    }
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
