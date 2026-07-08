"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Briefcase, Heart } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function AboutPapaDev() {
  const { language } = useLanguageContext()

  const content = {
    es: {
      title: "Sobre mí",
      tagline: "Piensa como programador. Vive mejor.",
      name: "Franklin Paute Machuca",
      role: "Papá Dev · Desarrollador Full Stack",
      story:
        "Soy desarrollador full-time de 8 a 5 y papá el resto del día. Desde Ecuador, comparto lo que aprendo sobre pensar con claridad — no solo en el trabajo, sino en la vida.",
      detail:
        "La programación me enseñó a descomponer problemas, cuestionar suposiciones y tomar mejores decisiones. Eso no es exclusivo de quien escribe código: es una forma de vivir mejor. Por eso creo contenido para todos, no solo para developers.",
      devLabel: "8 a 5",
      devDesc: "Desarrollador full-time",
      dadLabel: "Después",
      dadDesc: "Papá, creador, pensador",
    },
    en: {
      title: "About me",
      tagline: "Think like a programmer. Live better.",
      name: "Franklin Paute Machuca",
      role: "Dad Dev · Full Stack Developer",
      story:
        "I'm a full-time developer from 9 to 5 and a dad the rest of the day. From Ecuador, I share what I learn about thinking clearly — not just at work, but in life.",
      detail:
        "Programming taught me to break down problems, question assumptions, and make better decisions. That's not exclusive to people who write code — it's a way to live better. That's why I create content for everyone, not just developers.",
      devLabel: "9 to 5",
      devDesc: "Full-time developer",
      dadLabel: "After hours",
      dadDesc: "Dad, creator, thinker",
    },
  }

  const t = content[language]

  return (
    <section id="about" className="py-20 md:py-28 px-4 bg-zinc-950 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t.title}</h2>
          <div className="w-12 h-1 bg-brand rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="relative shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-brand/30 bg-zinc-800">
                <Image
                  src="/logo.png"
                  alt={`FranesDev — ${t.tagline}`}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-brand text-zinc-950 text-xs font-bold px-2.5 py-1 rounded-full">
                Papá Dev
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">{t.name}</h3>
              <p className="text-brand font-medium mb-5">{t.role}</p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-4">{t.story}</p>
              <p className="text-zinc-500 leading-relaxed">{t.detail}</p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                  <Briefcase className="h-5 w-5 text-brand shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.devLabel}</p>
                    <p className="text-zinc-500 text-xs">{t.devDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                  <Heart className="h-5 w-5 text-brand shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.dadLabel}</p>
                    <p className="text-zinc-500 text-xs">{t.dadDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}