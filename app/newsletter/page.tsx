"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, CheckCircle2, ArrowLeft } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"
import Link from "next/link"
import emailjs from "emailjs-com"

export default function Newsletter() {
  const { language } = useLanguageContext()
  const form = useRef<HTMLFormElement>(null)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const content = {
    en: {
      title: "Dev Log",
      subtitle: "Email notes on building software, systems, and scale",
      description: "Join developers who want real insights, no BS. Dev Log is a periodic email where I share enterprise systems, FinTech, architecture decisions, and the actual process of building at scale.",
      cta_text: "Subscribe to Dev Log and get these notes directly in your inbox. Real updates when I have something worth sharing. No spam. Unsubscribe anytime.",
      email_placeholder: "your@email.com",
      cta_button: "Subscribe to Dev Log",
      success: "✓ Thanks! Check your email to confirm.",
      privacy: "Real updates, no spam. Unsubscribe anytime.",
      back_button: "Back to Home"
    },
    es: {
      title: "Dev Log",
      subtitle: "Notas por email sobre construir software, sistemas y escala",
      description: "Únete a developers que quieren insights reales, sin BS. Dev Log es un email periódico donde comparto sistemas empresariales, FinTech, decisiones de arquitectura y el proceso real de construir a escala.",
      cta_text: "Suscríbete a Dev Log y recibe estas notas directamente en tu inbox. Actualizaciones reales cuando tenga algo que valga la pena compartir. Sin spam. Desuscríbete cuando quieras.",
      email_placeholder: "tu@email.com",
      cta_button: "Suscribirse a Dev Log",
      success: "✓ ¡Gracias! Revisa tu correo para confirmar.",
      privacy: "Actualizaciones reales, sin spam. Desuscríbete cuando quieras.",
      back_button: "Volver al Inicio"
    }
  }

  const data = content[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      if (form.current) {
        // Create a temporary form with the email data
        const templateParams = {
          email: email,
          message: "New subscriber to Dev Log newsletter"
        }
        
        await emailjs.send(
          "service_2626zss",
          "emailcontactportafolio",
          templateParams,
          "u6wrgff2uwwCpj5hr"
        )
        setSubmitted(true)
        setEmail("")
        
        // Reset after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      }
    } catch (error) {
      console.error("Error sending subscription:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" className="border-lime-500 text-lime-400 hover:bg-lime-500/10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {data.back_button}
          </Button>
        </Link>
      </div>

      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/98 to-zinc-900/95 z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-gradient-to-r from-lime-500/20 to-lime-500/5 border border-lime-500/30 rounded-2xl p-12 md:p-16">
              <div className="text-center mb-12">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {data.title}
                </motion.h2>
                <motion.p
                  className="text-xl text-zinc-400 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {data.subtitle}
                </motion.p>
                <motion.p
                  className="text-lg text-zinc-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {data.description}
                </motion.p>
              </div>

              <motion.div
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-lime-400 font-medium flex items-center gap-2 mb-8 justify-center md:justify-start">
                  <Zap className="h-5 w-5" />
                  {data.cta_text}
                </p>

                <form ref={form} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Input
                    type="email"
                    name="email"
                    placeholder={data.email_placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || submitted}
                    className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8"
                  >
                    {submitted ? <CheckCircle2 className="h-5 w-5" /> : data.cta_button}
                  </Button>
                </form>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lime-400 text-sm font-medium text-center"
                  >
                    {data.success}
                  </motion.p>
                )}

                <p className="text-zinc-500 text-sm text-center mt-6">
                  {data.privacy}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
