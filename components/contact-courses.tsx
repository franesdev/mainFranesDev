"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MessageSquare, Phone, Zap, CheckCircle2 } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function CourseContact() {
  const { language } = useLanguageContext()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const content = {
    en: {
      title: "Follow the Journey",
      subtitle: "Stay connected as I build and share",
      cta_text: "If you want to follow the journey and get in touch, here's where you can find me. No spam, just real updates and open conversations.",
      email_placeholder: "your@email.com",
      cta_button: "Subscribe",
      success: "✓ Thanks! Check your email to confirm.",
      contact_title: "Get In Touch",
      contact_subtitle: "Questions? Want to collaborate or chat about code?",
      email_label: "Email",
      email_value: "contact@franesdev.com",
      whatsapp_label: "WhatsApp",
      whatsapp_value: "+593 99 782 5115",
      twitter_label: "Twitter / X",
      twitter_value: "@franesdev",
      instagram_label: "Instagram",
      instagram_value: "@franesdev",
      links: {
        email: "mailto:contact@franesdev.com",
        whatsapp: "https://wa.me/593997825115",
        twitter: "https://x.com/franesdev",
        instagram: "https://instagram.com/franesdev"
      }
    },
    es: {
      title: "Sigue el Viaje",
      subtitle: "Mantente conectado mientras construyo y comparto",
      cta_text: "Si quieres seguir el viaje y estar en contacto, aquí es donde puedes encontrarme. Sin spam, solo actualizaciones reales y conversaciones abiertas.",
      email_placeholder: "tu@email.com",
      cta_button: "Suscribirse",
      success: "✓ ¡Gracias! Revisa tu correo para confirmar.",
      contact_title: "Ponte en Contacto",
      contact_subtitle: "¿Preguntas? ¿Quieres colaborar o hablar sobre código?",
      email_label: "Email",
      email_value: "contact@franesdev.com",
      whatsapp_label: "WhatsApp",
      whatsapp_value: "+593 99 782 5115",
      twitter_label: "Twitter / X",
      twitter_value: "@franesdev",
      instagram_label: "Instagram",
      instagram_value: "@franesdev",
      links: {
        email: "mailto:contact@franesdev.com",
        whatsapp: "https://wa.me/593997825115",
        twitter: "https://x.com/franesdev",
        instagram: "https://instagram.com/franesdev"
      }
    }
  }

  const data = content[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setEmail("")
    setIsLoading(false)

    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  const contactLinks = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: data.email_label,
      value: data.email_value,
      href: data.links.email
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: data.whatsapp_label,
      value: data.whatsapp_value,
      href: data.links.whatsapp
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      label: data.twitter_label,
      value: data.twitter_value,
      href: data.links.twitter
    },
    {
      icon: <Zap className="h-6 w-6" />,
      label: data.instagram_label,
      value: data.instagram_value,
      href: data.links.instagram
    }
  ]

  return (
    <section className="py-20 px-4 bg-zinc-950 relative overflow-hidden" id="contact-courses">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Newsletter Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-lime-500/20 to-lime-500/5 border border-lime-500/30 rounded-2xl p-12 md:p-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{data.title}</h2>
              <p className="text-xl text-zinc-400 mb-8">{data.subtitle}</p>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-8">
                <p className="text-lime-400 font-medium flex items-center gap-2 mb-6">
                  <Zap className="h-5 w-5" />
                  {data.cta_text}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
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
                    className="text-lime-400 text-sm mt-4 font-medium"
                  >
                    {data.success}
                  </motion.p>
                )}
              </div>

              <p className="text-zinc-500 text-sm">
                Real updates, no spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.contact_title}</h2>
            <p className="text-xl text-zinc-400">{data.contact_subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-lime-500/50 transition-all hover:bg-zinc-900/70">
                  <div className="text-lime-500 mb-4 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <p className="text-zinc-500 text-sm mb-2">{link.label}</p>
                  <p className="text-white font-semibold group-hover:text-lime-400 transition-colors break-words">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-zinc-400 mb-6">
            Got ideas, feedback, or just want to chat about code? Let's talk.
          </p>
          <Button
            asChild
            className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-6 text-lg"
          >
            <a href={data.links.whatsapp} target="_blank" rel="noopener noreferrer">
              Send a Message
              <MessageSquare className="h-5 w-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
