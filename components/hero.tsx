"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

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
    },
    es: {
      tagline: "Imagina | Codifica | Crea",
      intro: "Soy Franklin Paute Machuca",
      description:
        "Desarrollador Full Stack | .NET | MAUI | React | 🇪🇨 Ecuatoriano, apasionado por lo que hago. Me encanta enfrentar desafíos técnicos y construir soluciones innovadoras. Compartiendo el viaje de la programación y el desarrollo de software.",
    },
  }

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-900/90 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-lime-500/10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl"
      >
        <h2 className="text-lime-500 text-xl md:text-2xl font-light mb-4">
          <TypeAnimation sequence={[content[language].tagline, 1000]} wrapper="span" speed={50} repeat={0} />
        </h2>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">{content[language].intro}</h1>

        <div className="flex justify-center mb-8">
          <div className="h-1 w-20 bg-lime-500 rounded-full"></div>
        </div>

        <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {content[language].description}
        </p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Image src="/logo.png" alt="FRANESDEV Logo" width={200} height={200} className="mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}
