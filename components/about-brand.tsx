"use client"

import { motion } from "framer-motion"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function AboutBrand() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "Who I Am",
      subtitle: "Dev who teaches you to think, not just to code",
      story: "I'm Franes, a Full Stack developer from Ecuador. I've spent years building with .NET, React, and mobile — but what excites me most isn't the code itself, it's the logic behind it. Today I share that online: puzzles, developer thinking, and AI applied to real life. For programmers and for anyone who wants to think better.",
      three_pillars: {
        title: "What This Is About",
        expertise: {
          icon: "🧠",
          title: "Logical Thinking",
          desc: "Logic isn't math — it's trained common sense. That's what I teach, with or without code."
        },
        leadership: {
          icon: "🤖",
          title: "AI With Judgment",
          desc: "AI executes. You decide. I teach you to use it as a tool, not as a substitute for thinking."
        },
        teaching: {
          icon: "🔨",
          title: "Dad Dev",
          desc: "I learn, code, and create content while being a dad. The real process, without filters or fake shortcuts."
        }
      },
      highlights: [
        { title: "Full Stack", desc: ".NET · React · MAUI" },
        { title: "Papá Dev", desc: "Learning with 10 min/day" },
        { title: "Building", desc: "Flutter · Swift · Xcode" },
        { title: "Public", desc: "Everything shared openly" }
      ],
      why_learn: {
        title: "Why This Is Different",
        intro: "Not a guru. Not a bootcamp. A developer who builds in public and shows the real thing.",
        points: [
          { icon: "🧩", text: "Weekly puzzles that AI can't solve" },
          { icon: "🌍", text: "Logic applied to real life, not just code" },
          { icon: "👥", text: "Content for devs and for people who've never coded" }
        ]
      }
    },
    es: {
      title: "Quién Soy",
      subtitle: "Dev que enseña a pensar, no solo a programar",
      story: "Soy Franes, desarrollador Full Stack desde Ecuador. Llevo años programando en .NET, React y mobile — pero lo que más me apasiona no es el código en sí, sino la lógica detrás. Hoy comparto eso en redes: acertijos, pensamiento dev e IA aplicada a la vida real. Para programadores y para cualquiera que quiera pensar mejor.",
      three_pillars: {
        title: "De Qué Va Esto",
        expertise: {
          icon: "🧠",
          title: "Pensamiento lógico",
          desc: "La lógica no es matemática — es sentido común entrenado. Eso es lo que enseño, con o sin código."
        },
        leadership: {
          icon: "🤖",
          title: "IA con criterio",
          desc: "La IA ejecuta. Tú decides. Te enseño a usarla como herramienta, no como sustituto de pensar."
        },
        teaching: {
          icon: "🔨",
          title: "Papá Dev",
          desc: "Aprendo, programo y creo contenido siendo papá. El proceso real, sin filtros ni atajos falsos."
        }
      },
      highlights: [
        { title: "Full Stack", desc: ".NET · React · MAUI" },
        { title: "Papá Dev", desc: "Aprendiendo con 10 min/día" },
        { title: "Construyendo", desc: "Flutter · Swift · Xcode" },
        { title: "Público", desc: "Todo compartido abiertamente" }
      ],
      why_learn: {
        title: "Por Qué Esto Es Diferente",
        intro: "No soy un gurú. No soy un bootcamp. Soy un developer que construye en público y muestra lo real.",
        points: [
          { icon: "🧩", text: "Acertijos semanales que la IA no puede resolver" },
          { icon: "🌍", text: "Lógica aplicada a la vida real, no solo al código" },
          { icon: "👥", text: "Contenido para devs y para quienes nunca han programado" }
        ]
      }
    }
  }

  const data = content[language]

  return (
    <section id="about-brand" className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
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
          <p className="text-lime-400 text-lg font-semibold mb-6">{data.subtitle}</p>
          <div className="h-1 w-24 bg-gradient-to-r from-lime-500 to-lime-400 rounded-full mx-auto mb-8"></div>
        </motion.div>

        {/* Main Story */}
        <motion.div
          className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg text-zinc-300 leading-relaxed text-center">{data.story}</p>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">{data.three_pillars.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[data.three_pillars.expertise, data.three_pillars.leadership, data.three_pillars.teaching].map((pillar, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-6xl mb-4">{pillar.icon}</div>
                <h4 className="text-2xl font-bold text-lime-400 mb-3">{pillar.title}</h4>
                <p className="text-zinc-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights — concise identity bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {data.highlights.map((h, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 text-center hover:border-lime-500/40 transition-colors duration-200"
              whileHover={{ y: -3 }}
            >
              <div className="text-white font-bold text-base mb-1">{h.title}</div>
              <div className="text-zinc-500 text-xs">{h.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Follow — 3 sharp differentiators */}
        <motion.div
          className="border border-zinc-800 rounded-2xl p-10 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-10 text-center">{data.why_learn.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.why_learn.points.map((point, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <span className="text-4xl">{point.icon}</span>
                <p className="text-zinc-300 text-sm leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
