"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Database, Smartphone, Server, Lightbulb } from "lucide-react"

export default function About() {
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
      title: "Who is behind the keyboard?",
      description:
        "With over 10 years of experience as a full-stack engineer, I'm passionate about tackling complex challenges and delivering innovative solutions. I take a holistic approach, covering both front-end and back-end development, which allows me to build high-quality web and mobile applications. My technical skills include C#, Java, React, Xamarin Forms, .NET Core, and mobile development with .NET MAUI. I also have experience in database management and creating user-centered platforms. Always seeking new challenges, I'm open to relocating for personal and professional growth.",
      skills: [
        { name: "Frontend Development", icon: <Code className="h-6 w-6 text-lime-500" /> },
        { name: "Backend Development", icon: <Server className="h-6 w-6 text-lime-500" /> },
        { name: "Mobile Development", icon: <Smartphone className="h-6 w-6 text-lime-500" /> },
        { name: "Database Management", icon: <Database className="h-6 w-6 text-lime-500" /> },
        { name: "Problem Solving", icon: <Lightbulb className="h-6 w-6 text-lime-500" /> },
      ],
    },
    es: {
      title: "¿Quién está detrás del teclado?",
      description:
        "Con más de 10 años de experiencia como ingeniero full-stack, me apasiona enfrentar desafíos complejos y ofrecer soluciones innovadoras. Adopto un enfoque holístico, cubriendo tanto el desarrollo frontend como backend, lo que me permite construir aplicaciones web y móviles de alta calidad. Mis habilidades técnicas incluyen C#, Java, React, Xamarin Forms, .NET Core y desarrollo móvil con .NET MAUI. También tengo experiencia en gestión de bases de datos y creación de plataformas centradas en el usuario. Siempre buscando nuevos desafíos, estoy abierto a reubicaciones para el crecimiento personal y profesional.",
      skills: [
        { name: "Desarrollo Frontend", icon: <Code className="h-6 w-6 text-lime-500" /> },
        { name: "Desarrollo Backend", icon: <Server className="h-6 w-6 text-lime-500" /> },
        { name: "Desarrollo Móvil", icon: <Smartphone className="h-6 w-6 text-lime-500" /> },
        { name: "Gestión de Bases de Datos", icon: <Database className="h-6 w-6 text-lime-500" /> },
        { name: "Resolución de Problemas", icon: <Lightbulb className="h-6 w-6 text-lime-500" /> },
      ],
    },
  }

  return (
    <section id="about" className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{content[language].title}</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-zinc-300 text-lg leading-relaxed">{content[language].description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              {content[language].skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700 hover:border-lime-500 transition-all duration-300"
                >
                  <div className="mr-4 p-2 bg-zinc-900 rounded-lg">{skill.icon}</div>
                  <span className="text-white font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
