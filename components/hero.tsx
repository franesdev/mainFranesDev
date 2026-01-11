"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Github, Mail, Linkedin, Twitter, BookOpen, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function Hero() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      badge: "🚀 Head of Digital Development",
      tagline: "11+ Years Building Enterprise Systems. Now Teaching.",
      intro: "Franklin Paute Machuca",
      role: "Senior Full Stack Developer & Educator",
      subtitle: "From FinTech to Leadership. Real experience. Real teaching. Real impact.",
      description:
        "I've spent 11+ years building enterprise systems at financial institutions, leading teams of 20+, and processing $500M+ in transactions. Now I'm teaching developers how to build at scale. No theory. No BS. Just real-world architecture.",
      expertise: "Enterprise Architecture • FinTech Systems • Team Leadership • Real Mentorship",
      cta_primary: "Learn More",
      cta_secondary: "Chat with Me",
      cta_tertiary: "Let's Talk",
      available: "📚 Building a community of serious developers",
      years: "11+",
      years_label: "Years Enterprise Experience",
      students: "Building",
      students_label: "Community of Real Learners",
      teams: "20+",
      teams_label: "Team Members Led at Scale",
      scroll: "See what I've built",
    },
    es: {
      badge: "🚀 Jefe de Desarrollo Digital",
      tagline: "11+ Años Construyendo Sistemas Empresariales. Ahora Enseñando.",
      intro: "Franklin Paute Machuca",
      role: "Desarrollador Senior Full Stack y Educador",
      subtitle: "De FinTech a Liderazgo. Experiencia real. Enseñanza real. Impacto real.",
      description:
        "He pasado 11+ años construyendo sistemas empresariales en instituciones financieras, liderando equipos de 20+, procesando $500M+ en transacciones. Ahora estoy enseñando a developers cómo construir a escala. Sin teoría. Sin BS. Solo arquitectura del mundo real.",
      expertise: "Arquitectura Empresarial • Sistemas FinTech • Liderazgo de Equipos • Mentoría Real",
      cta_primary: "Saber Más",
      cta_secondary: "Chatea Conmigo",
      cta_tertiary: "Conversemos",
      available: "📚 Construyendo comunidad de developers serios",
      years: "11+",
      years_label: "Años de Experiencia Empresarial",
      students: "Construyendo",
      students_label: "Comunidad de Aprendices Reales",
      teams: "20+",
      teams_label: "Miembros de Equipo Liderados a Escala",
      scroll: "Ve lo que he construido",
    },
  }

  const stats = [
    { number: content[language].years, label: content[language].years_label, icon: "⚡" },
    { number: content[language].students, label: content[language].students_label, icon: "👥" },
    { number: content[language].teams, label: content[language].teams_label, icon: "🎯" },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/franesdev",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/franesdev",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/franesdev",
      label: "X (Twitter)",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:contact@franesdev.com",
      label: "Email",
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-20" id="hero">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/98 to-zinc-900/95 z-0"></div>

      {/* Animated background elements with blur */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-lime-500/5 rounded-full blur-3xl"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 150 - 75],
              y: [0, Math.random() * 150 - 75],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Premium badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-500/20 to-lime-500/10 border border-lime-500/40 rounded-full backdrop-blur-md hover:border-lime-500/60 transition-all">
          <Sparkles className="h-4 w-4 text-lime-400" />
          <span className="text-lime-300 text-sm font-semibold">{content[language].badge}</span>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-6xl"
      >
        {/* Tagline */}
        <motion.h2 
          className="text-lime-500 text-xl md:text-3xl font-light mb-4 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <TypeAnimation 
            sequence={[content[language].tagline, 1000]} 
            wrapper="span" 
            speed={50} 
            repeat={0} 
          />
        </motion.h2>

        {/* Main Title */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {content[language].intro}
        </motion.h1>

        {/* Role with Badge */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="h-1 w-8 bg-lime-500 rounded-full"></div>
          <p className="text-lg md:text-2xl text-lime-400 font-semibold">{content[language].role}</p>
          <div className="h-1 w-8 bg-lime-500 rounded-full"></div>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-6 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {content[language].subtitle}
        </motion.p>

        {/* Main Description */}
        <motion.p 
          className="text-zinc-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {content[language].description}
        </motion.p>

        {/* Expertise Line */}
        <motion.div
          className="inline-block mb-10 px-6 py-3 bg-zinc-800/30 border border-zinc-700/50 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.8 }}
        >
          <p className="text-lime-400 text-sm font-medium">{content[language].expertise}</p>
        </motion.div>

        {/* Stats Section - Enhanced */}
        <motion.div 
          className="grid grid-cols-3 gap-4 md:gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="text-center p-4 rounded-lg bg-zinc-800/20 border border-zinc-700/30 hover:border-lime-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl mb-1">{stat.icon}</p>
              <p className="text-3xl md:text-4xl font-bold text-lime-500 mb-2">{stat.number}</p>
              <p className="text-zinc-400 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/30 to-lime-500/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 border border-lime-500/20 rounded-full"></div>
            <Image 
              src="/logo.png" 
              alt="FRANESDEV" 
              width={200} 
              height={200} 
              className="relative rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* CTA Buttons - 3 Options */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button 
            onClick={() => scrollToSection("courses")}
            className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-6 text-base rounded-lg transition-all hover:shadow-lg hover:shadow-lime-500/50 flex items-center justify-center gap-2"
          >
            <BookOpen className="h-5 w-5" />
            {content[language].cta_primary}
          </Button>
          <Button 
            onClick={() => scrollToSection("portfolio")}
            variant="outline" 
            className="border-lime-500 text-lime-400 hover:bg-lime-500/10 font-bold px-8 py-6 text-base rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="h-5 w-5" />
            {content[language].cta_secondary}
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" 
            className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 font-bold px-8 py-6 text-base rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Users className="h-5 w-5" />
            {content[language].cta_tertiary}
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800/50 hover:bg-lime-500/20 rounded-full text-zinc-300 hover:text-lime-400 transition-all duration-300 border border-zinc-700/50 hover:border-lime-500/50"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Available for enrollments */}
        <motion.p 
          className="text-lime-400/70 text-sm mb-6 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          {content[language].available}
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-zinc-400 hover:text-lime-500 transition-colors"
        >
          <span className="text-xs font-medium">{content[language].scroll}</span>
          <ArrowDown className="h-5 w-5" />
        </button>
      </motion.div>
    </section>
  )
}
