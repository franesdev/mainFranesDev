"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Zap, Trophy, Star, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function CoursesSection() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "Learning Programs (Coming Soon)",
      subtitle: "Limited spots for serious developers who want to learn enterprise architecture",
      cta_enroll: "Enroll Now",
      cta_info: "More Info",
      coming_soon: "Coming Soon",
      courses: [
        {
          id: 1,
          title: "Full Stack Mastery: .NET & React",
          description: "Build enterprise-grade applications using modern .NET Core and React. From REST APIs to real-time applications.",
          icon: "⚡",
          level: "Intermediate",
          duration: "12 weeks",
          students: "500+",
          rating: 4.9,
          price: "$199",
          features: [
            "15+ hours of video content",
            "5 real-world projects",
            "Lifetime access",
            "Community support",
            "Certificates of completion",
            "Source code included"
          ],
          status: "Coming Soon",
          featured: true
        },
        {
          id: 2,
          title: "FinTech Systems Architecture",
          description: "Design and build secure, scalable financial systems. Covering payment processing, security, compliance, and best practices.",
          icon: "💰",
          level: "Advanced",
          duration: "10 weeks",
          students: "250+",
          rating: 4.95,
          price: "$249",
          features: [
            "12+ hours of expert instruction",
            "3 capstone projects",
            "1-on-1 mentoring sessions",
            "Industry insights",
            "Case study access",
            "Career guidance"
          ],
          status: "Coming Soon",
          featured: true
        },
        {
          id: 3,
          title: "Technical Leadership & Team Growth",
          description: "Transition from developer to tech leader. Learn to manage teams, mentor juniors, and drive architectural decisions.",
          icon: "👥",
          level: "All Levels",
          duration: "8 weeks",
          students: "300+",
          rating: 4.8,
          price: "$179",
          features: [
            "Leadership frameworks",
            "Team management strategies",
            "Code review best practices",
            "Conflict resolution",
            "Career advancement planning",
            "Networking community"
          ],
          status: "Coming Soon",
          featured: false
        },
        {
          id: 4,
          title: "Cloud Architecture with Azure",
          description: "Master Azure cloud platform. Deployments, security, scalability, cost optimization, and DevOps practices.",
          icon: "☁️",
          level: "Intermediate",
          duration: "9 weeks",
          students: "180+",
          rating: 4.85,
          price: "$219",
          features: [
            "10+ hours of hands-on labs",
            "4 practical projects",
            "Azure certification prep",
            "Cost optimization tips",
            "Advanced networking",
            "Security deep-dive"
          ],
          status: "Coming Soon",
          featured: false
        }
      ]
    },
    es: {
      title: "Programas de Aprendizaje (Próximamente)",
      subtitle: "Cupos limitados para developers serios que quieren aprender arquitectura empresarial",
      cta_enroll: "Inscribirse Ahora",
      cta_info: "Más Info",
      coming_soon: "Próximamente",
      courses: [
        {
          id: 1,
          title: "Dominio Full Stack: .NET & React",
          description: "Construye aplicaciones de nivel empresarial usando .NET Core moderno y React. Desde APIs REST hasta aplicaciones en tiempo real.",
          icon: "⚡",
          level: "Intermedio",
          duration: "12 semanas",
          students: "500+",
          rating: 4.9,
          price: "$199",
          features: [
            "15+ horas de contenido de video",
            "5 proyectos del mundo real",
            "Acceso de por vida",
            "Soporte comunitario",
            "Certificados de finalización",
            "Código fuente incluido"
          ],
          status: "Próximamente",
          featured: true
        },
        {
          id: 2,
          title: "Arquitectura de Sistemas FinTech",
          description: "Diseña y construye sistemas financieros seguros y escalables. Cobertura de procesamiento de pagos, seguridad, cumplimiento y mejores prácticas.",
          icon: "💰",
          level: "Avanzado",
          duration: "10 semanas",
          students: "250+",
          rating: 4.95,
          price: "$249",
          features: [
            "12+ horas de instrucción experta",
            "3 proyectos finales",
            "Sesiones de mentoría 1-a-1",
            "Perspectivas de la industria",
            "Acceso a estudios de caso",
            "Orientación de carrera"
          ],
          status: "Próximamente",
          featured: true
        },
        {
          id: 3,
          title: "Liderazgo Técnico y Crecimiento de Equipos",
          description: "Transición de desarrollador a líder técnico. Aprende a gestionar equipos, mentorizar juniors e impulsar decisiones arquitectónicas.",
          icon: "👥",
          level: "Todos los Niveles",
          duration: "8 semanas",
          students: "300+",
          rating: 4.8,
          price: "$179",
          features: [
            "Marcos de liderazgo",
            "Estrategias de gestión de equipos",
            "Mejores prácticas de revisión de código",
            "Resolución de conflictos",
            "Planificación de avance de carrera",
            "Comunidad de networking"
          ],
          status: "Próximamente",
          featured: false
        },
        {
          id: 4,
          title: "Arquitectura en la Nube con Azure",
          description: "Domina la plataforma en la nube de Azure. Implementaciones, seguridad, escalabilidad, optimización de costos y prácticas de DevOps.",
          icon: "☁️",
          level: "Intermedio",
          duration: "9 semanas",
          students: "180+",
          rating: 4.85,
          price: "$219",
          features: [
            "10+ horas de laboratorios prácticos",
            "4 proyectos prácticos",
            "Preparación para certificación de Azure",
            "Consejos de optimización de costos",
            "Redes avanzadas",
            "Profundización en seguridad"
          ],
          status: "Próximamente",
          featured: false
        }
      ]
    }
  }

  const courseData = content[language]
  const isFeaturedCourse = (status: string) => status === "Available" || status === "Disponible"

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
    <section className="py-20 px-4 bg-zinc-950 relative overflow-hidden" id="courses">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
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
            <BookOpen className="h-4 w-4 text-lime-400" />
            <span className="text-lime-400 text-sm font-semibold">Premium Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{courseData.title}</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{courseData.subtitle}</p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courseData.courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${
                course.featured
                  ? "md:col-span-1 bg-gradient-to-br from-lime-500/10 to-zinc-900 border border-lime-500/30 hover:border-lime-500/60"
                  : "bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700"
              }`}
              whileHover={{ y: -5 }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-8">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{course.icon}</span>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    isFeaturedCourse(course.status)
                      ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                      : "bg-zinc-700/20 text-zinc-400 border border-zinc-700/30"
                  }`}>
                    {course.status}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">{course.description}</p>

                {/* Meta Info */}
                <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-zinc-700/50">
                  <div className="text-center">
                    <p className="text-xs text-zinc-500 mb-1">Level</p>
                    <p className="text-sm font-semibold text-zinc-300">{course.level}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-zinc-500 mb-1">Duration</p>
                    <p className="text-sm font-semibold text-zinc-300">{course.duration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-zinc-500 mb-1">Rating</p>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 fill-lime-500 text-lime-500" />
                      <p className="text-sm font-semibold text-zinc-300">{course.rating}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {course.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <Check className="h-4 w-4 text-lime-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {course.features.length > 3 && (
                    <li className="text-sm text-zinc-500 pl-6">+ {course.features.length - 3} más</li>
                  )}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-700/50">
                  <div>
                    <p className="text-sm text-zinc-500">Starting at</p>
                    <p className="text-2xl font-bold text-lime-500">{course.price}</p>
                  </div>
                  <Button
                    disabled={!isFeaturedCourse(course.status)}
                    className={`flex items-center gap-2 ${
                      isFeaturedCourse(course.status)
                        ? "bg-lime-500 hover:bg-lime-600 text-black"
                        : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                    }`}
                  >
                    {isFeaturedCourse(course.status) ? courseData.cta_enroll : courseData.coming_soon}
                    {isFeaturedCourse(course.status) && <ArrowRight className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Featured Badge */}
              {course.featured && (
                <div className="absolute top-0 right-0 bg-lime-500 text-black text-xs font-bold px-4 py-2">
                  ⭐ Popular
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-lime-500/10 to-lime-500/5 border border-lime-500/30 rounded-xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to level up?</h3>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of developers learning cutting-edge technologies directly from industry experts. Limited spots available for this cohort.
          </p>
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-6 text-lg">
            Get Started Today
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
