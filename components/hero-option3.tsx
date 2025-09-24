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
          "As a Full Stack Developer specializing in .NET and React, I'm dedicated to creating solutions that solve real problems. What drives me is finding the smartest approach to every technical challenge, transforming complex requirements into efficient and innovative solutions. 🇪🇨",
      cta: "View Projects",
      contact: "Contact Me",
    },
    es: {
      tagline: "Imagina | Codifica | Crea",
      intro: "Soy Franklin Paute Machuca",
      description:
          "Como Desarrollador Full Stack especializado en .NET y React, me dedico a crear soluciones que resuelven problemas reales. Me motiva encontrar el enfoque más inteligente para cada desafío técnico, transformando requerimientos complejos en soluciones eficientes e innovadoras. 🇪🇨",
      cta: "Ver Proyectos",
      contact: "Contáctame",
    },
  }

  const socialLinks = [
    {
      icon: <FaInstagram className="h-7 w-7" />,
      href: "https://instagram.com/franesdev", // Reemplaza con tu enlace de Instagram
      alt: "Instagram",
    },
    {
      icon: <FaFacebookF className="h-7 w-7" />,
      href: "https://facebook.com/franesdev", // Reemplaza con tu enlace de Facebook
      alt: "Facebook",
    },
    {
      icon: <FaYoutube className="h-7 w-7" />,
      href: "https://youtube.com/@franesdev", // Reemplaza con tu enlace de YouTube
      alt: "YouTube",
    },
    {
      icon: <FaTiktok className="h-7 w-7" />,
      href: "https://tiktok.com/@franesdev", // Reemplaza con tu enlace de TikTok
      alt: "TikTok",
    },
    {
      icon: <FaLinkedinIn className="h-7 w-7" />,
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

              <p className="text-zinc-300 text-lg md:text-xl max-w-xl leading-relaxed mb-8 relative group">
                <span className="relative z-10">{content[language].description}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-lime-500/5 to-lime-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <Button
                    onClick={() => scrollToSection("about")}
                    className="group relative bg-gradient-to-r from-lime-500 to-lime-400 text-zinc-900 font-medium px-8 py-5 rounded-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(132,204,22,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(132,204,22,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {content[language].cta}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></span>
                </Button>

                <Button
                    onClick={() => scrollToSection("contact")}
                    className="group relative bg-gradient-to-r from-lime-500 to-lime-400 text-zinc-900 font-medium px-8 py-5 rounded-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(132,204,22,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(132,204,22,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {content[language].contact}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></span>
                </Button>
              </div>

              <div className="flex mt-6 items-center justify-between w-full max-w-xl">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-3"
                    >
                        <div className="absolute inset-0 bg-lime-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                        <div className="absolute inset-0 bg-lime-500/0 group-hover:bg-lime-500/5 rounded-xl transform rotate-45 group-hover:rotate-0 transition-all duration-300"></div>
                        <div className="relative w-10 h-10 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
                          <div className="text-zinc-400 group-hover:text-lime-500 transform group-hover:scale-110 transition-all duration-300">
                            {social.icon}
                          </div>
                          <div className="absolute -bottom-1 left-1/2 w-6 h-[2px] bg-lime-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <span className="sr-only">{social.alt}</span>
                    </a>
                ))}
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:w-1/2 flex justify-center"
            >
                              <div className="relative group perspective-1000">
                  {/* Orbital Ring Animation */}
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 border-2 border-dashed border-lime-500/20 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-4 border border-lime-500/10 rounded-full animate-spin-reverse-slower"></div>
                    <div className="absolute inset-8 border border-lime-500/5 rounded-full animate-spin-slower"></div>
                  </div>

                  {/* Main container with 3D effects */}
                  <div className="relative bg-zinc-900/50 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800/50 shadow-2xl transform transition-all duration-700 hover:scale-105 group-hover:rotate-6 will-change-transform">
                    {/* Animated gradient borders */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-lime-500/20 to-lime-500/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-lime-500/10 via-transparent to-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                    
                    {/* Logo container with enhanced effects */}
                    <div className="relative z-10 bg-zinc-900/90 p-6 rounded-xl overflow-hidden group-hover:bg-zinc-900/70 transition-colors duration-500">
                      <div className="relative transform group-hover:scale-110 transition-transform duration-700 ease-out">
                        {/* Enhanced glow effects */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/30 via-lime-500/0 to-lime-500/20 blur-2xl transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 via-transparent to-lime-500/10 animate-pulse"></div>
                        
                        {/* Logo image with reflection effect */}
                        <div className="relative">
                          <Image 
                            src="/logo.png" 
                            alt="FRANESDEV Logo" 
                            width={400} 
                            height={400} 
                            className="max-w-full h-auto relative z-10 drop-shadow-2xl"
                            style={{
                              filter: 'drop-shadow(0 0 10px rgba(132,204,22,0.3))'
                            }}
                          />
                          
                          {/* Reflection effect */}
                          <div className="absolute top-full left-0 right-0 h-1/2 bg-gradient-to-b from-lime-500/10 to-transparent transform -translate-y-1/2 blur-md opacity-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating tech badges with enhanced animations */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-6 transition-all duration-700 group-hover:gap-8">
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      className="px-4 py-2 bg-zinc-900/90 backdrop-blur-md rounded-full border border-lime-500/30 shadow-lg shadow-lime-500/10 hover:border-lime-500/50 transition-colors duration-300"
                    >
                      <span className="text-lime-500 text-sm font-mono bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text text-transparent">&lt;React /&gt;</span>
                    </motion.div>
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: [5, -5, 5] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                      className="px-4 py-2 bg-zinc-900/90 backdrop-blur-md rounded-full border border-lime-500/30 shadow-lg shadow-lime-500/10 hover:border-lime-500/50 transition-colors duration-300"
                    >
                      <span className="text-lime-500 text-sm font-mono bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text text-transparent">.NET</span>
                    </motion.div>
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                      className="px-4 py-2 bg-zinc-900/90 backdrop-blur-md rounded-full border border-lime-500/30 shadow-lg shadow-lime-500/10 hover:border-lime-500/50 transition-colors duration-300"
                    >
                      <span className="text-lime-500 text-sm font-mono bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text text-transparent">MAUI</span>
                    </motion.div>
                  </div>

                  {/* Bottom decorative element with animation */}
                  <motion.div 
                    className="absolute -bottom-6 left-0 right-0 flex justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="px-6 py-2 bg-zinc-900/90 backdrop-blur-md rounded-full border border-lime-500/30 shadow-lg shadow-lime-500/10">
                      <span className="text-lime-500/90 text-sm font-mono">
                        <span className="text-lime-500/50">&lt;</span>
                        <span className="text-lime-500/90">code with passion</span>
                        <span className="text-lime-500/50">/&gt;</span>
                      </span>
                    </div>
                  </motion.div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-lime-500/30 rounded-full"
                        initial={{
                          x: Math.random() * 400,
                          y: Math.random() * 400,
                          scale: 0
                        }}
                        animate={{
                          x: Math.random() * 400,
                          y: Math.random() * 400,
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
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