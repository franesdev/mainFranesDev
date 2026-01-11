"use client"

import { motion } from "framer-motion"
import { Award, Users, Zap, BookOpen, Briefcase, Brain } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function AboutBrand() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "Who I Am",
      subtitle: "Systems Engineer & Full Stack Developer",
      story: "I'm a developer who enjoys tackling complex technical challenges and building useful software. I work across frontend, backend, and mobile—.NET, C#, .NET MAUI, and React are my tools. My approach is about finding clean solutions through thoughtful design and continuous learning. I'm passionate about sharing what I discover along the journey, because building in public and helping others learn is just as important as the code itself.",
      three_pillars: {
        title: "My Focus",
        expertise: {
          icon: "⚡",
          title: "Technical Depth",
          desc: "Building scalable systems with .NET, React, and mobile development. Always exploring better architecture and best practices."
        },
        leadership: {
          icon: "🔧",
          title: "Problem Solver",
          desc: "I love digging into challenging problems, finding elegant solutions, and learning what works in real-world scenarios."
        },
        teaching: {
          icon: "📚",
          title: "Sharing the Journey",
          desc: "Creating content about programming, logic, and real development challenges. Building a space where developers learn together."
        }
      },
      highlights: [
        {
          icon: <Award className="h-6 w-6" />,
          title: "Full Stack",
          desc: "Frontend to Backend"
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Community",
          desc: "Building Together"
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Technical",
          desc: "Real Solutions"
        },
        {
          icon: <BookOpen className="h-6 w-6" />,
          title: "Learning",
          desc: "Always Growing"
        }
      ],
      why_learn: {
        title: "What Makes This Different",
        intro: "This isn't a sales pitch. It's a developer sharing their actual work and real learning.",
        reasons: [
          "Authentic experience: Real challenges from actual projects",
          "No fluff: Practical knowledge, not theory or marketing speak",
          "Current tech stack: .NET, React, MAUI—what I use daily",
          "Honest approach: No fake timelines or exaggerated promises",
          "Building openly: Everything evolves as I learn"
        ]
      }
    },
    es: {
      title: "Quién Soy",
      subtitle: "Ingeniero de Sistemas & Desarrollador Full Stack",
      story: "Soy un desarrollador que disfruta enfrentando desafíos técnicos complejos y construyendo software útil. Trabajo en frontend, backend y móvil—.NET, C#, .NET MAUI y React son mis herramientas. Mi enfoque se trata de encontrar soluciones limpias a través de un diseño cuidadoso y aprendizaje continuo. Me apasiona compartir lo que descubro en el camino, porque construir en público y ayudar a otros a aprender es tan importante como el código.",
      three_pillars: {
        title: "Mi Enfoque",
        expertise: {
          icon: "⚡",
          title: "Profundidad Técnica",
          desc: "Construyendo sistemas escalables con .NET, React y desarrollo móvil. Siempre explorando mejor arquitectura y mejores prácticas."
        },
        leadership: {
          icon: "🔧",
          title: "Resolución de Problemas",
          desc: "Me encanta investigar problemas desafiantes, encontrar soluciones elegantes, y aprender qué funciona en escenarios reales."
        },
        teaching: {
          icon: "📚",
          title: "Compartiendo el Viaje",
          desc: "Creando contenido sobre programación, lógica y desafíos reales de desarrollo. Construyendo un espacio donde los desarrolladores aprenden juntos."
        }
      },
      highlights: [
        {
          icon: <Award className="h-6 w-6" />,
          title: "Full Stack",
          desc: "Frontend a Backend"
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Comunidad",
          desc: "Construyendo Juntos"
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Técnico",
          desc: "Soluciones Reales"
        },
        {
          icon: <BookOpen className="h-6 w-6" />,
          title: "Aprendizaje",
          desc: "Siempre Creciendo"
        }
      ],
      why_learn: {
        title: "Qué Hace Esto Diferente",
        intro: "No es un discurso de ventas. Es un desarrollador compartiendo su trabajo real y aprendizaje auténtico.",
        reasons: [
          "Experiencia auténtica: Desafíos reales de proyectos actuales",
          "Sin relleno: Conocimiento práctico, no teoría o marketing",
          "Stack actual: .NET, React, MAUI—lo que uso diariamente",
          "Enfoque honesto: Sin cronogramas falsos o promesas exageradas",
          "Construyendo abiertamente: Todo evoluciona mientras aprendo"
        ]
      }
    }
  }

  const data = content[language]

  return (
    <section id="about-brand" className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
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
          <p className="text-lime-400 text-lg font-semibold mb-6">{data.subtitle}</p>
          <div className="h-1 w-24 bg-gradient-to-r from-lime-500 to-lime-400 rounded-full mx-auto mb-8"></div>
        </motion.div>

        {/* Main Story */}
        <motion.div
          className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg text-zinc-300 leading-relaxed text-center">{data.story}</p>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">{data.three_pillars.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[data.three_pillars.expertise, data.three_pillars.leadership, data.three_pillars.teaching].map((pillar, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-6xl mb-4">{pillar.icon}</div>
                <h4 className="text-2xl font-bold text-lime-400 mb-3">{pillar.title}</h4>
                <p className="text-zinc-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {data.highlights.map((highlight, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 text-center hover:border-lime-500/50 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4 text-lime-500">{highlight.icon}</div>
              <h4 className="text-2xl font-bold text-white mb-2">{highlight.title}</h4>
              <p className="text-zinc-400 text-sm">{highlight.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Learn Section */}
        <motion.div
          className="bg-gradient-to-r from-lime-500/10 to-lime-500/5 border border-lime-500/30 rounded-xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4 text-center">{data.why_learn.title}</h3>
          <p className="text-lg text-zinc-300 text-center mb-10 max-w-3xl mx-auto">{data.why_learn.intro}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {data.why_learn.reasons.map((reason, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-4 bg-zinc-900/30 rounded-lg"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 text-lime-500 text-xl mt-1">✓</div>
                <p className="text-zinc-300">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
