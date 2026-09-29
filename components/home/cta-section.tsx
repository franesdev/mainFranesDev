"use client"

import { motion } from "framer-motion"
import { FaYoutube } from "react-icons/fa"
import { Sparkles, Bell, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguageContext } from "@/contexts/LanguageContext"
import { useGuideSignup, honeypotInputProps } from "@/hooks/use-guide-signup"

export default function CtaSection() {
  const { language } = useLanguageContext()
  const { email, setEmail, submitted, loading, error, isInvalid, handleSubmit } = useGuideSignup()

  const content = {
    es: {
      title: "¿Listo para pensar diferente?",
      subtitle: "Únete a la comunidad. Contenido gratis, pensamiento real.",
      youtube: "Suscribirse en YouTube",
      guideTitle: "Guía gratuita de lógica",
      guideDesc:
        "Estoy preparando una guía para empezar a pensar como programador, sin escribir código. Déjame tu email y te aviso cuando esté lista.",
      guideBadge: "En preparación",
      guidePlaceholder: "tu@email.com",
      guideButton: "Avísame cuando esté lista",
      guideNote: "Sin spam. Solo un email cuando la guía esté disponible.",
      guideSuccess: "¡Listo! Te avisaré cuando la guía esté disponible.",
      guideError: "Algo salió mal. Intenta de nuevo o escríbeme directo por",
      guideInvalid: "Revisa tu email, parece incompleto. ¿Dudas? Escríbeme por",
    },
    en: {
      title: "Ready to think differently?",
      subtitle: "Join the community. Free content, real thinking.",
      youtube: "Subscribe on YouTube",
      guideTitle: "Free logic guide",
      guideDesc:
        "I'm preparing a guide to start thinking like a programmer, without writing code. Leave your email and I'll notify you when it's ready.",
      guideBadge: "In progress",
      guidePlaceholder: "your@email.com",
      guideButton: "Notify me when it's ready",
      guideNote: "No spam. Just one email when the guide is available.",
      guideSuccess: "Done! I'll let you know when the guide is ready.",
      guideError: "Something went wrong. Try again or reach me on",
      guideInvalid: "Check your email, it looks incomplete. Questions? Reach me on",
    },
  }

  const t = content[language]


  return (
    <section id="cta" className="py-14 md:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-brand/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-zinc-400 text-lg">{t.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <a
            href="https://youtube.com/@franesdev?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-dark text-zinc-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-brand/20 hover:-translate-y-0.5"
          >
            <FaYoutube className="h-5 w-5" />
            {t.youtube}
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start gap-4 mb-8">
            <div className="w-11 h-11 rounded-xl bg-brand/15 border border-brand/25 flex items-center justify-center shrink-0">
              <Sparkles className="h-5 w-5 text-brand" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">{t.guideTitle}</h3>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-brand/15 text-brand border border-brand/25">
                  {t.guideBadge}
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.guideDesc}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3">
            <input {...honeypotInputProps} />
            <label htmlFor="guide-email" className="sr-only">
              Email
            </label>
            <Input
              id="guide-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t.guidePlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={error}
              disabled={loading || submitted}
              className="flex-1 bg-zinc-800/80 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-brand/50 h-12"
              required
            />
            <Button
              type="submit"
              disabled={loading || submitted}
              className="bg-brand hover:bg-brand-dark text-zinc-950 font-semibold px-6 h-12 whitespace-nowrap"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : submitted ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <>
                  <Bell className="h-4 w-4 mr-2" />
                  {t.guideButton}
                </>
              )}
            </Button>
          </form>

          <div aria-live="polite">
            {submitted && (
              <p className="text-brand text-sm font-medium mt-4">{t.guideSuccess}</p>
            )}

            {error && (
              <p className="text-red-400 text-sm mt-4">
                {isInvalid ? t.guideInvalid : t.guideError}{" "}
                <a
                  href="https://wa.me/593997825115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-red-300"
                >
                  WhatsApp
                </a>
              </p>
            )}
          </div>

          <p className="text-zinc-600 text-xs mt-4">{t.guideNote}</p>
        </motion.div>
      </div>
    </section>
  )
}