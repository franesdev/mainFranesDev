"use client"

import { useEffect } from "react"
import { X, Sparkles, Loader2, CheckCircle2 } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"
import { useGuideSignup, honeypotInputProps } from "@/hooks/use-guide-signup"
import { whatsappLink } from "@/lib/site-config"

// ✏️ Textos del aviso. Cuando la guía esté lista, cambia "note" por algo como "Te llega al instante a tu correo."
const content = {
  es: {
    title: "¿Te funcionó?",
    body: "Llévate mi guía gratis para pensar como programador.",
    note: "Te la envío a tu correo apenas esté lista. Sin spam.",
    placeholder: "tu@email.com",
    button: "Quiero la guía",
    success: "¡Listo! Te escribo pronto.",
    invalid: "Revisa tu email, parece incompleto.",
    error: "No se pudo enviar. Prueba de nuevo o escríbeme por",
    close: "Cerrar",
  },
  en: {
    title: "Did it work for you?",
    body: "Get my free guide to think like a programmer.",
    note: "I'll email it to you as soon as it's ready. No spam.",
    placeholder: "your@email.com",
    button: "Get the guide",
    success: "Done! I'll write to you soon.",
    invalid: "Check your email, it looks incomplete.",
    error: "It couldn't be sent. Try again or reach me on",
    close: "Close",
  },
}

export default function GuidePrompt({ onClose }: { onClose: () => void }) {
  const { language } = useLanguageContext()
  const t = content[language]
  const { email, setEmail, submitted, loading, error, isInvalid, handleSubmit } = useGuideSignup()

  // Tras suscribirse, el aviso se cierra solo
  useEffect(() => {
    if (!submitted) return
    const id = setTimeout(onClose, 5000)
    return () => clearTimeout(id)
  }, [submitted, onClose])

  return (
    <aside
      role="dialog"
      aria-label={t.title}
      className="fixed z-40 bottom-4 left-4 right-20 sm:right-auto sm:w-[24rem] rounded-2xl border border-brand/30 bg-zinc-950/95 backdrop-blur p-5 shadow-2xl shadow-black/50 animate-in slide-in-from-bottom-4 fade-in duration-500"
    >
      <button
        onClick={onClose}
        aria-label={t.close}
        className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="flex gap-3 pr-5">
        <div className="w-9 h-9 rounded-lg bg-brand/15 border border-brand/25 flex items-center justify-center shrink-0">
          <Sparkles className="h-4 w-4 text-brand" />
        </div>
        <div>
          <p className="text-white font-semibold">{t.title}</p>
          <p className="text-zinc-300 text-sm leading-snug">{t.body}</p>
        </div>
      </div>

      {submitted ? (
        <p className="mt-4 flex items-center gap-2 text-brand text-sm font-medium" aria-live="polite">
          <CheckCircle2 className="h-4 w-4" />
          {t.success}
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-4 flex flex-col gap-2">
          <input {...honeypotInputProps} />
          <label htmlFor="focus-guide-email" className="sr-only">
            Email
          </label>
          <div className="flex gap-2">
            <input
              id="focus-guide-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={error}
              disabled={loading}
              className="min-w-0 flex-1 h-10 rounded-lg bg-zinc-800 border border-zinc-700 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand/50"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="h-10 px-4 rounded-lg bg-brand hover:bg-brand-dark text-zinc-950 text-sm font-semibold whitespace-nowrap inline-flex items-center justify-center disabled:opacity-60"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : t.button}
            </button>
          </div>
          <div aria-live="polite">
            {error ? (
              <p className="text-red-400 text-xs">
                {isInvalid ? (
                  t.invalid
                ) : (
                  <>
                    {t.error}{" "}
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline">
                      WhatsApp
                    </a>
                  </>
                )}
              </p>
            ) : (
              <p className="text-zinc-500 text-xs">{t.note}</p>
            )}
          </div>
        </form>
      )}
    </aside>
  )
}
