"use client"

import { motion } from "framer-motion"
import { Clock, ArrowRight } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

interface Tool {
  id: string
  icon: React.ReactNode
  titleEn: string
  titleEs: string
  descEn: string
  descEs: string
  color: string
  href: string
}

export default function ToolsSection() {
  const { language } = useLanguageContext()

  const tools: Tool[] = [
    {
      id: "pomodoro",
      icon: <Clock className="h-6 w-6" />,
      titleEn: "Pomodoro",
      titleEs: "Pomodoro",
      descEn: "25m focus + breaks. For devs with real time.",
      descEs: "25m enfoque + descansos. Para devs con tiempo real.",
      color: "from-violet-500 to-violet-600",
      href: "#pomodoro",
    },
  ]

  const content = {
    en: {
      title: "Tools for Real Devs",
      subtitle: "Minimalist. Useful. No BS.",
      explore: "Explore",
    },
    es: {
      title: "Herramientas para Devs Reales",
      subtitle: "Minimalista. Útil. Sin Relleno.",
      explore: "Explorar",
    },
  }

  const t = content[language as keyof typeof content] || content.en

  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-emerald-300 uppercase tracking-widest">
              Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.title}</h2>
          <p className="text-zinc-400">{t.subtitle}</p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => handleScroll(tool.href)}
              className="group cursor-pointer"
            >
              <div className="relative h-full bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-emerald-500/50 hover:bg-zinc-900/80">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`mb-4 w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-white`}>
                    {tool.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {language === "es" ? tool.titleEs : tool.titleEn}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4 group-hover:text-zinc-300 transition-colors">
                    {language === "es" ? tool.descEs : tool.descEn}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wide group-hover:gap-3 transition-all">
                    <span>{t.explore}</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon hint - future tools */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-zinc-500 text-xs mt-8 font-mono uppercase tracking-widest"
        >
          {language === "es"
            ? "Más herramientas próximamente"
            : "More tools coming soon"}
        </motion.p>
      </div>
    </section>
  )
}
