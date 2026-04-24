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
      subtitle: "Dev who teaches you to think, not just to code",
      story: "I'm Franes, a Full Stack developer from Ecuador. I've spent years building with .NET, React, and mobile — but what excites me most isn't the code itself, it's the logic behind it. Today I share that online: puzzles, developer thinking, and AI applied to real life. For programmers and for anyone who wants to think better.",
      three_pillars: {
        title: "What This Is About",
        expertise: {
          icon: "🧠",
          title: "Logical Thinking",
          desc: "Logic isn't math — it's trained common sense. That's what I teach, with or without code."
        },
        leadership: {
          icon: "🤖",
          title: "AI With Judgment",
          desc: "AI executes. You decide. I teach you to use it as a tool, not as a substitute for thinking."
        },
        teaching: {
          icon: "🔨",
          title: "Dad Dev",
          desc: "I learn, code, and create content while being a dad. The real process, without filters or fake shortcuts."
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
        title: "Why This Is Different",
        intro: "Not a guru. Not a bootcamp. A developer who builds in public and shows the real thing.",
        reasons: [
          "Weekly puzzles that AI can't solve",
          "Logic applied to real life, not just code",
          "Content for devs and for people who've never coded",
          "The honest process of learning while being a dad and a dev",
          "No trendy stack worship — judgment is what doesn't expire"
        ]
      }
    },
    es: {
      title: "Quién Soy",
      subtitle: "Dev que enseña a pensar, no solo a programar",
      story: "Soy Franes, desarrollador Full Stack desde Ecuador. Llevo años programando en .NET, React y mobile — pero lo que más me apasiona no es el código en sí, sino la lógica detrás. Hoy comparto eso en redes: acertijos, pensamiento dev e IA aplicada a la vida real. Para programadores y para cualquiera que quiera pensar mejor.",
      three_pillars: {
        title: "De Qué Va Esto",
        expertise: {
          icon: "🧠",
          title: "Pensamiento lógico",
          desc: "La lógica no es matemática — es sentido común entrenado. Eso es lo que enseño, con o sin código."
        },
        leadership: {
          icon: "🤖",
          title: "IA con criterio",
          desc: "La IA ejecuta. Tú decides. Te enseño a usarla como herramienta, no como sustituto de pensar."
        },
        teaching: {
          icon: "🔨",
          title: "Papá Dev",
          desc: "Aprendo, programo y creo contenido siendo papá. El proceso real, sin filtros ni atajos falsos."
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
        title: "Por Qué Esto Es Diferente",
        intro: "No soy un gurú. No soy un bootcamp. Soy un developer que construye en público y muestra lo real.",
        reasons: [
          "Acertijos semanales que la IA no puede resolver",
          "Lógica aplicada a la vida real, no solo al código",
          "Contenido para devs y para quienes nunca han programado",
          "El proceso honesto de aprender siendo papá y dev",
          "Sin stack de moda — el criterio es lo que no caduca"
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
