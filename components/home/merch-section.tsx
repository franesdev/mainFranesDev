"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Shirt, Bell, Sparkles, ExternalLink } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

const SHOP_URL = "https://franesdev-shop.fourthwall.com"

const products = [
  { key: "hoodie", image: "/placeholder.jpg" },
  { key: "tshirt", image: "/placeholder.jpg" },
  { key: "mug", image: "/placeholder.jpg" },
]

export default function MerchSection() {
  const { language } = useLanguageContext()

  const content = {
    es: {
      label: "Merch",
      title: "Merch Papá Dev",
      badge: "Tienda disponible",
      desc: "Hoodies, camisetas y productos con frases de lógica y mentalidad. Ropa para quien piensa diferente — sin necesidad de saber programar.",
      shopCta: "Visitar tienda",
      moreComing: "Más diseños próximamente",
      products: {
        hoodie: { name: "Hoodie Lógica", tag: "Pensar antes de actuar" },
        tshirt: { name: "Camiseta Papá Dev", tag: "Piensa. Vive mejor." },
        mug: { name: "Taza Mentalidad", tag: "Café + claridad" },
      },
      comingSoon: "Próximamente",
      notify: "Avísame cuando salga",
    },
    en: {
      label: "Merch",
      title: "Dad Dev Merch",
      badge: "Store live",
      desc: "Hoodies, t-shirts, and products with logic and mindset phrases. Apparel for people who think differently — no coding required.",
      shopCta: "Visit store",
      moreComing: "More designs coming soon",
      products: {
        hoodie: { name: "Logic Hoodie", tag: "Think before you act" },
        tshirt: { name: "Dad Dev Tee", tag: "Think. Live better." },
        mug: { name: "Mindset Mug", tag: "Coffee + clarity" },
      },
      comingSoon: "Coming soon",
      notify: "Notify me when it drops",
    },
  }

  const t = content[language]

  const openEmailForm = () => {
    const cta = document.getElementById("cta")
    const input = document.getElementById("guide-email") as HTMLInputElement | null

    cta?.scrollIntoView({ behavior: "smooth", block: "center" })

    setTimeout(() => {
      input?.focus()
      cta?.classList.add("ring-2", "ring-brand/40")
      setTimeout(() => cta?.classList.remove("ring-2", "ring-brand/40"), 2000)
    }, 600)
  }

  return (
    <section id="merch" className="py-20 md:py-28 px-4 relative overflow-hidden border-t border-zinc-800/50">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-medium mb-5">
            <Shirt className="h-3.5 w-3.5" />
            {t.label}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.title}</h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
              {t.badge}
            </span>
          </div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">{t.desc}</p>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-zinc-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-brand/20 hover:-translate-y-0.5"
          >
            {t.shopCta}
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {products.map((product, i) => {
            const info = t.products[product.key as keyof typeof t.products]

            return (
              <motion.div
                key={product.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-brand/30 transition-colors duration-300"
              >
                <div className="relative aspect-[4/5] bg-zinc-800/50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={info.name}
                    fill
                    className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900/80 border border-zinc-700 flex items-center justify-center mb-4">
                      <Shirt className="h-7 w-7 text-zinc-600" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand mb-2">
                      {t.comingSoon}
                    </span>
                    <p className="text-white font-semibold">{info.name}</p>
                    <p className="text-zinc-500 text-sm mt-1 italic">&ldquo;{info.tag}&rdquo;</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-zinc-500 text-sm mb-4">{t.moreComing}</p>
          <button
            onClick={openEmailForm}
            className="inline-flex items-center justify-center gap-3 border border-zinc-700 hover:border-brand/50 text-zinc-300 hover:text-white px-8 py-3 rounded-xl transition-all duration-300"
          >
            <Bell className="h-4 w-4" />
            {t.notify}
          </button>
          <p className="flex items-center justify-center gap-1.5 text-zinc-600 text-xs mt-4">
            <Sparkles className="h-3.5 w-3.5" />
            {language === "es"
              ? "Para avisarte cuando lance nuevos diseños"
              : "Get notified when new designs drop"}
          </p>
        </motion.div>
      </div>
    </section>
  )
}