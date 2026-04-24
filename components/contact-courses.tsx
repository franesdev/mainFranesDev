"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MessageSquare, Phone, Zap, CheckCircle2 } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"
import Link from "next/link"
import emailjs from "emailjs-com"

export default function CourseContact() {
  const { language } = useLanguageContext()
  const form = useRef<HTMLFormElement>(null)
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [contactLoading, setContactLoading] = useState(false)

  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Questions? Want to collaborate or chat about code?",
      form_title: "Send Me a Message",
      form_subtitle: "I'll get back to you as soon as possible",
      name_placeholder: "Your name",
      email_placeholder: "your@email.com",
      message_placeholder: "Your message...",
      send_button: "Send Message",
      success: "✓ Message sent! I'll be in touch soon.",
      newsletter_cta: "Get the weekly logic challenge + Dev Log",
      newsletter_description: "Every week: one logic challenge, what AI gets wrong, and notes from the real coding process. No spam. Just the things worth sharing.",
      newsletter_button: "Subscribe — It's Free",
      email_label: "Email",
      email_value: "contact@franesdev.com",
      whatsapp_label: "WhatsApp",
      whatsapp_value: "+593 99 782 5115",
      twitter_label: "Twitter / X",
      twitter_value: "@franesdev",
      instagram_label: "Instagram",
      instagram_value: "@franesdev",
      links: {
        whatsapp: "https://wa.me/593997825115",
        twitter: "https://x.com/franesdev",
        instagram: "https://instagram.com/franesdev"
      }
    },
    es: {
      title: "Ponte en Contacto",
      subtitle: "¿Preguntas? ¿Quieres colaborar o hablar sobre código?",
      form_title: "Envíame un Mensaje",
      form_subtitle: "Te responderé lo antes posible",
      name_placeholder: "Tu nombre",
      email_placeholder: "tu@email.com",
      message_placeholder: "Tu mensaje...",
      send_button: "Enviar Mensaje",
      success: "✓ ¡Mensaje enviado! Me pondré en contacto pronto.",
      newsletter_cta: "Recibe el reto semanal + Dev Log",
      newsletter_description: "Cada semana: un reto de lógica, en qué falla la IA, y notas del proceso real de programar. Sin spam. Solo lo que vale la pena compartir.",
      newsletter_button: "Suscribirme — Es Gratis",
      email_label: "Email",
      email_value: "contact@franesdev.com",
      whatsapp_label: "WhatsApp",
      whatsapp_value: "+593 99 782 5115",
      twitter_label: "Twitter / X",
      twitter_value: "@franesdev",
      instagram_label: "Instagram",
      instagram_value: "@franesdev",
      links: {
        whatsapp: "https://wa.me/593997825115",
        twitter: "https://x.com/franesdev",
        instagram: "https://instagram.com/franesdev"
      }
    }
  }

  const data = content[language]

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.message) return

    setContactLoading(true)
    try {
      if (form.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        setContactSubmitted(true)
        setContactForm({ name: "", email: "", message: "" })
        
        // Reset after 5 seconds
        setTimeout(() => {
          setContactSubmitted(false)
        }, 5000)
      }
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setContactLoading(false)
    }
  }

  const contactLinks = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: data.email_label,
      value: data.email_value,
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
        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {data.title}
            </motion.h2>
            <motion.p
              className="text-xl text-zinc-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {data.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{data.form_title}</h3>
              <p className="text-zinc-400 text-sm mb-6">{data.form_subtitle}</p>
              
              <form ref={form} onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="user_name"
                    placeholder={data.name_placeholder}
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder={data.email_placeholder}
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder={data.message_placeholder}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full h-32 bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 rounded-md p-3 focus:outline-none focus:border-lime-500/50 transition-colors resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={contactLoading || contactSubmitted}
                  className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-2"
                >
                  {contactSubmitted ? <CheckCircle2 className="h-5 w-5" /> : data.send_button}
                </Button>

                {contactSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lime-400 text-sm text-center font-medium"
                  >
                    {data.success}
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Info & Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Contact Methods */}
              {contactLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={link.href ? "group" : ""}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
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
                    </a>
                  ) : (
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                      <div className="text-lime-500 mb-4">
                        {link.icon}
                      </div>
                      <p className="text-zinc-500 text-sm mb-2">{link.label}</p>
                      <p className="text-white font-semibold break-words">
                        {link.value}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Newsletter CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-gradient-to-r from-lime-500/20 to-lime-500/5 border border-lime-500/30 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-2">{data.newsletter_cta}</h3>
                <p className="text-sm text-zinc-400 mb-4">{data.newsletter_description}</p>
                <Link href="/newsletter" className="block">
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold">
                    {data.newsletter_button}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
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
            Prefer a quick chat?
          </p>
          <Button
            asChild
            className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-6 text-lg"
          >
            <a href={data.links.whatsapp} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
              <MessageSquare className="h-5 w-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
