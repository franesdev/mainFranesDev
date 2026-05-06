"use client"

import { motion } from "framer-motion"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function AboutBrand() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "Who I Am",
      subtitle: "Full Stack Dev from Ecuador. I teach how to think, not just how to code.",
      story: "I'm Franklin Paute Machuca. By day, I build with .NET, React, and mobile. By night (and weekends), I'm a dad creating content. But in everything I do, one thing drives me: logic. The way we think is the real currency — and it's what AI can't replace. I teach this to programmers and to anyone who wants to live better through better thinking.",
      three_pillars: {
        title: "What This Is Really About",
        expertise: {
          icon: "🧠",
          title: "Think Like a Programmer",
          desc: "This isn't about syntax. It's about logic: trained common sense that makes you solve problems faster, whether you code or not."
        },
        leadership: {
          icon: "🤖",
          title: "Mindset Over Tools",
          desc: "AI is a tool. It executes what you tell it. But you have to decide what's worth building, and that requires judgment."
        },
        teaching: {
          icon: "🔨",
          title: "Dad Dev Building In Public",
          desc: "I learn, I code, I create content — and I'm a dad. No filters, no fake shortcuts. Just the real process."
        }
      },
      highlights: [
        { title: "Full Stack", desc: ".NET · React · MAUI" },
        { title: "Dad Dev", desc: "Building with 10 min/day" },
        { title: "Learning", desc: "Flutter · Swift · Xcode" },
        { title: "Sharing", desc: "Everything, in public" }
      ],
      why_learn: {
        title: "Why This Is Different",
        intro: "70% of my audience has never coded. 30% are developers. This is for both of you.",
        points: [
          { icon: "🧩", text: "Weekly logic challenges that AI can't solve — because it's about thinking" },
          { icon: "🌍", text: "Logic applied to real life, not just code" },
          { icon: "👥", text: "Community ritual every Thursday: 'My thinking mistake this week'" }
        ]
      }
    },
    es: {
      title: "Quién Soy",
      subtitle: "Dev Full Stack desde Ecuador. Enseño a pensar, no solo a programar.",
      story: "Soy Franklin Paute Machuca. De día construyo con .NET, React y mobile. De noche (y fines de semana), soy papá creando contenido. Pero en todo lo que hago una cosa me mueve: la lógica. La forma en que pensamos es la moneda real — y es lo que la IA no puede reemplazar. Enseño esto a programadores y a cualquiera que quiera vivir mejor pensando mejor.",
      three_pillars: {
        title: "De Qué Va Realmente Esto",
        expertise: {
          icon: "🧠",
          title: "Piensa Como Programador",
          desc: "No es sobre sintaxis. Es sobre lógica: sentido común entrenado que te hace resolver problemas más rápido, programes o no."
        },
        leadership: {
          icon: "🤖",
          title: "Mentalidad Sobre Herramientas",
          desc: "La IA es una herramienta. Ejecuta lo que le dices. Pero tienes que decidir qué vale la pena construir, y eso requiere criterio."
        },
        teaching: {
          icon: "🔨",
          title: "Papá Dev Construyendo en Público",
          desc: "Aprendo, programo, creo contenido — y soy papá. Sin filtros, sin atajos falsos. Solo el proceso real."
        }
      },
      highlights: [
        { title: "Full Stack", desc: ".NET · React · MAUI" },
        { title: "Papá Dev", desc: "Construyendo con 10 min/día" },
        { title: "Aprendiendo", desc: "Flutter · Swift · Xcode" },
        { title: "Compartiendo", desc: "Todo, en público" }
      ],
      why_learn: {
        title: "Por Qué Esto Es Diferente",
        intro: "70% de mi audiencia nunca ha programado. 30% son developers. Esto es para ambos.",
        points: [
          { icon: "🧩", text: "Retos de lógica semanales que la IA no puede resolver — porque es sobre pensar" },
          { icon: "🌍", text: "Lógica aplicada a la vida real, no solo al código" },
          { icon: "👥", text: "Ritual comunitario cada jueves: 'Mi error de pensamiento de esta semana'" }
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
