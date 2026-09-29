"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Target, Smartphone, Wrench, Rocket } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { useLanguageContext } from "@/contexts/LanguageContext"
import { landingExamples, whatsappLink } from "@/lib/site-config"

export default function ServicesSection() {
  const { language } = useLanguageContext()

  // ✏️ Textos del servicio (ES/EN)
  const content = {
    es: {
      label: "Servicio",
      title: "Páginas que venden",
      pitch:
        "Convierto lo que ya tienes —tu negocio, tus fotos, tus clientes felices— en una web que vende. Una página clara, rápida y pensada para que el visitante te escriba, no solo para que se vea bonita.",
      includesTitle: "Qué incluye",
      includes: [
        {
          icon: Target,
          title: "Diseño enfocado en convertir",
          desc: "Estructura y textos pensados para que el visitante entienda qué ofreces y te contacte.",
        },
        {
          icon: Smartphone,
          title: "Rápida, en celular y en Google",
          desc: "Carga veloz en móvil, SEO básico y conectada a tu WhatsApp y redes.",
        },
        {
          icon: Wrench,
          title: "Pago único + mantenimiento anual",
          desc: "Una inversión de entrada y un plan anual básico para que siga funcionando sin que te preocupes.",
        },
      ],
      cta: "Cotiza tu página por WhatsApp",
      ctaNote: "Te respondo personalmente. Sin compromiso.",
      whatsappText: "Hola Franklin, vi tu web y quiero una página que venda para mi negocio.",
      exampleTag: "Ejemplo ilustrativo",
    },
    en: {
      label: "Service",
      title: "Websites that sell",
      pitch:
        "I turn what you already have —your business, your photos, your happy customers— into a website that sells. A clear, fast page built to get visitors to reach out, not just to look nice.",
      includesTitle: "What's included",
      includes: [
        {
          icon: Target,
          title: "Conversion-focused design",
          desc: "Structure and copy built so visitors understand what you offer and contact you.",
        },
        {
          icon: Smartphone,
          title: "Fast, mobile, and on Google",
          desc: "Quick loading on mobile, basic SEO, and connected to your WhatsApp and socials.",
        },
        {
          icon: Wrench,
          title: "One-time fee + yearly maintenance",
          desc: "An upfront investment and a basic yearly plan so it keeps working without worries.",
        },
      ],
      cta: "Get a quote on WhatsApp",
      ctaNote: "I reply personally. No commitment.",
      whatsappText: "Hi Franklin, I saw your website and I want a page that sells for my business.",
      exampleTag: "Illustrative example",
    },
  }

  const t = content[language]

  return (
    <section id="servicios" className="py-14 md:py-20 px-4 bg-zinc-900/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-medium mb-4">
            <Rocket className="h-3.5 w-3.5" />
            {t.label}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-8">{t.pitch}</p>

          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">{t.includesTitle}</p>
          <ul className="space-y-4 mb-8">
            {t.includes.map((item) => (
              <li key={item.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/15 border border-brand/25 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(t.whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-brand hover:bg-brand-dark text-zinc-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-brand/20 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="h-5 w-5" />
            {t.cta}
          </a>
          <p className="text-zinc-500 text-sm mt-3">{t.ctaNote}</p>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-1 gap-4"
        >
          {landingExamples.map((example, i) => (
            <figure
              key={example.image}
              className={`relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 ${
                i === 1 ? "lg:w-4/5 lg:ml-auto" : ""
              }`}
            >
              <Image
                src={example.image}
                alt={example.alt[language]}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
              <figcaption className="absolute top-3 left-3 text-[11px] font-medium px-2.5 py-1 rounded-full bg-zinc-950/80 text-zinc-300 border border-zinc-700">
                {t.exampleTag}
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
