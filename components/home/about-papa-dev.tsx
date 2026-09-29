"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguageContext } from "@/contexts/LanguageContext"
import { ABOUT_PHOTO, aboutStats } from "@/lib/site-config"

export default function AboutPapaDev() {
  const { language } = useLanguageContext()

  // ✏️ Textos de la sección (ES/EN)
  const content = {
    es: {
      title: "Sobre mí",
      name: "Franklin Paute Machuca",
      role: "Papá Dev · Desarrollador Full Stack",
      photoAlt: "Franklin Paute, FranesDev",
      bio: [
        "Soy desarrollador full-stack desde 2014 y papá, desde Cuenca, Ecuador.",
        "Programar me enseñó a descomponer problemas, cuestionar suposiciones y decidir con criterio. Uso esa misma forma de pensar para vivir mejor: en el trabajo, en casa y en las decisiones de cada día.",
        "Aquí la comparto contigo, aunque nunca hayas escrito una línea de código.",
      ],
    },
    en: {
      title: "About me",
      name: "Franklin Paute Machuca",
      role: "Dad Dev · Full Stack Developer",
      photoAlt: "Franklin Paute, FranesDev",
      bio: [
        "I've been a full-stack developer since 2014, and I'm a dad from Cuenca, Ecuador.",
        "Programming taught me to break down problems, question assumptions, and decide with judgment. I use that same way of thinking to live better: at work, at home, and in everyday decisions.",
        "Here I share it with you, even if you've never written a line of code.",
      ],
    },
  }

  const t = content[language]

  return (
    <section id="about" className="py-14 md:py-20 px-4 bg-zinc-950 relative">
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center"
      >
        <div className="md:col-span-2 relative max-w-xs w-full mx-auto md:max-w-none">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-brand/30 bg-zinc-800">
            <Image
              src={ABOUT_PHOTO}
              alt={t.photoAlt}
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 bg-brand text-zinc-950 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
            Papá Dev
          </div>
        </div>

        <div className="md:col-span-3 text-center md:text-left">
          <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-2">{t.title}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{t.name}</h2>
          <p className="text-zinc-400 font-medium mb-6">{t.role}</p>

          <div className="space-y-3 mb-8">
            {t.bio.map((paragraph, i) => (
              <p
                key={i}
                className={i === 0 ? "text-zinc-200 text-lg leading-relaxed" : "text-zinc-400 leading-relaxed"}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {aboutStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-xl bg-zinc-900/60 border border-zinc-800 px-3 py-4 text-center md:text-left"
              >
                <p className="text-xl md:text-2xl font-bold text-brand leading-tight">{stat.value}</p>
                <p className="text-zinc-500 text-xs mt-1">{stat.label[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
