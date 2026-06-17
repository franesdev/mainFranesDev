"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MessageSquare, Phone, CheckCircle2, Send } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { useLanguageContext } from "@/contexts/LanguageContext"
import { sendContactForm } from "@/lib/email-subscriptions"

export default function ContactSection() {
  const { language } = useLanguageContext()
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const content = {
    es: {
      title: "Contacto",
      subtitle: "¿Tienes una pregunta, idea o quieres colaborar? Escríbeme.",
      formTitle: "Envíame un mensaje",
      name: "Tu nombre",
      email: "tu@email.com",
      message: "Tu mensaje...",
      send: "Enviar mensaje",
      success: "Mensaje enviado. Te responderé pronto.",
      quickTitle: "O contáctame directo",
      emailLabel: "Email",
      emailValue: "franesdev@gmail.com",
      whatsappLabel: "WhatsApp",
      whatsappValue: "+593 99 782 5115",
      instagramLabel: "Instagram",
      instagramValue: "@franesdev",
    },
    en: {
      title: "Contact",
      subtitle: "Have a question, idea, or want to collaborate? Reach out.",
      formTitle: "Send me a message",
      name: "Your name",
      email: "your@email.com",
      message: "Your message...",
      send: "Send message",
      success: "Message sent. I'll get back to you soon.",
      quickTitle: "Or reach me directly",
      emailLabel: "Email",
      emailValue: "franesdev@gmail.com",
      whatsappLabel: "WhatsApp",
      whatsappValue: "+593 99 782 5115",
      instagramLabel: "Instagram",
      instagramValue: "@franesdev",
    },
  }

  const t = content[language]

  const quickLinks: {
    icon: React.ReactNode
    label: string
    value: string
    href: string
  }[] = [
    {
      icon: <Mail className="h-5 w-5 text-brand" />,
      label: t.emailLabel,
      value: t.emailValue,
      href: `mailto:${t.emailValue}`,
    },
    {
      icon: <Phone className="h-5 w-5 text-brand" />,
      label: t.whatsappLabel,
      value: t.whatsappValue,
      href: "https://wa.me/593997825115",
    },
    {
      icon: <FaInstagram className="h-5 w-5 text-brand" />,
      label: t.instagramLabel,
      value: t.instagramValue,
      href: "https://instagram.com/franesdev",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setLoading(true)
    try {
      if (formRef.current) {
        await sendContactForm(formRef.current)
        setSubmitted(true)
        setForm({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error sending contact form:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-4 bg-zinc-900/20 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-zinc-400 text-lg">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-brand" />
              {t.formTitle}
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="user_name"
                placeholder={t.name}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-zinc-800/80 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-brand/50"
                required
              />
              <Input
                type="email"
                name="user_email"
                placeholder={t.email}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-zinc-800/80 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-brand/50"
                required
              />
              <textarea
                name="message"
                placeholder={t.message}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full h-32 bg-zinc-800/80 border border-zinc-700 text-white placeholder:text-zinc-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 resize-none"
                required
              />
              <Button
                type="submit"
                disabled={loading || submitted}
                className="w-full bg-brand hover:bg-brand-dark text-zinc-950 font-semibold py-5"
              >
                {submitted ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    {t.send}
                  </>
                )}
              </Button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-brand text-sm text-center font-medium"
                >
                  {t.success}
                </motion.p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">
              {t.quickTitle}
            </p>

            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-brand/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-zinc-500 text-xs mb-0.5">{link.label}</p>
                  <p className="text-white font-medium text-sm group-hover:text-brand transition-colors truncate">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}