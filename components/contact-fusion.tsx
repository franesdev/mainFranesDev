"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"
import emailjs from "emailjs-com"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
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

    if (form.current) {
      emailjs
          .sendForm(
              "service_2626zss",
              "emailcontactportafolio",
              form.current,
              "u6wrgff2uwwCpj5hr"
          )
          .then(
              (result) => {
                console.log("Email sent successfully:", result.text)
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
              },
              (error) => {
                console.error("Failed to send email:", error.text)
                setIsSubmitting(false)
                // You could add error handling UI here
              }
          )
    } else {
      console.error("Form reference is null")
      setIsSubmitting(false)
    }
  }

  return (
      <section id="contact" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-lime-500/3 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-2 w-2 bg-lime-500 rounded-full top-1/4 left-1/4 animate-float-slow"></div>
          <div className="absolute h-2 w-2 bg-lime-500 rounded-full top-3/4 right-1/4 animate-float"></div>
          <div className="absolute h-3 w-3 bg-lime-500 rounded-full top-1/2 left-3/4 animate-float-slower"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative">
              {content[language].title}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-lime-500/0 via-lime-500 to-lime-500/0"></div>
            </h2>
            <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">{content[language].subtitle}</p>
          </motion.div>

          <Card className="bg-zinc-900/30 backdrop-blur-md border-zinc-800/50 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-lime-500/5 to-lime-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="p-8 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-500 transition-colors duration-300">
                      {content[language].getInTouch}
                    </h3>
                    <p className="text-zinc-400 mb-8 leading-relaxed">{content[language].contactInfo}</p>
                    <div className="space-y-6">
                      <motion.div 
                        className="group/item flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-zinc-800/50 backdrop-blur-sm flex items-center justify-center mr-4 group-hover/item:bg-lime-500/20 transition-all duration-300">
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
                        <div className="flex flex-col">
                          <span className="text-zinc-400 text-sm">Email</span>
                          <span className="text-white group-hover/item:text-lime-500 transition-colors duration-300">franesdev@gmail.com</span>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="group/item flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-zinc-800/50 backdrop-blur-sm flex items-center justify-center mr-4 group-hover/item:bg-lime-500/20 transition-all duration-300">
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
                        <div className="flex flex-col">
                          <span className="text-zinc-400 text-sm">Phone</span>
                          <span className="text-white group-hover/item:text-lime-500 transition-colors duration-300">+593 997825115</span>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="group/item flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-zinc-800/50 backdrop-blur-sm flex items-center justify-center mr-4 group-hover/item:bg-lime-500/20 transition-all duration-300">
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
                        <div className="flex flex-col">
                          <span className="text-zinc-400 text-sm">Location</span>
                          <span className="text-white group-hover/item:text-lime-500 transition-colors duration-300">Ecuador</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="p-8 relative group"
                >
                  {isSubmitted ? (
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center justify-center h-full py-8"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-lime-500/20 blur-xl rounded-full"></div>
                          <CheckCircle className="h-16 w-16 text-lime-500 relative z-10 animate-pulse" />
                        </div>
                        <p className="text-white text-xl text-center mt-6 relative">
                          {content[language].successMessage}
                          <motion.div
                            className="absolute -bottom-2 left-0 w-full h-0.5 bg-lime-500/30"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </p>
                      </motion.div>
                  ) : (
                      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Input
                              type="text"
                              name="name"
                              placeholder={content[language].namePlaceholder}
                              value={formState.name}
                              onChange={handleChange}
                              required
                              className="bg-zinc-800/30 backdrop-blur-sm border-zinc-700/50 focus:border-lime-500 text-white hover:border-zinc-600 transition-colors duration-300"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <Input
                              type="email"
                              name="email"
                              placeholder={content[language].emailPlaceholder}
                              value={formState.email}
                              onChange={handleChange}
                              required
                              className="bg-zinc-800/30 backdrop-blur-sm border-zinc-700/50 focus:border-lime-500 text-white hover:border-zinc-600 transition-colors duration-300"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Textarea
                              name="message"
                              placeholder={content[language].messagePlaceholder}
                              value={formState.message}
                              onChange={handleChange}
                              required
                              className="bg-zinc-800/30 backdrop-blur-sm border-zinc-700/50 focus:border-lime-500 text-white hover:border-zinc-600 transition-colors duration-300 min-h-[150px]"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-lime-500 hover:bg-lime-600 text-zinc-900 font-medium relative group overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/30 to-lime-400/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                            {isSubmitting ? (
                                <span className="flex items-center justify-center">
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
                                <span className="flex items-center justify-center relative z-10">
                                  <Send className="mr-2 h-4 w-4" />
                                  {content[language].sendButton}
                                </span>
                            )}
                          </Button>
                        </motion.div>
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