"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react" // Mantenemos ArrowDown
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Hero() {
  const [language, setLanguage] = useState<"en" | "es">("en")

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
      tagline: "Imagine | Code | Create",
      intro: "I'm Franklin Paute Machuca",
      description:
          "Full Stack Developer | .NET | MAUI | React | 🇪🇨 Ecuadorian, passionate about what I do. I love tackling technical challenges and building innovative solutions.",
      cta: "View My Skills",
      contact: "Contact Me",
    },
    es: {
      tagline: "Imagina | Codifica | Crea",
      intro: "Soy Franklin Paute Machuca",
      description:
          "Desarrollador Full Stack | .NET | MAUI | React | 🇪🇨 Ecuatoriano, apasionado por lo que hago. Me encanta enfrentar desafíos técnicos y construir soluciones innovadoras.",
      cta: "Ver Mi Conocmiento",
      contact: "Contáctame",
    },
  }

  const socialLinks = [
    {
      icon: <FaInstagram className="h-5 w-5" />,
      href: "https://instagram.com/franesdev", // Reemplaza con tu enlace de Instagram
      alt: "Instagram",
    },
    {
      icon: <FaFacebookF className="h-5 w-5" />,
      href: "https://facebook.com/franesdev", // Reemplaza con tu enlace de Facebook
      alt: "Facebook",
    },
    {
      icon: <FaYoutube className="h-5 w-5" />,
      href: "https://youtube.com/@franesdev", // Reemplaza con tu enlace de YouTube
      alt: "YouTube",
    },
    {
      icon: <FaTiktok className="h-5 w-5" />,
      href: "https://tiktok.com/@franesdev", // Reemplaza con tu enlace de TikTok
      alt: "TikTok",
    },
    {
      icon: <FaLinkedinIn className="h-5 w-5" />,
      href: "https://linkedin.com/in/franesdev",
      alt: "LinkedIn",
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-lime-500/10 via-zinc-950 to-zinc-950 z-0"></div>

        {/* Glassmorphism effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto max-w-6xl z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2"
            >
              <h2 className="text-lime-500 text-xl md:text-2xl font-light mb-4">{content[language].tagline}</h2>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">{content[language].intro}</h1>

              <div className="h-1 w-20 bg-lime-500 rounded-full mb-6"></div>

              <p className="text-zinc-300 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                {content[language].description}
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Button
                    onClick={() => scrollToSection("about")}
                    className="bg-lime-500 hover:bg-lime-600 text-zinc-900 font-medium px-6"
                >
                  {content[language].cta}
                </Button>

                <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    className="border-lime-500 text-lime-500 hover:bg-lime-500/10"
                >
                  {content[language].contact}
                </Button>

                <div className="flex gap-2 ml-4">
                  {socialLinks.map((social, index) => (
                      <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-lime-500 transition-colors duration-300"
                      >
                        {social.icon}
                        <span className="sr-only">{social.alt}</span>
                      </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-transparent rounded-full filter blur-xl"></div>
                <div className="relative bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 shadow-xl">
                  <Image src="/logo.png" alt="FRANESDEV Logo" width={400} height={400} className="max-w-full h-auto" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          >
            <Button
                onClick={() => scrollToSection("about")}
                variant="ghost"
                size="icon"
                className="text-lime-500 hover:text-lime-400 hover:bg-transparent animate-bounce"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
  )
}