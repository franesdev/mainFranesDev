"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Get language from localStorage
    const storedLanguage = localStorage.getItem("language") as "en" | "es" | null
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }

    // Listen for language changes
    const handleLanguageChange = () => {
      const newLanguage = localStorage.getItem("language") as "en" | "es" | null
      if (newLanguage) {
        setLanguage(newLanguage)
      }
    }

    window.addEventListener("languageChange", handleLanguageChange)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange)
    }
  }, [])

  const content = {
    en: {
      title: "Are you looking for developing talent?",
      subtitle: "I'm here for new challenges!",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      successMessage: "Message sent successfully! I'll get back to you soon.",
      getInTouch: "Get in Touch",
      contactInfo: "Have a project in mind or just want to say hello? Feel free to reach out!",
    },
    es: {
      title: "¿Estás buscando talento para desarrollo?",
      subtitle: "¡Estoy aquí para nuevos desafíos!",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "Tu Email",
      messagePlaceholder: "Tu Mensaje",
      sendButton: "Enviar Mensaje",
      sending: "Enviando...",
      successMessage: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.",
      getInTouch: "Ponte en Contacto",
      contactInfo: "¿Tienes un proyecto en mente o simplemente quieres saludar? ¡No dudes en contactarme!",
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden">
      {/* Glassmorphism elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full -translate-y-1/2 translate-x-1/2 filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500/5 rounded-full translate-y-1/2 -translate-x-1/2 filter blur-3xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lime-500">{content[language].title}</h2>
          <p className="mt-4 text-zinc-300">{content[language].subtitle}</p>
        </motion.div>

        <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-8 bg-gradient-to-br from-lime-500/20 via-lime-500/10 to-transparent"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{content[language].getInTouch}</h3>
                <p className="text-zinc-300 mb-6">{content[language].contactInfo}</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-lime-500/20 backdrop-blur-sm flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-lime-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-zinc-300">contact@franesdev.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-lime-500/20 backdrop-blur-sm flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-lime-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="text-zinc-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-lime-500/20 backdrop-blur-sm flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-lime-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-zinc-300">Ecuador</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-8"
              >
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-8">
                    <CheckCircle className="h-16 w-16 text-lime-500 mb-4" />
                    <p className="text-white text-xl text-center">{content[language].successMessage}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder={content[language].namePlaceholder}
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800/50 backdrop-blur-sm border-zinc-700 focus:border-lime-500 text-white"
                      />
                    </div>

                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder={content[language].emailPlaceholder}
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800/50 backdrop-blur-sm border-zinc-700 focus:border-lime-500 text-white"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder={content[language].messagePlaceholder}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800/50 backdrop-blur-sm border-zinc-700 focus:border-lime-500 text-white min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-lime-500 hover:bg-lime-600 text-zinc-900 font-medium"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-zinc-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {content[language].sending}
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          {content[language].sendButton}
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
