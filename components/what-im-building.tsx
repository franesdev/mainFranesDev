"use client"

import { motion } from "framer-motion"
import { BookOpen, Zap, Layout, Rocket, Code2 } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function WhatImBuilding() {
  const { language } = useLanguageContext()

  const content = {
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

  const data = content[language]

  return (
    <section id="what-im-building" className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{data.title}</h2>
          <p className="text-lime-400 text-lg font-semibold mb-4">{data.subtitle}</p>
          <div className="h-1 w-24 bg-gradient-to-r from-lime-500 to-lime-400 rounded-full mx-auto mb-8"></div>
          <p className="text-zinc-300 text-lg max-w-3xl mx-auto">{data.description}</p>
        </motion.div>

        {/* Items Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-lime-500/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-lime-500 pt-1">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Status Note */}
        <motion.div
          className="bg-gradient-to-r from-lime-500/10 to-lime-500/5 border border-lime-500/30 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-zinc-300 text-lg leading-relaxed">{data.note}</p>
          <p className="text-lime-500 font-semibold mt-4">{data.status}</p>
        </motion.div>
      </div>
    </section>
  )
}
