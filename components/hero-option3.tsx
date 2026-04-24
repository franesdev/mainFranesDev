"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, ShoppingBag, Code2, ShirtIcon, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { useLanguageContext } from "@/contexts/LanguageContext"
import SkillsModal from "@/components/skills-modal"

export default function Hero() {
  const { language } = useLanguageContext()
  const [isSkillsOpen, setIsSkillsOpen] = useState(false)

  const content = {
    en: {
      tagline: "Learn to think like a developer",
      intro: "Franklin Paute Machuca",
      role: "Logic · AI · Real Code",
      subtitle: "AI writes code. But it doesn't understand. You're the one who needs to understand.",
      stats: [
        { number: "Weekly", label: "Logic Challenge" },
        { number: "Real", label: "No-BS Content" },
        { number: "Dev Log", label: "Free Newsletter" }
      ],
      description:
          "AI writes code. But it doesn't understand.\nYou're the one who needs to understand — and that's the skill no one can take from you.",
      badges: ["Logic First", "Anti-Buzzword", "Building in Public"],
      cta: "Take the challenge",
      contact: "Subscribe to Dev Log",
      scroll: "Learn More"
    },
    es: {
      tagline: "Aprende a pensar como programador",
      intro: "Franklin Paute Machuca",
      role: "Lógica · IA · Código Real",
      subtitle: "La IA escribe código. Pero no entiende. El que tiene que entender eres tú.",
      stats: [
        { number: "Semanal", label: "Reto de lógica" },
        { number: "Real", label: "Sin Relleno" },
        { number: "Dev Log", label: "Newsletter gratis" }
      ],
      description:
          "La IA escribe código. Pero no entiende.\nEl que tiene que entender eres tú — y esa es la habilidad que nadie te puede quitar.",
      badges: ["Lógica Primero", "Sin Buzzwords", "Construyendo en Público"],
      cta: "Únete al reto",
      contact: "Suscríbete al Dev Log",
      scroll: "Saber Más"
    },
  }

  const socialLinks = [
    {
      icon: <FaYoutube className="h-7 w-7" />,
      href: "https://youtube.com/@franesdev",
      alt: "YouTube",
    },
    {
      icon: <FaTiktok className="h-7 w-7" />,
      href: "https://tiktok.com/@franesdev",
      alt: "TikTok",
    },
    {
      icon: <FaLinkedinIn className="h-7 w-7" />,
      href: "https://linkedin.com/in/franesdev",
      alt: "LinkedIn",
    },
    {
      icon: <FaInstagram className="h-7 w-7" />,
      href: "https://instagram.com/franesdev",
      alt: "Instagram",
    },
    {
      icon: <FaFacebookF className="h-7 w-7" />,
      href: "https://facebook.com/franesdev",
      alt: "Facebook",
    },
    {
      icon: (
        <div className="relative group-hover:rotate-12 transition-transform duration-300">
          <ShirtIcon className="h-7 w-7 absolute text-lime-500/50 transform translate-x-[2px] translate-y-[2px]" />
          <Code2 className="h-7 w-7 absolute opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
          <ShoppingBag className="h-7 w-7 relative z-10" />
          <div className="absolute -right-1 -top-1 w-3 h-3 bg-lime-500 rounded-full animate-ping"></div>
          <div className="absolute -right-1 -top-1 w-3 h-3 bg-lime-500 rounded-full"></div>
        </div>
      ),
      href: "https://franesdev-shop.fourthwall.com",
      alt: "Dev Shop",
      featured: true,
      label: "Check Out Dev Merch"
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-lime-500/10 via-zinc-950 to-zinc-950 z-0"></div>

      {/* Glassmorphism effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto max-w-6xl z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 relative"
            >
              {/* FRANESDEV Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -top-12 -right-12 w-24 h-24 md:w-32 md:h-32 z-20 drop-shadow-lg"
              >
                <Image 
                  src="/logo1.png" 
                  alt="FRANESDEV Logo" 
                  width={128} 
                  height={128} 
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>

              {/* Enhanced tagline with animation */}
              <motion.h2 
                className="text-lime-500 text-xl md:text-2xl font-light mb-4 tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {content[language].tagline.split(' | ').map((word, index) => (
                  <span key={index} className="inline-block">
                    {index > 0 && (
                      <span className="mx-2 text-lime-500/50">|</span>
                    )}
                    <span className="hover:text-lime-400 transition-colors duration-300">
                      {word}
                    </span>
                  </span>
                ))}
              </motion.h2>

              {/* Dynamic name presentation */}
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 text-white bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {content[language].intro}
              </motion.h1>

              {/* Professional role with highlight */}
              <motion.h3
                className="text-xl md:text-2xl text-zinc-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {content[language].role}
              </motion.h3>

              {/* Skills Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mb-8"
              >
                <motion.button
                  onClick={() => setIsSkillsOpen(true)}
                  whileHover={{ scale: 1.05, gap: 6 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full hover:border-emerald-500/60 hover:bg-emerald-500/15 transition-all duration-300 group"
                >
                  <Zap className="h-4 w-4 text-emerald-500 group-hover:animate-pulse" />
                  <span className="text-sm font-mono text-emerald-400 group-hover:text-emerald-300 uppercase tracking-wider">
                    {language === "es" ? "Herramientas" : "Tools"}
                  </span>
                </motion.button>
              </motion.div>

              {/* Stats display */}
              <motion.div 
                className="flex gap-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {content[language].stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-base font-bold text-lime-500 leading-tight">{stat.number}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-lime-500/20 to-transparent mb-8"></div>

              {/* Enhanced description with badge highlights */}
              <motion.div
                className="space-y-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-zinc-300 text-lg md:text-xl max-w-xl leading-relaxed relative group cursor-default">
                  <span className="relative z-10">{content[language].description}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-lime-500/5 to-lime-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </p>
              </motion.div>

              {/* Status badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {content[language].badges.map((badge, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-lime-500/10 border border-lime-500/20 rounded-full text-lime-500 text-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>

              {/* Dual-path CTAs */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* Learning path — amber: targets beginners */}
                <Button
                    onClick={() => scrollToSection("what-im-building")}
                    className="group relative bg-gradient-to-r from-amber-500 to-amber-400 text-zinc-900 font-semibold px-8 py-5 rounded-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {content[language].cta}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>

                {/* Dev/client path — outline: targets companies/collaborators */}
                <button
                    onClick={() => scrollToSection("contact-courses")}
                    className="group border border-zinc-600 hover:border-lime-500 text-zinc-300 hover:text-lime-400 bg-transparent font-medium px-8 py-3 rounded-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  {content[language].ctaSecondary}
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>

              <div className="flex mt-6 items-center justify-between w-full max-w-xl relative">
                {/* Línea decorativa con gradiente */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500/20 to-transparent transform -translate-y-1/2"></div>
                
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-3 ${social.featured ? 'scale-110' : ''}`}
                    >
                        {/* Animated background effects */}
                        <div className={`absolute inset-0 ${social.featured ? 'bg-gradient-to-r from-lime-500/20 via-lime-400/20 to-lime-500/20' : 'bg-lime-500/10'} rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out`}></div>
                        <div className="absolute inset-0 bg-lime-500/0 group-hover:bg-lime-500/5 rounded-xl transform rotate-45 group-hover:rotate-0 transition-all duration-300"></div>
                        
                        {/* Icon container with enhanced effects */}
                        <div className={`relative w-12 h-12 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300 ${social.featured ? 'text-lime-500' : ''}`}>
                          {/* Glowing effect for featured icon */}
                          {social.featured && (
                            <div className="absolute inset-0 bg-lime-500/20 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                          )}
                          
                          {/* Icon with enhanced styling */}
                          <div className={`${social.featured ? 'text-lime-500' : 'text-zinc-400'} group-hover:text-lime-500 transform group-hover:scale-110 transition-all duration-300 relative z-10`}>
                            {social.icon}
                          </div>
                          
                          {/* Animated underline */}
                          <div className="absolute -bottom-1 left-1/2 w-6 h-[2px] bg-lime-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>

                        {/* Enhanced tooltip for featured items */}
                        {social.featured && (
                          <>
                            {/* Main tooltip */}
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-lime-500 to-lime-400 text-zinc-900 text-sm rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-lime-500/20">
                              <div className="relative">
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lime-500 rotate-45"></div>
                                <span className="relative z-10 whitespace-nowrap flex items-center gap-2">
                                  {social.label || social.alt}
                                  <span className="animate-pulse">🔥</span>
                                </span>
                              </div>
                            </div>
                            
                            {/* "New" badge */}
                            <div className="absolute -right-2 -top-2 bg-lime-500 text-zinc-900 text-xs px-2 py-1 rounded-full font-bold transform rotate-12 shadow-lg">
                              New!
                            </div>
                          </>
                        )}
                        
                        <span className="sr-only">{social.alt}</span>
                    </a>
                ))}
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:w-1/2 flex justify-center"
            >
                              <div className="relative group perspective-1000">
                  {/* Orbital Ring Animation */}
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 border-2 border-dashed border-lime-500/20 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-4 border border-lime-500/10 rounded-full animate-spin-reverse-slower"></div>
                    <div className="absolute inset-8 border border-lime-500/5 rounded-full animate-spin-slower"></div>
                  </div>

                  {/* Main container with 3D effects */}
                  <div className="relative bg-zinc-900/50 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800/50 shadow-2xl transform transition-all duration-700 hover:scale-105 group-hover:rotate-6 will-change-transform">
                    {/* Animated gradient borders */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-lime-500/20 to-lime-500/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-lime-500/10 via-transparent to-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                    
                    {/* Logo container with enhanced effects */}
                    <div className="relative z-10 bg-zinc-900/90 p-6 rounded-xl overflow-hidden group-hover:bg-zinc-900/70 transition-colors duration-500">
                      <div className="relative transform group-hover:scale-110 transition-transform duration-700 ease-out">
                        {/* Enhanced glow effects */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/30 via-lime-500/0 to-lime-500/20 blur-2xl transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 via-transparent to-lime-500/10 animate-pulse"></div>
                        
                        {/* Logo image with reflection effect */}
                        <div className="relative">
                          <Image 
                            src="/logo.png" 
                            alt="FRANESDEV Logo" 
                            width={400} 
                            height={400} 
                            className="max-w-full h-auto relative z-10 drop-shadow-2xl"
                            style={{
                              filter: 'drop-shadow(0 0 10px rgba(132,204,22,0.3))'
                            }}
                          />
                          
                          {/* Reflection effect */}
                          <div className="absolute top-full left-0 right-0 h-1/2 bg-gradient-to-b from-lime-500/10 to-transparent transform -translate-y-1/2 blur-md opacity-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating tech badges with enhanced animations */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-6 transition-all duration-700 group-hover:gap-8">
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      className="px-4 py-2 bg-zinc-900/90 backdrop-blur-md rounded-full border border-lime-500/30 shadow-lg shadow-lime-500/10 hover:border-lime-500/50 transition-colors duration-300"
                    >
                      <span className="text-lime-500 text-sm font-mono bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text text-transparent">&lt;React /&gt;</span>
                    </motion.div>
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: [5, -5, 5] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                      className="px-4 py-2 bg-zinc-900/90 backdrop-blur-md rounded-full border border-lime-500/30 shadow-lg shadow-lime-500/10 hover:border-lime-500/50 transition-colors duration-300"
                    >
                      <span className="text-lime-500 text-sm font-mono bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text text-transparent">.NET</span>
                    </motion.div>
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                      className="px-4 py-2 bg-zinc-900/90 backdrop-blur-md rounded-full border border-lime-500/30 shadow-lg shadow-lime-500/10 hover:border-lime-500/50 transition-colors duration-300"
                    >
                      <span className="text-lime-500 text-sm font-mono bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text text-transparent">MAUI</span>
                    </motion.div>
                  </div>

                  {/* Bottom decorative element with animation */}
                  <motion.div 
                    className="absolute -bottom-6 left-0 right-0 flex justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="px-6 py-2 bg-zinc-900/90 backdrop-blur-md rounded-full border border-lime-500/30 shadow-lg shadow-lime-500/10">
                      <span className="text-lime-500/90 text-sm font-mono">
                        <span className="text-lime-500/50">&lt;</span>
                        <span className="text-lime-500/90">code with passion</span>
                        <span className="text-lime-500/50">/&gt;</span>
                      </span>
                    </div>
                  </motion.div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-lime-500/30 rounded-full"
                        initial={{
                          x: Math.random() * 400,
                          y: Math.random() * 400,
                          scale: 0
                        }}
                        animate={{
                          x: Math.random() * 400,
                          y: Math.random() * 400,
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
              </div>
            </motion.div>
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          >
            <button
                onClick={() => scrollToSection("about")}
                className="text-lime-500 hover:text-lime-400 bg-transparent border-none animate-bounce flex flex-col items-center"
            >
              <span className="text-lime-500/70 text-sm mb-2">{content[language].scroll}</span>
              <ArrowDown className="h-6 w-6" />
            </button>
          </motion.div>
        </div>

        <SkillsModal isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />
      </section>
  )
}