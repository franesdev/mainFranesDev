"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, RotateCcw, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageContext } from "@/contexts/LanguageContext"
import Image from "next/image"

type TimerMode = "work" | "short-break" | "long-break"

export default function PomodoroTool() {
  const { language } = useLanguageContext()
  const [mode, setMode] = useState<TimerMode>("work")
  const [isRunning, setIsRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [sessionsCompleted, setSessionsCompleted] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  const times = {
    work: 25 * 60,
    "short-break": 5 * 60,
    "long-break": 15 * 60,
  }

  const content = {
    en: {
      title: "Pomodoro",
      subtitle: "A tool I use daily — shared here as a bonus",
      intro: "Between work, family, and content, I need focused blocks. This timer is what I actually use. Take it, adapt it, no strings attached.",
      slogan: "Thinking like a dev",
      tagline: "25 minutes of focus, then a real break",
      work: "Work",
      shortBreak: "Break",
      longBreak: "Rest",
      sessions: "Sessions",
      start: "Start",
      pause: "Pause",
      reset: "Reset",
      skip: "Skip",
      completed: "Done",
    },
    es: {
      title: "Pomodoro",
      subtitle: "Una herramienta que uso a diario — compartida como extra",
      intro: "Entre trabajo, familia y contenido, necesito bloques de enfoque. Este temporizador es el que uso de verdad. Úsalo, adáptalo, sin compromiso.",
      slogan: "Pensando como programador",
      tagline: "25 minutos de enfoque, luego un descanso real",
      work: "Trabajo",
      shortBreak: "Pausa",
      longBreak: "Descanso",
      sessions: "Sesiones",
      start: "Empezar",
      pause: "Pausa",
      reset: "Limpiar",
      skip: "Saltar",
      completed: "Hecho",
    },
  }

  const t = content[language as keyof typeof content] || content.en

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isRunning) {
      handleNextMode()
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, timeLeft])

  const handleNextMode = () => {
    if (mode === "work") {
      const isLongBreak = sessionsCompleted % 4 === 3
      setMode(isLongBreak ? "long-break" : "short-break")
      setSessionsCompleted((prev) => prev + 1)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 1000)
    } else {
      setMode("work")
    }
    setIsRunning(false)
    playNotification()
  }

  const playNotification = () => {
    if (typeof window !== "undefined" && "AudioContext" in window) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gain = audioContext.createGain()

      oscillator.connect(gain)
      gain.connect(audioContext.destination)

      oscillator.frequency.value = 800
      gain.gain.setValueAtTime(0.3, audioContext.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.5)
    }
  }

  const handleReset = () => {
    setIsRunning(false)
    setTimeLeft(times[mode])
  }

  const handleSkip = () => {
    handleNextMode()
  }

  const handleModeChange = (newMode: TimerMode) => {
    setMode(newMode)
    setIsRunning(false)
    setTimeLeft(times[newMode])
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const progress = ((times[mode] - timeLeft) / times[mode]) * 100
  const isBreakMode = mode !== "work"

  return (
    <section key={language} className="relative py-12 md:py-16 px-4 overflow-hidden border-t border-zinc-800/50">
      <div className="absolute inset-0 bg-zinc-950 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-zinc-300">
            {t.title}
          </h2>
          <p className="text-zinc-500 text-sm mb-3">{t.subtitle}</p>
          <p className="text-zinc-600 text-xs max-w-md mx-auto leading-relaxed">{t.intro}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main container with glass effect */}
          <div className="relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-10">
            {/* Profile image background - eccentric placement */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full overflow-hidden opacity-10 blur-2xl">
              <div className="w-full h-full bg-gradient-to-br from-brand to-brand-dark" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              {/* Timer section - Left side */}
              <div className="flex-1 flex flex-col items-center">
                {/* Slogan above timer */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8 text-center"
                >
                  <p className="text-sm md:text-base font-mono uppercase tracking-widest text-brand/70">
                    → {t.slogan}
                  </p>
                  <p className="text-xs font-mono text-zinc-500 mt-1">
                    {t.tagline}
                  </p>
                </motion.div>

                {/* Circular progress with logo */}
                <div className="relative w-56 h-56 mb-8">
                  {/* FRANESDEV Logo - positioned top right */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute -top-8 -right-8 z-20 drop-shadow-lg"
                  >
                    <Image 
                      src="/logo1.png" 
                      alt="FRANESDEV Logo" 
                      width={80} 
                      height={80} 
                      className="w-20 h-20 object-contain"
                    />
                  </motion.div>

                  {/* Animated background circle with glow */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-transparent border-t-brand/40 border-r-brand/20"
                  />
                  
                  {/* Inner glow */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border border-brand/10"
                  />

                  {/* SVG Progress circle */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    {/* Background circle */}
                    <circle
                      cx="112"
                      cy="112"
                      r="100"
                      fill="none"
                      stroke="rgba(119, 184, 0, 0.08)"
                      strokeWidth="3"
                    />
                    {/* Progress circle */}
                    <motion.circle
                      cx="112"
                      cy="112"
                      r="100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-brand"
                      strokeDasharray={`${2 * Math.PI * 100}`}
                      strokeDashoffset={`${2 * Math.PI * 100 * (1 - progress / 100)}`}
                      transition={{ duration: 0.2 }}
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Timer display - clean and minimal */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      key={formatTime(timeLeft)}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-7xl md:text-8xl font-black text-white font-mono tracking-tighter leading-none"
                    >
                      {formatTime(timeLeft)}
                    </motion.div>
                    <motion.div className="text-xs text-brand/60 font-mono uppercase tracking-widest mt-3">
                      {isBreakMode ? t.shortBreak : t.work}
                    </motion.div>
                  </div>
                </div>

                {/* Mode indicators */}
                <div className="flex gap-2 mb-6">
                  {(["work", "short-break", "long-break"] as const).map((m) => (
                    <motion.button
                      key={m}
                      onClick={() => handleModeChange(m)}
                      disabled={isRunning}
                      whileTap={{ scale: 0.9 }}
                      className={`px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                        mode === m
                          ? "bg-brand text-white shadow-lg shadow-brand/50"
                          : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                      } ${isRunning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      {m === "work"
                        ? "25"
                        : m === "short-break"
                          ? "5"
                          : "15"}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Info & Controls section - Right side */}
              <div className="flex-1 flex flex-col gap-8">
                {/* Sessions counter - Eccentric style */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-brand/20 to-brand/5 border border-brand/30 rounded-2xl p-6 backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-400 text-sm font-mono uppercase tracking-widest mb-1">
                        {t.sessions}
                      </p>
                      <p className="text-4xl font-black text-brand">
                        {sessionsCompleted}
                      </p>
                    </div>
                    <div className="text-5xl">🎯</div>
                  </div>
                </motion.div>

                {/* Controls grid */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.div whileTap={{ scale: 0.92 }}>
                    <Button
                      onClick={() => setIsRunning(!isRunning)}
                      className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-6 rounded-xl transition-all"
                    >
                      {isRunning ? (
                        <>
                          <Pause className="h-5 w-5 mr-2" />
                          {t.pause}
                        </>
                      ) : (
                        <>
                          <Play className="h-5 w-5 mr-2" />
                          {t.start}
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <motion.div whileTap={{ scale: 0.92 }}>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="w-full border-brand/30 text-brand hover:bg-brand/10 font-bold py-6 rounded-xl"
                    >
                      <RotateCcw className="h-5 w-5 mr-2" />
                      {t.reset}
                    </Button>
                  </motion.div>

                  <motion.div whileTap={{ scale: 0.92 }} className="col-span-2">
                    <Button
                      onClick={handleSkip}
                      variant="ghost"
                      className="w-full text-zinc-400 hover:text-brand hover:bg-zinc-800/50 font-bold py-5 rounded-xl"
                    >
                      <SkipForward className="h-4 w-4 mr-2" />
                      {t.skip}
                    </Button>
                  </motion.div>
                </div>

                {/* Motivational text */}
                <p className="text-xs text-zinc-500 font-mono text-center">
                  {language === "es"
                    ? "4 rondas = 1 descanso largo"
                    : "4 rounds = 1 long break"}
                </p>
              </div>
            </div>

            {/* Confetti effect */}
            <AnimatePresence>
              {showConfetti && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 1, y: 0, x: 0 }}
                      animate={{
                        opacity: 0,
                        y: 100,
                        x: Math.sin(i) * 100,
                      }}
                      transition={{ duration: 1 }}
                      className="absolute pointer-events-none"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                    >
                      <div className="text-2xl">
                        {["🎉", "⭐", "🚀", "💚", "✨", "🔥"][i]}
                      </div>
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
