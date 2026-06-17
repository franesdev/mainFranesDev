"use client"

import { motion } from "framer-motion"
import { Clock, ArrowDown, Wrench } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function ToolsIntro() {
  const { language } = useLanguageContext()

  const content = {
    es: {
      label: "Herramientas",
      title: "Un extra para tu día",
      subtitle:
        "La lógica y la mentalidad son el foco de este sitio. Pero como Papá Dev con poco tiempo, también uso herramientas simples para organizarme.",
      personal:
        "Este Pomodoro es el que uso yo: 25 minutos de enfoque, pausas reales, sin complicaciones. No es el corazón de franes.dev — es un regalo extra para quien quiera probarlo.",
      cta: "Probar el Pomodoro",
      pomodoroDesc: "25 min enfoque + descansos",
      note: "Herramienta secundaria · Gratis · Sin registro",
    },
    en: {
      label: "Tools",
      title: "A little extra for your day",
      subtitle:
        "Logic and mindset are the focus of this site. But as a Dad Dev with limited time, I also use simple tools to stay organized.",
      personal:
        "This Pomodoro is the one I use: 25 minutes of focus, real breaks, no fuss. It's not the heart of franes.dev — it's a free extra for anyone who wants to try it.",
      cta: "Try the Pomodoro",
      pomodoroDesc: "25 min focus + breaks",
      note: "Secondary tool · Free · No signup",
    },
  }

  const t = content[language]

  const scrollToPomodoro = () => {
    document.getElementById("pomodoro")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="tools" className="py-16 md:py-20 px-4 border-t border-zinc-800/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-500 text-xs font-mono uppercase tracking-widest mb-5">
            <Wrench className="h-3.5 w-3.5" />
            {t.label}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">{t.subtitle}</p>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto italic">
            {t.personal}
          </p>

          <button
            onClick={scrollToPomodoro}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-brand/40 hover:bg-zinc-900 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-brand/15 transition-colors">
              <Clock className="h-5 w-5 text-zinc-400 group-hover:text-brand transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">{t.cta}</p>
              <p className="text-zinc-500 text-xs">{t.pomodoroDesc}</p>
            </div>
            <ArrowDown className="h-4 w-4 text-zinc-600 group-hover:text-brand ml-2 transition-colors" />
          </button>

          <p className="text-zinc-600 text-xs mt-4">{t.note}</p>
        </motion.div>
      </div>
    </section>
  )
}