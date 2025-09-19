"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaYoutube, FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa'
import { Card, CardContent } from "@/components/ui/card"

export default function SocialMedia() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Get language from localStorage
    const storedLanguage = localStorage.getItem("language")
    if (storedLanguage === "en" || storedLanguage === "es") {
      setLanguage(storedLanguage)
    }

    // Listen for language changes
    const handleLanguageChange = () => {
      const newLanguage = localStorage.getItem("language")
      if (newLanguage === "en" || newLanguage === "es") {
        setLanguage(newLanguage)
      }
    }

    window.addEventListener("languageChange", handleLanguageChange)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange)
    }
  }, [])

  const socialLinks = [
    {
      name: "YouTube",
      icon: <FaYoutube className="h-8 w-8" />,
      url: "https://youtube.com/@franesdev",
      color: "text-red-500 hover:text-red-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="h-8 w-8" />,
      url: "https://linkedin.com/in/franesdev",
      color: "text-blue-500 hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="h-8 w-8" />,
      url: "https://instagram.com/franesdev",
      color: "text-pink-500 hover:text-pink-400",
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="h-8 w-8" />,
      url: "https://tiktok.com/@franesdev",
      color: "text-white hover:text-gray-300",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF className="h-8 w-8" />,
      url: "https://facebook.com/franesdev",
      color: "text-blue-600 hover:text-blue-500",
    },
  ]

  return (
      <section className="py-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {language === "en" ? "Connect With Me" : "Conéctate Conmigo"}
            </h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              {language === "en"
                  ? "Follow me on social media to stay updated with my latest projects, tutorials, and tech insights."
                  : "Sígueme en redes sociales para mantenerte actualizado con mis últimos proyectos, tutoriales y conocimientos tecnológicos."}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card className="group h-full bg-zinc-900/30 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-500 overflow-hidden">
                      <CardContent className="flex flex-col items-center justify-center p-6 relative">
                        {/* Efecto de resplandor en hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        
                        {/* Fondo con gradiente sutil */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Contenido */}
                        <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-500">
                          <div className={`${social.color} transform group-hover:scale-110 transition-all duration-500`}>
                            {social.icon}
                          </div>
                          <span className="mt-3 text-sm font-medium text-zinc-400 group-hover:text-white transition-colors duration-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                            {social.name}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
            ))}
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16"
          >
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/XfewwKzczt8"
                      title="Franes Dev"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
  )
}