"use client"

import { motion } from "framer-motion"
import { FaYoutube, FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa"
import { ExternalLink, Users, ShoppingBag, Shirt } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

const SHOP_URL = "https://franesdev-shop.fourthwall.com"

const platforms = [
  {
    id: "youtube",
    icon: FaYoutube,
    href: "https://youtube.com/@franesdev",
    accent: "from-red-600/20 to-red-600/5",
    iconColor: "text-red-500",
    borderHover: "hover:border-red-500/40",
    glow: "group-hover:shadow-red-500/10",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    href: "https://instagram.com/franesdev",
    accent: "from-pink-600/20 to-pink-600/5",
    iconColor: "text-pink-500",
    borderHover: "hover:border-pink-500/40",
    glow: "group-hover:shadow-pink-500/10",
  },
  {
    id: "tiktok",
    icon: FaTiktok,
    href: "https://tiktok.com/@franesdev",
    accent: "from-zinc-400/20 to-zinc-400/5",
    iconColor: "text-zinc-200",
    borderHover: "hover:border-zinc-400/40",
    glow: "group-hover:shadow-zinc-400/10",
  },
  {
    id: "facebook",
    icon: FaFacebookF,
    href: "https://facebook.com/franesdev",
    accent: "from-blue-600/20 to-blue-600/5",
    iconColor: "text-blue-500",
    borderHover: "hover:border-blue-500/40",
    glow: "group-hover:shadow-blue-500/10",
  },
]

export default function SocialSection() {
  const { language } = useLanguageContext()

  const content = {
    es: {
      label: "Comunidad",
      title: "Sígueme en redes",
      subtitle:
        "Acertijos, mentalidad y vida real de Papá Dev. Cada plataforma con su propio ritmo — elige la tuya.",
      follow: "Visitar",
      shopTitle: "Ropa Dev",
      shopDesc: "Hoodies, camisetas y merch con frases de lógica y mentalidad. Tienda oficial Papá Dev.",
      shopCta: "Ir a la tienda",
      platforms: {
        youtube: { name: "YouTube", desc: "Videos largos, acertijos y reflexiones sobre cómo pensar mejor." },
        instagram: { name: "Instagram", desc: "Reels, historias y momentos reales entre código y familia." },
        tiktok: { name: "TikTok", desc: "Retos rápidos de lógica y pensamiento en menos de un minuto." },
        facebook: { name: "Facebook", desc: "Comunidad, publicaciones y conversaciones con la audiencia." },
      },
    },
    en: {
      label: "Community",
      title: "Follow me online",
      subtitle:
        "Logic puzzles, mindset, and real Dad Dev life. Each platform has its own rhythm — pick yours.",
      follow: "Visit",
      shopTitle: "Dev Shop",
      shopDesc: "Hoodies, tees, and merch with logic and mindset phrases. Official Dad Dev store.",
      shopCta: "Go to store",
      platforms: {
        youtube: { name: "YouTube", desc: "Long-form videos, puzzles, and reflections on thinking better." },
        instagram: { name: "Instagram", desc: "Reels, stories, and real moments between code and family." },
        tiktok: { name: "TikTok", desc: "Quick logic challenges and thinking in under a minute." },
        facebook: { name: "Facebook", desc: "Community posts and conversations with the audience." },
      },
    },
  }

  const t = content[language]

  return (
    <section id="social" className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-medium mb-5">
            <Users className="h-3.5 w-3.5" />
            {t.label}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((platform, i) => {
            const info = t.platforms[platform.id as keyof typeof t.platforms]
            const Icon = platform.icon

            return (
              <motion.a
                key={platform.id}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${platform.borderHover} ${platform.glow}`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${platform.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-6 w-6 ${platform.iconColor}`} />
                    </div>
                    <ExternalLink className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {info.name}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4 group-hover:text-zinc-400 transition-colors">
                    {info.desc}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand uppercase tracking-wider">
                    {t.follow}
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="group relative mt-6 flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-brand/15 via-zinc-900/80 to-brand/10 border border-brand/30 rounded-2xl p-6 md:p-8 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10 transition-all duration-300"
        >
          <div className="relative w-16 h-16 rounded-2xl bg-brand/20 border border-brand/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Shirt className="h-8 w-8 text-brand absolute opacity-40" />
            <ShoppingBag className="h-7 w-7 text-brand relative z-10" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white mb-1">{t.shopTitle}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{t.shopDesc}</p>
          </div>
          <span className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-zinc-950 font-semibold px-6 py-3 rounded-xl transition-colors shrink-0">
            {t.shopCta}
            <ExternalLink className="h-4 w-4" />
          </span>
        </motion.a>
      </div>
    </section>
  )
}