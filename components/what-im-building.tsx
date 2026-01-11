"use client"

import { motion } from "framer-motion"
import { BookOpen, Zap, Layout, Rocket, Code2 } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function WhatImBuilding() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "What I'm Building",
      subtitle: "Educational content and programs currently in development",
      description: "This platform is actively under development. I'm creating resources based on real-world experience with enterprise systems, FinTech, architecture, and career growth.",
      items: [
        {
          icon: <BookOpen className="h-8 w-8" />,
          title: "Practical Guides",
          description: "In-depth articles and documentation on real enterprise challenges, architecture patterns, and best practices from production systems."
        },
        {
          icon: <Code2 className="h-8 w-8" />,
          title: ".NET & Full Stack Content",
          description: "Educational content covering backend architecture, API design, frontend integration, and building scalable systems."
        },
        {
          icon: <Layout className="h-8 w-8" />,
          title: "Architecture & Design Patterns",
          description: "Learning materials about system design, scalability, performance optimization, and making smart architectural decisions."
        },
        {
          icon: <Rocket className="h-8 w-8" />,
          title: "Future Training Programs",
          description: "Comprehensive programs and structured courses are being developed. More details coming soon."
        }
      ],
      note: "No marketing hype. No fake timelines. Just building quality educational resources based on real experience.",
      status: "In Progress"
    },
    es: {
      title: "Lo Que Estoy Construyendo",
      subtitle: "Contenido educativo y programas en desarrollo",
      description: "Esta plataforma está en desarrollo activo. Estoy creando recursos basados en experiencia real con sistemas empresariales, FinTech, arquitectura y crecimiento profesional.",
      items: [
        {
          icon: <BookOpen className="h-8 w-8" />,
          title: "Guías Prácticas",
          description: "Artículos y documentación detallada sobre desafíos reales empresariales, patrones de arquitectura y mejores prácticas de sistemas de producción."
        },
        {
          icon: <Code2 className="h-8 w-8" />,
          title: "Contenido .NET y Full Stack",
          description: "Contenido educativo cubriendo arquitectura backend, diseño de APIs, integración frontend y construcción de sistemas escalables."
        },
        {
          icon: <Layout className="h-8 w-8" />,
          title: "Arquitectura y Patrones de Diseño",
          description: "Materiales de aprendizaje sobre diseño de sistemas, escalabilidad, optimización de rendimiento y tomar decisiones arquitectónicas inteligentes."
        },
        {
          icon: <Rocket className="h-8 w-8" />,
          title: "Futuros Programas de Entrenamiento",
          description: "Programas y cursos estructurados están en desarrollo. Más detalles próximamente."
        }
      ],
      note: "Sin marketing hype. Sin cronogramas falsos. Solo construyendo recursos educativos de calidad basados en experiencia real.",
      status: "En Progreso"
    }
  }

  const data = content[language]

  return (
    <section id="what-im-building" className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{data.title}</h2>
          <p className="text-lime-400 text-lg font-semibold mb-4">{data.subtitle}</p>
          <div className="h-1 w-24 bg-gradient-to-r from-lime-500 to-lime-400 rounded-full mx-auto mb-8"></div>
          <p className="text-zinc-300 text-lg max-w-3xl mx-auto">{data.description}</p>
        </motion.div>

        {/* Items Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-lime-500/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-lime-500 pt-1">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Status Note */}
        <motion.div
          className="bg-gradient-to-r from-lime-500/10 to-lime-500/5 border border-lime-500/30 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-zinc-300 text-lg leading-relaxed">{data.note}</p>
          <p className="text-lime-500 font-semibold mt-4">{data.status}</p>
        </motion.div>
      </div>
    </section>
  )
}
