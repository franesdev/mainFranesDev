"use client"

import { motion } from "framer-motion"
import { Code2, Layout, Rocket, BookOpen } from "lucide-react"
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
      title: "What I'm Building",
      subtitle: "Weekly content built around one principle: thinking beats prompting",
      description: "Every Thursday I share something new. Here's what it is and why.",
      items: [
        {
          icon: <Code2 className="h-8 w-8" />,
          title: "The Thursday Ritual",
          description: "Every Thursday: 'My thinking mistake this week.' A community where we share what we got wrong — and why that's how we learn."
        },
        {
          icon: <Layout className="h-8 w-8" />,
          title: "Logic Challenges & Videos",
          description: "Weekly puzzles you won't solve with ChatGPT. Reels and long-form content about how to think better before you ask AI for anything."
        },
        {
          icon: <Rocket className="h-8 w-8" />,
          title: "Dev Log — Real Notes",
          description: "A periodic email with what I learn while building real software. The honest process of being a dad, a dev, and learning in public."
        },
        {
          icon: <BookOpen className="h-8 w-8" />,
          title: "Content for Everyone",
          description: "70% non-programmers. 30% developers. Whether you code or not, this is about training your brain to think better."
        }
      ],
      note: "All content is free. The goal is simple: you leave sharper, not more dependent.",
      status: "Publishing Every Thursday"
    },
    es: {
      title: "Lo Que Estoy Construyendo",
      subtitle: "Contenido semanal construido alrededor de un principio: pensar gana",
      description: "Cada jueves comparto algo nuevo. Esto es lo que es y por qué.",
      items: [
        {
          icon: <Code2 className="h-8 w-8" />,
          title: "El Ritual de los Jueves",
          description: "Cada jueves: 'Mi error de pensamiento de esta semana.' Una comunidad donde compartimos en qué nos equivocamos — y por qué así aprendemos."
        },
        {
          icon: <Layout className="h-8 w-8" />,
          title: "Retos de Lógica y Videos",
          description: "Retos semanales que no resolverás con ChatGPT. Reels y contenido largo sobre cómo pensar mejor antes de pedirle algo a la IA."
        },
        {
          icon: <Rocket className="h-8 w-8" />,
          title: "Dev Log — Notas Reales",
          description: "Un email periódico con lo que aprendo construyendo software real. El proceso honesto de ser papá, dev, y aprender en público."
        },
        {
          icon: <BookOpen className="h-8 w-8" />,
          title: "Contenido para Todos",
          description: "70% no-programadores. 30% developers. Programes o no, es sobre entrenar tu cerebro para pensar mejor."
        }
      ],
      note: "Todo el contenido es gratis. El objetivo es simple: te vas más afilado, no más dependiente.",
      status: "Publicando Cada Jueves"
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
