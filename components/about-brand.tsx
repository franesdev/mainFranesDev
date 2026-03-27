"use client"

import { motion } from "framer-motion"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function AboutBrand() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "Who I Am",
      subtitle: "Systems Engineer & Full Stack Developer",
      story: "I'm a developer, a dad, and someone who learns with limited time — and that's exactly why I share everything. I started creating content because I couldn't find resources that taught the thinking behind programming, not just the syntax. I work with .NET, React, and MAUI daily. And right now I'm picking up Flutter and native iOS. But what I care most about is teaching you how to think through problems before you write a single line of code.",
      three_pillars: {
        title: "My Focus",
        expertise: {
          icon: "📚",
          title: "Teaching to Think",
          desc: "Before syntax, before frameworks — I teach the logic. Short videos, puzzles, and real stories that build the mindset every programmer needs."
        },
        leadership: {
          icon: "👨‍👧",
          title: "Papá Dev",
          desc: "I learn with 10 minutes a day, between meetings and family life. If you're busy and feel behind — you're my people."
        },
        teaching: {
          icon: "⚡",
          title: "Real Code",
          desc: "I build production software with .NET, React, and MAUI. Currently learning Flutter and Xcode. The process is live — you\'ll see it happen."
        }
      },
      highlights: [
        { title: "Full Stack", desc: ".NET · React · MAUI" },
        { title: "Papá Dev", desc: "Learning with 10 min/day" },
        { title: "Building", desc: "Flutter · Swift · Xcode" },
        { title: "Public", desc: "Everything shared openly" }
      ],
      why_learn: {
        title: "Why Follow This?",
        points: [
          { icon: "🧠", text: "I teach the thinking, not just the syntax. Most tutorials skip this part." },
          { icon: "👨‍👧", text: "I\'m a busy dad learning with limited time. If that\'s you too, this is built for you." },
          { icon: "🔧", text: "I build real production software, not course demos. You\'ll see the difference." },
        ]
      }
    },
    es: {
      title: "Quién Soy",
      subtitle: "Ingeniero de Sistemas & Desarrollador Full Stack",
      story: "Soy desarrollador, papá, y alguien que aprende con poco tiempo libre — y precisamente por eso comparto todo. Empecé a crear contenido porque no encontraba recursos que enseñaran a pensar como programador, no solo a memorizar sintaxis. Trabajo con .NET, React y MAUI todos los días. Y ahora estoy aprendiendo Flutter e iOS nativo. Pero lo que más me importa es enseñarte a resolver problemas antes de escribir la primera línea de código.",
      three_pillars: {
        title: "Mi Enfoque",
        expertise: {
          icon: "📚",
          title: "Enseñar a Pensar",
          desc: "Antes del lenguaje, antes del framework — enseño la lógica. Videos cortos, acertijos y relatos reales que construyen la mentalidad que todo programador necesita."
        },
        leadership: {
          icon: "👨‍👧",
          title: "Papá Dev",
          desc: "Aprendo con 10 minutos al día, entre reuniones y vida familiar. Si andas ocupado y te sientes atrasado — eres mi gente."
        },
        teaching: {
          icon: "⚡",
          title: "Código Real",
          desc: "Construyo software en producción con .NET, React y MAUI. Ahora aprendiendo Flutter y Xcode. El proceso es en vivo — lo verás pasar."
        }
      },
      highlights: [
        { title: "Full Stack", desc: ".NET · React · MAUI" },
        { title: "Papá Dev", desc: "Aprendiendo con 10 min/día" },
        { title: "Construyendo", desc: "Flutter · Swift · Xcode" },
        { title: "Público", desc: "Todo compartido abiertamente" }
      ],
      why_learn: {
        title: "¿Por qué seguirme?",
        points: [
          { icon: "🧠", text: "Enseño a pensar, no solo a copiar sintaxis. La mayoría de tutoriales se saltan esta parte." },
          { icon: "👨‍👧", text: "Soy papá y aprendo con poco tiempo libre. Si esa es tu situación, esto está hecho para ti." },
          { icon: "🔧", text: "Construyo software real en producción, no demos de curso. Notarás la diferencia." },
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
