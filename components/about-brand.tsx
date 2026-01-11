"use client"

import { motion } from "framer-motion"
import { Award, Users, Zap, BookOpen, Briefcase, Brain } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function AboutBrand() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "My Background",
      subtitle: "Senior Developer & Systems Engineer",
      story: "Over 11 years ago, I started as a junior developer with a passion for solving problems. Today, I lead digital transformation initiatives at one of Ecuador's largest financial institutions, working with .NET, enterprise architecture, and full-stack development. I've managed teams of engineers, mentored developers, and built systems handling millions in transactions. My focus is on sharing this real-world experience with the developer community.",
      three_pillars: {
        title: "What I Bring",
        expertise: {
          icon: "⚡",
          title: "Deep Expertise",
          desc: "11+ years in enterprise software, FinTech systems, backend architecture, and full-stack development."
        },
        leadership: {
          icon: "👥",
          title: "Real Leadership",
          desc: "Leading teams, mentoring junior developers, and making technical decisions in production environments."
        },
        teaching: {
          icon: "📚",
          title: "Commitment to Sharing",
          desc: "Building educational content based on real challenges, not theory. Educational programs currently in development."
        }
      },
      highlights: [
        {
          icon: <Award className="h-6 w-6" />,
          title: "11+ Years",
          desc: "Enterprise Development"
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "20+ Engineers",
          desc: "Led & Mentored"
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "FinTech Systems",
          desc: "Production Scale"
        },
        {
          icon: <BookOpen className="h-6 w-6" />,
          title: "Building Now",
          desc: "Educational Content"
        }
      ],
      why_learn: {
        title: "Why Real Experience Matters",
        intro: "My content comes from actual challenges I've faced leading teams and building systems that matter.",
        reasons: [
          "Real expertise: Senior developer at major financial institution",
          "Practical knowledge: Not theory—solutions from real production systems",
          "Current tech: Teaching what I use every day",
          "Honest approach: No hype, no exaggerated promises",
          "Growing community: Building something meaningful"
        ]
      }
    },
    es: {
      title: "Mi Trayectoria",
      subtitle: "Senior Developer e Ingeniero de Sistemas",
      story: "Hace 11+ años comencé como desarrollador junior con pasión por resolver problemas. Hoy dirijo iniciativas de transformación digital en una de las instituciones financieras más grandes de Ecuador, trabajando con .NET, arquitectura empresarial y desarrollo full-stack. He gestionado equipos de ingenieros, mentorado a desarrolladores y construido sistemas que manejan millones en transacciones. Mi enfoque es compartir esta experiencia real con la comunidad de desarrolladores.",
      three_pillars: {
        title: "Lo Que Ofrezco",
        expertise: {
          icon: "⚡",
          title: "Expertise Profundo",
          desc: "11+ años en software empresarial, sistemas FinTech, arquitectura backend y desarrollo full-stack."
        },
        leadership: {
          icon: "👥",
          title: "Liderazgo Real",
          desc: "Liderando equipos, mentorand a desarrolladores junior, y tomando decisiones técnicas en entornos de producción."
        },
        teaching: {
          icon: "📚",
          title: "Compromiso de Compartir",
          desc: "Construyendo contenido educativo basado en desafíos reales, no en teoría. Programas educativos en desarrollo."
        }
      },
      highlights: [
        {
          icon: <Award className="h-6 w-6" />,
          title: "11+ Años",
          desc: "Desarrollo Empresarial"
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "20+ Ingenieros",
          desc: "Liderados y Mentorados"
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Sistemas FinTech",
          desc: "Escala de Producción"
        },
        {
          icon: <BookOpen className="h-6 w-6" />,
          title: "En Construcción",
          desc: "Contenido Educativo"
        }
      ],
      why_learn: {
        title: "Por Qué la Experiencia Real Importa",
        intro: "Mi contenido viene de desafíos reales que he enfrentado liderando equipos y construyendo sistemas que importan.",
        reasons: [
          "Experiencia real: Senior developer en institución financiera importante",
          "Conocimiento práctico: No teoría—soluciones de sistemas reales de producción",
          "Tecnología actual: Enseño lo que uso todos los días",
          "Enfoque honesto: Sin hype, sin promesas exageradas",
          "Comunidad en crecimiento: Construyendo algo significativo"
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
