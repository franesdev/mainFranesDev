"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function TestimonialsSection() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "What Students & Colleagues Say",
      subtitle: "Real feedback from real people who've learned from me",
      testimonials: [
        {
          name: "Carlos Mendez",
          role: "Senior Developer",
          company: "FinTech Startup",
          image: "👨‍💻",
          text: "Franklin's courses transformed my understanding of enterprise architecture. The real-world examples and hands-on projects are invaluable. Highly recommended!",
          rating: 5
        },
        {
          name: "Maria Garcia",
          role: "Junior Developer",
          company: "Tech Company",
          image: "👩‍💻",
          text: "I went from struggling with .NET concepts to building full-stack applications. Franklin's mentoring style is clear, practical, and incredibly effective.",
          rating: 5
        },
        {
          name: "Juan Rodriguez",
          role: "Tech Lead",
          company: "Enterprise Corp",
          image: "👨‍💼",
          text: "Working under Franklin's leadership taught me more about software architecture than any course. His courses capture that same excellence and real-world insight.",
          rating: 5
        },
        {
          name: "Sofia Hernandez",
          role: "Backend Developer",
          company: "Digital Solutions",
          image: "👩‍💼",
          text: "The financial systems course was eye-opening. I learned security practices and scalability patterns I was using without fully understanding them. Now I do!",
          rating: 5
        },
        {
          name: "Alex Chen",
          role: "Full Stack Engineer",
          company: "StartUp XYZ",
          image: "👨‍💻",
          text: "Franklin combines technical depth with the ability to explain complex concepts simply. His course modules are well-structured and truly comprehensive.",
          rating: 5
        },
        {
          name: "Isabella Rossi",
          role: "DevOps Engineer",
          company: "Cloud Services",
          image: "👩‍💻",
          text: "The Azure architecture course is fantastic. Practical labs, real scenarios, and certificates that actually mean something. Best investment for my career!",
          rating: 5
        }
      ]
    },
    es: {
      title: "Lo Que Dicen Estudiantes y Colegas",
      subtitle: "Retroalimentación real de personas reales que han aprendido de mí",
      testimonials: [
        {
          name: "Carlos Mendez",
          role: "Desarrollador Senior",
          company: "Startup FinTech",
          image: "👨‍💻",
          text: "Los cursos de Franklin transformaron mi comprensión de la arquitectura empresarial. Los ejemplos del mundo real y los proyectos prácticos son invaluables. ¡Altamente recomendado!",
          rating: 5
        },
        {
          name: "Maria Garcia",
          role: "Desarrolladora Junior",
          company: "Empresa Tecnológica",
          image: "👩‍💻",
          text: "Pasé de tener dificultades con conceptos .NET a construir aplicaciones full-stack. El estilo de mentoría de Franklin es claro, práctico e increíblemente efectivo.",
          rating: 5
        },
        {
          name: "Juan Rodriguez",
          role: "Tech Lead",
          company: "Corporación Empresarial",
          image: "👨‍💼",
          text: "Trabajar bajo el liderazgo de Franklin me enseñó más sobre arquitectura de software que cualquier curso. Sus cursos capturan esa misma excelencia e insight del mundo real.",
          rating: 5
        },
        {
          name: "Sofia Hernandez",
          role: "Desarrolladora Backend",
          company: "Soluciones Digitales",
          image: "👩‍💼",
          text: "El curso de sistemas financieros fue revelador. Aprendí prácticas de seguridad y patrones de escalabilidad que estaba usando sin entenderlos completamente. ¡Ahora sí!",
          rating: 5
        },
        {
          name: "Alex Chen",
          role: "Ingeniero Full Stack",
          company: "StartUp XYZ",
          image: "👨‍💻",
          text: "Franklin combina profundidad técnica con la capacidad de explicar conceptos complejos simplemente. Sus módulos de curso están bien estructurados y son verdaderamente completos.",
          rating: 5
        },
        {
          name: "Isabella Rossi",
          role: "Ingeniera DevOps",
          company: "Servicios en la Nube",
          image: "👩‍💻",
          text: "El curso de arquitectura de Azure es fantástico. Labs prácticos, escenarios reales y certificados que realmente significan algo. ¡La mejor inversión para mi carrera!",
          rating: 5
        }
      ]
    }
  }

  const data = content[language]

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
    <section className="py-20 px-4 bg-zinc-900/50 relative overflow-hidden">
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
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{data.subtitle}</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-lime-500/30 transition-all group"
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-lime-500/30 mb-4 group-hover:text-lime-500/50 transition-colors" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-lime-500 text-lime-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-zinc-300 mb-6 leading-relaxed text-sm italic">"{testimonial.text}"</p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-700/50">
                <div className="text-4xl">{testimonial.image}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-lime-400 text-xs">{testimonial.role}</p>
                  <p className="text-zinc-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-lime-500/10 to-lime-500/5 border border-lime-500/30 rounded-xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-lime-500 mb-2">500+</p>
              <p className="text-zinc-400">Active Students</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-lime-500 mb-2">4.9/5</p>
              <p className="text-zinc-400">Average Course Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-lime-500 mb-2">95%</p>
              <p className="text-zinc-400">Would Recommend</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
