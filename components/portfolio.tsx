"use client"

import { motion } from "framer-motion"
import { ExternalLink, Code2, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function PortfolioSection() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "My Work",
      subtitle: "Things I've built and problems I've solved",
      view_project: "Learn More",
      tech: "Technologies",
      impact: "What I Learned",
      projects: [
        {
          id: 1,
          title: "Financial Payment System",
          description: "Built a payment processing system that handles high-volume transactions reliably and securely.",
          image: "💳",
          technologies: [".NET Core", "React", "SQL Server", "Azure", "Microservices"],
          impact: "Solved complex transaction handling | Learned about distributed systems and reliability",
          results: ["Scalable architecture", "Real-time processing", "Solid security practices"],
          featured: true
        },
        {
          id: 2,
          title: "Banking Portal",
          description: "Created a responsive portal that users across multiple devices could rely on every day.",
          image: "🏦",
          technologies: ["React", ".NET 6", "Redux", "TypeScript", "D3.js"],
          impact: "Built for millions of users | Learned UX at scale",
          results: ["Multi-device support", "Real-time dashboards", "User-centered design"],
          featured: true
        },
        {
          id: 3,
          title: "Loan Management System",
          description: "Designed a workflow system that streamlined complex business processes and made them transparent.",
          image: "📊",
          technologies: ["ASP.NET", "PostgreSQL", "Vue.js", "Docker", "Kubernetes"],
          impact: "Simplified complex workflows | Learned about automation",
          results: ["Automated workflows", "Audit compliance", "Real-time tracking"],
          featured: false
        },
        {
          id: 4,
          title: "Analytics Dashboard",
          description: "Built tools that turned raw data into insights teams could actually use to make better decisions.",
          image: "📈",
          technologies: ["React", ".NET", "Power BI", "Azure Data Lake", "Python"],
          impact: "Data visualization at scale | Learned storytelling with data",
          results: ["Custom insights", "Data accessibility", "Actionable reports"],
          featured: false
        }
      ]
    },
    es: {
      title: "Mi Trabajo",
      subtitle: "Cosas que he construido y problemas que he resuelto",
      view_project: "Saber Más",
      tech: "Tecnologías",
      impact: "Lo Que Aprendí",
      projects: [
        {
          id: 1,
          title: "Sistema de Pagos Financiero",
          description: "Construí un sistema de procesamiento de pagos que maneja transacciones de alto volumen de manera confiable y segura.",
          image: "💳",
          technologies: [".NET Core", "React", "SQL Server", "Azure", "Microservices"],
          impact: "Resolví manejo complejo de transacciones | Aprendí sobre sistemas distribuidos",
          results: ["Arquitectura escalable", "Procesamiento en tiempo real", "Prácticas sólidas de seguridad"],
          featured: true
        },
        {
          id: 2,
          title: "Portal Bancario",
          description: "Creé un portal responsivo en el que los usuarios en múltiples dispositivos pudieran confiar todos los días.",
          image: "🏦",
          technologies: ["React", ".NET 6", "Redux", "TypeScript", "D3.js"],
          impact: "Construí para millones de usuarios | Aprendí UX a escala",
          results: ["Soporte multi-dispositivo", "Paneles en tiempo real", "Diseño centrado en el usuario"],
          featured: true
        },
        {
          id: 3,
          title: "Sistema de Gestión de Préstamos",
          description: "Diseñé un sistema de flujo de trabajo que simplificó procesos comerciales complejos y los hizo transparentes.",
          image: "📊",
          technologies: ["ASP.NET", "PostgreSQL", "Vue.js", "Docker", "Kubernetes"],
          impact: "Simplifiqué flujos de trabajo complejos | Aprendí sobre automatización",
          results: ["Flujos de trabajo automatizados", "Cumplimiento de auditoría", "Seguimiento en tiempo real"],
          featured: false
        },
        {
          id: 4,
          title: "Panel de Análisis",
          description: "Construí herramientas que convirtieron datos crudos en información que los equipos realmente pudieran usar.",
          image: "📈",
          technologies: ["React", ".NET", "Power BI", "Azure Data Lake", "Python"],
          impact: "Visualización de datos a escala | Aprendí a contar historias con datos",
          results: ["Información personalizada", "Accesibilidad de datos", "Reportes accionables"],
          featured: false
        }
      ]
    }
  }

  const projectData = content[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 bg-zinc-900/50 relative overflow-hidden" id="portfolio">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-lime-500/10 border border-lime-500/30 rounded-full">
            <Code2 className="h-4 w-4 text-lime-400" />
            <span className="text-lime-400 text-sm font-semibold">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{projectData.title}</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{projectData.subtitle}</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group rounded-xl overflow-hidden transition-all duration-300 ${
                project.featured
                  ? "bg-gradient-to-br from-lime-500/10 to-zinc-900 border border-lime-500/30 hover:border-lime-500/60"
                  : "bg-zinc-800/50 border border-zinc-700 hover:border-zinc-600"
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                {/* Icon & Featured Badge */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl">{project.image}</span>
                  {project.featured && (
                    <div className="bg-lime-500 text-black text-xs font-bold px-3 py-1 rounded-full">⭐ Featured</div>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6 pb-6 border-b border-zinc-700/50">
                  <p className="text-xs text-zinc-500 mb-3 font-semibold">{projectData.tech}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-zinc-800/50 text-zinc-300 px-3 py-1 rounded-full border border-zinc-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-6 pb-6 border-b border-zinc-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-4 w-4 text-lime-500" />
                    <p className="text-xs text-zinc-500 font-semibold">{projectData.impact}</p>
                  </div>
                  <p className="text-sm text-lime-400 font-medium">{project.impact}</p>
                </div>

                {/* Results */}
                <ul className="space-y-2 mb-8">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full"></div>
                      {result}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="w-full border-lime-500 text-lime-400 hover:bg-lime-500/10">
                  {projectData.view_project}
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
