"use client"

import { motion } from "framer-motion"
import { ExternalLink, Code2, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function PortfolioSection() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "Featured Projects",
      subtitle: "Enterprise solutions that drive real business impact",
      view_project: "View Project",
      tech: "Technologies",
      impact: "Business Impact",
      projects: [
        {
          id: 1,
          title: "Financial Payment Platform",
          description: "Enterprise payment processing system handling 100K+ daily transactions across multiple financial institutions.",
          image: "💳",
          technologies: [".NET Core", "React", "SQL Server", "Azure", "Microservices"],
          impact: "Processed $500M+ in annual transactions | Reduced processing time by 60%",
          results: ["High-availability architecture", "Real-time transaction processing", "Enterprise-grade security"],
          featured: true
        },
        {
          id: 2,
          title: "Digital Banking Portal",
          description: "Modern customer-facing portal for digital banking operations with advanced analytics and real-time reporting.",
          image: "🏦",
          technologies: ["React", ".NET 6", "Redux", "TypeScript", "D3.js"],
          impact: "2M+ active users | 99.99% uptime | 40% increase in digital adoption",
          results: ["Responsive design for 10+ devices", "Real-time dashboards", "Advanced security features"],
          featured: true
        },
        {
          id: 3,
          title: "Loan Management System",
          description: "End-to-end loan origination and management system with automated workflows and compliance tracking.",
          image: "📊",
          technologies: ["ASP.NET", "PostgreSQL", "Vue.js", "Docker", "Kubernetes"],
          impact: "Processed 10,000+ loan applications | 50% faster approval times",
          results: ["Automated workflow engine", "Compliance audit trails", "Real-time notifications"],
          featured: false
        },
        {
          id: 4,
          title: "Analytics & Reporting Dashboard",
          description: "Real-time analytics platform providing insights across multiple business units with custom report generation.",
          image: "📈",
          technologies: ["React", ".NET", "Power BI", "Azure Data Lake", "Python"],
          impact: "Reduced reporting time from 2 days to 30 minutes | Saved 500+ hours annually",
          results: ["Custom visualizations", "Data export capabilities", "Scheduled reports"],
          featured: false
        }
      ]
    },
    es: {
      title: "Proyectos Destacados",
      subtitle: "Soluciones empresariales que generan impacto comercial real",
      view_project: "Ver Proyecto",
      tech: "Tecnologías",
      impact: "Impacto Empresarial",
      projects: [
        {
          id: 1,
          title: "Plataforma de Pagos Financieros",
          description: "Sistema de procesamiento de pagos empresarial manejando 100K+ transacciones diarias en múltiples instituciones financieras.",
          image: "💳",
          technologies: [".NET Core", "React", "SQL Server", "Azure", "Microservices"],
          impact: "Procesó $500M+ en transacciones anuales | Redujo tiempo de procesamiento 60%",
          results: ["Arquitectura de alta disponibilidad", "Procesamiento de transacciones en tiempo real", "Seguridad de nivel empresarial"],
          featured: true
        },
        {
          id: 2,
          title: "Portal de Banca Digital",
          description: "Portal moderno orientado al cliente para operaciones de banca digital con análisis avanzado e informes en tiempo real.",
          image: "🏦",
          technologies: ["React", ".NET 6", "Redux", "TypeScript", "D3.js"],
          impact: "2M+ usuarios activos | 99.99% de disponibilidad | Aumento de 40% en adopción digital",
          results: ["Diseño responsivo para 10+ dispositivos", "Paneles en tiempo real", "Características de seguridad avanzadas"],
          featured: true
        },
        {
          id: 3,
          title: "Sistema de Gestión de Préstamos",
          description: "Sistema integral de originación y gestión de préstamos con flujos de trabajo automatizados y seguimiento de cumplimiento.",
          image: "📊",
          technologies: ["ASP.NET", "PostgreSQL", "Vue.js", "Docker", "Kubernetes"],
          impact: "Procesó 10,000+ aplicaciones de préstamos | 50% más rápido en aprobaciones",
          results: ["Motor de flujos de trabajo automatizados", "Pistas de auditoría de cumplimiento", "Notificaciones en tiempo real"],
          featured: false
        },
        {
          id: 4,
          title: "Panel de Análisis y Reportes",
          description: "Plataforma de análisis en tiempo real que proporciona información en múltiples unidades de negocio con generación de reportes personalizados.",
          image: "📈",
          technologies: ["React", ".NET", "Power BI", "Azure Data Lake", "Python"],
          impact: "Redujo tiempo de reporte de 2 días a 30 minutos | Ahorró 500+ horas anuales",
          results: ["Visualizaciones personalizadas", "Capacidades de exportación de datos", "Reportes programados"],
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
