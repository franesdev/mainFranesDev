"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, ShoppingBag, Code2, ShirtIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function Hero() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      tagline: "Full Stack Developer",
      intro: "Franklin Paute Machuca",
      role: ".NET · MAUI · React",
      subtitle: "I enjoy technical challenges, building useful software, and sharing the journey of programming and development.",
      stats: [
        { number: "Systems Engineer", label: "Full Stack Developer" },
        { number: "Open Source", label: "Community Focused" },
        { number: "Building", label: "Educational Content" }
      ],
      description:
          ".NET · MAUI · React\nI enjoy technical challenges, building useful software, and sharing the journey of programming and development.",
      badges: ["Authentic", "In Progress", "Developer-Focused"],
      cta: "View my work",
      contact: "Follow the journey",
      scroll: "Learn More"
    },
    es: {
      tagline: "Desarrollador Full Stack",
      intro: "Franklin Paute Machuca",
      role: ".NET · MAUI · React",
      subtitle: "Disfruto enfrentando desafíos técnicos, construyendo software útil, y compartiendo el viaje de la programación y el desarrollo.",
      stats: [
        { number: "Ingeniero de Sistemas", label: "Desarrollador Full Stack" },
        { number: "Open Source", label: "Enfoque Comunitario" },
        { number: "Construyendo", label: "Contenido Educativo" }
      ],
      description:
          ".NET · MAUI · React\nDisfruto enfrentando desafíos técnicos, construyendo software útil, y compartiendo el viaje de la programación y el desarrollo.",
      badges: ["Auténtico", "En Progreso", "Enfocado en Developers"],
      cta: "Ver mis proyectos",
      contact: "Sigue el viaje",
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
                className="md:w-1/2"
            >
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

              {/* Stats display */}
              <motion.div 
                className="flex gap-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {content[language].stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-lime-500">{stat.number}</div>
                    <div className="text-sm text-zinc-400">{stat.label}</div>
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

              {/* Enhanced CTAs */}
              <div className="flex flex-wrap gap-6 items-center">
                <Button
                    onClick={() => scrollToSection("about")}
                    className="group relative bg-gradient-to-r from-lime-500 to-lime-400 text-zinc-900 font-medium px-8 py-5 rounded-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(132,204,22,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(132,204,22,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {content[language].cta}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></span>
                </Button>

                <Button
                    onClick={() => scrollToSection("contact-courses")}
                    className="group relative bg-gradient-to-r from-lime-500 to-lime-400 text-zinc-900 font-medium px-8 py-5 rounded-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(132,204,22,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(132,204,22,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {content[language].contact}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></span>
                </Button>
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
            <Button
                onClick={() => scrollToSection("about")}
                variant="ghost"
                size="icon"
                className="text-lime-500 hover:text-lime-400 hover:bg-transparent animate-bounce"
            >
              <div className="flex flex-col items-center">
                <span className="text-lime-500/70 text-sm mb-2">{content[language].scroll}</span>
                <ArrowDown className="h-6 w-6" />
              </div>
            </Button>
          </motion.div>
        </div>
      </section>
  )
}