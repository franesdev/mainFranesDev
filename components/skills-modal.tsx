"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Clock } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

interface SkillsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  const { language } = useLanguageContext()

  const skills = [
    {
      id: "pomodoro",
      titleEn: "Pomodoro Timer",
      titleEs: "Temporizador Pomodoro",
      descEn: "25m focus + breaks for real devs",
      descEs: "25m enfoque + descansos para devs reales",
      icon: Clock,
      color: "from-emerald-500 to-emerald-600",
      href: "#pomodoro",
    },
  ]

  const content = {
    en: {
      title: "Skills for Devs",
      subtitle: "Tools built for real productivity",
      more: "Coming soon",
    },
    es: {
      title: "Skills para Devs",
      subtitle: "Herramientas para productividad real",
      more: "Próximamente",
    },
  }

  const t = content[language as keyof typeof content] || content.en

  const handleSkillClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-4"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {t.title}
                  </h2>
                  <p className="text-zinc-400 text-sm">{t.subtitle}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {skills.map((skill, idx) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.button
                      key={skill.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => handleSkillClick(skill.href)}
                      whileHover={{ y: -4 }}
                      className="group text-left"
                    >
                      <div className="relative h-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/30">
                        {/* Gradient overlay on hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}
                        />

                        {/* Icon */}
                        <div
                          className={`mb-4 w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-base font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                            {language === "es"
                              ? skill.titleEs
                              : skill.titleEn}
                          </h3>
                          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                            {language === "es"
                              ? skill.descEs
                              : skill.descEn}
                          </p>
                        </div>

                        {/* Arrow indicator */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-emerald-500 text-lg">→</div>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              {/* Coming Soon */}
              <div className="text-center text-xs text-zinc-500 font-mono uppercase tracking-widest">
                {t.more}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
