"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

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
        "Full Stack Developer | .NET | MAUI | React | 🇪🇨 Ecuadorian, passionate about what I do. I love tackling technical challenges and building innovative solutions. Sharing the journey of programming and software development.",
      scrollDown: "Scroll Down",
    },
    es: {
      tagline: "Imagina | Codifica | Crea",
      intro: "Soy Franklin Paute Machuca",
      description:
        "Desarrollador Full Stack | .NET | MAUI | React | 🇪🇨 Ecuatoriano, apasionado por lo que hago. Me encanta enfrentar desafíos técnicos y construir soluciones innovadoras. Compartiendo el viaje de la programación y el desarrollo de software.",
      scrollDown: "Desplázate Abajo",
    },
  }

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-lime-500 rounded-full opacity-20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className="text-lime-500 text-xl md:text-2xl font-light mb-4">{content[language].tagline}</h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">{content[language].intro}</h1>

          <div className="h-1 w-20 bg-lime-500 rounded-full mb-6"></div>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">{content[language].description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-lime-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="FRANESDEV Logo"
                width={300}
                height={300}
                className="w-full h-full object-contain p-8"
              />
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
        <p className="text-gray-400 text-sm mb-2">{content[language].scrollDown}</p>
        <ChevronDown className="h-6 w-6 text-lime-500 mx-auto animate-bounce" />
      </motion.div>
    </section>
  )
}
