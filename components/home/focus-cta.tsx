"use client"

import Link from "next/link"
import { Timer, Headphones, ArrowRight } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function FocusCta() {
  const { language } = useLanguageContext()

  const content = {
    es: {
      label: "Herramienta gratis",
      title: "Herramienta de enfoque",
      desc: "Pomodoro online con música HolaBeats para concentrarte. Sin registro.",
      cta: "Abrir",
    },
    en: {
      label: "Free tool",
      title: "Focus tool",
      desc: "Online Pomodoro timer with HolaBeats music to help you focus. No signup.",
      cta: "Open",
    },
  }

  const t = content[language]

  return (
    <section id="enfoque" className="py-10 md:py-14 px-4">
      <Link
        href="/enfoque"
        className="group max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border border-zinc-800 bg-gradient-to-r from-brand-navy to-zinc-900/60 p-6 md:p-8 hover:border-brand/40 transition-colors"
      >
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-12 h-12 rounded-xl bg-brand/15 border border-brand/25 flex items-center justify-center">
            <Timer className="h-6 w-6 text-brand" />
          </span>
          <span className="w-12 h-12 rounded-xl bg-brand-teal/15 border border-brand-teal/25 flex items-center justify-center">
            <Headphones className="h-6 w-6 text-brand-teal" />
          </span>
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-1">{t.label}</p>
          <h2 className="text-xl md:text-2xl font-bold text-white">{t.title} →</h2>
          <p className="text-zinc-400 mt-1">{t.desc}</p>
        </div>
        <span className="inline-flex items-center justify-center gap-2 bg-brand group-hover:bg-brand-dark text-zinc-950 font-semibold px-6 py-3 rounded-xl transition-colors shrink-0">
          {t.cta}
          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </Link>
    </section>
  )
}
