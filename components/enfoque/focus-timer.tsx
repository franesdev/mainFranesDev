"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Play, Pause, RotateCcw, SkipForward, Settings2, X } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

type Mode = "focus" | "short" | "long"
type Durations = Record<Mode, number> // minutos

const DEFAULT_DURATIONS: Durations = { focus: 25, short: 5, long: 15 }
const STORAGE_KEY = "franesdev:pomodoro-durations"
const CYCLES_PER_LONG_BREAK = 4

const RING_RADIUS = 100
const RING_LENGTH = 2 * Math.PI * RING_RADIUS

const content = {
  es: {
    modes: { focus: "Foco", short: "Descanso", long: "Descanso largo" },
    start: "Iniciar",
    resume: "Continuar",
    pause: "Pausar",
    reset: "Reiniciar",
    skip: "Saltar",
    cycles: "Ciclos completados",
    untilLong: "para el descanso largo",
    settings: "Ajustar tiempos",
    minutes: "min",
    close: "Cerrar ajustes",
    restoreDefaults: "Volver a 25 / 5 / 15",
    doneFocus: "¡Ciclo de foco completado! Toma tu descanso.",
    doneBreak: "Descanso terminado. ¿Listo para otro ciclo?",
    spaceHint: "Tip: la barra espaciadora inicia y pausa.",
  },
  en: {
    modes: { focus: "Focus", short: "Break", long: "Long break" },
    start: "Start",
    resume: "Resume",
    pause: "Pause",
    reset: "Reset",
    skip: "Skip",
    cycles: "Cycles completed",
    untilLong: "until the long break",
    settings: "Adjust times",
    minutes: "min",
    close: "Close settings",
    restoreDefaults: "Back to 25 / 5 / 15",
    doneFocus: "Focus cycle complete! Take your break.",
    doneBreak: "Break is over. Ready for another cycle?",
    spaceHint: "Tip: the space bar starts and pauses.",
  },
}

const formatTime = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

// Sonido suave de dos notas con Web Audio (sin archivos de audio).
function playChime(ctx: AudioContext | null) {
  if (!ctx) return
  const notes = [660, 880]
  notes.forEach((freq, i) => {
    const start = ctx.currentTime + i * 0.25
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = "sine"
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.0001, start)
    gain.gain.exponentialRampToValueAtTime(0.15, start + 0.03)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.9)
    osc.connect(gain).connect(ctx.destination)
    osc.start(start)
    osc.stop(start + 1)
  })
}

export default function FocusTimer({ onFocusComplete }: { onFocusComplete?: () => void }) {
  const { language } = useLanguageContext()
  const t = content[language]

  const [durations, setDurations] = useState<Durations>(DEFAULT_DURATIONS)
  const [mode, setMode] = useState<Mode>("focus")
  const [remaining, setRemaining] = useState(DEFAULT_DURATIONS.focus * 60)
  const [running, setRunning] = useState(false)
  const [cycles, setCycles] = useState(0)
  const [finished, setFinished] = useState<Mode | null>(null)
  const [showSettings, setShowSettings] = useState(false)

  // La hora exacta de fin: así el tiempo es correcto aunque el navegador frene la pestaña.
  const endAtRef = useRef(0)
  const audioRef = useRef<AudioContext | null>(null)

  // Cargar duraciones guardadas
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null")
      if (saved && typeof saved === "object") {
        const merged = { ...DEFAULT_DURATIONS, ...saved } as Durations
        setDurations(merged)
        setRemaining(merged.focus * 60)
      }
    } catch {}
  }, [])

  const nextModeAfter = (current: Mode, completedCycles: number): Mode =>
    current !== "focus" ? "focus" : completedCycles % CYCLES_PER_LONG_BREAK === 0 ? "long" : "short"

  const goToMode = useCallback(
    (next: Mode) => {
      setMode(next)
      setRemaining(durations[next] * 60)
      setRunning(false)
    },
    [durations],
  )

  const complete = useCallback(() => {
    playChime(audioRef.current)
    setFinished(mode)
    if (mode === "focus") {
      const total = cycles + 1
      setCycles(total)
      goToMode(nextModeAfter("focus", total))
      onFocusComplete?.()
    } else {
      goToMode("focus")
    }
  }, [mode, cycles, goToMode, onFocusComplete])

  // Tick
  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      const left = Math.max(0, Math.ceil((endAtRef.current - Date.now()) / 1000))
      setRemaining(left)
      if (left === 0) {
        clearInterval(id)
        complete()
      }
    }, 250)
    return () => clearInterval(id)
  }, [running, complete])

  // El cambio visual de "terminado" dura unos segundos
  useEffect(() => {
    if (!finished) return
    const id = setTimeout(() => setFinished(null), 6000)
    return () => clearTimeout(id)
  }, [finished])

  const toggle = useCallback(() => {
    if (running) {
      setRunning(false)
      return
    }
    // Crear/reanudar el audio en un clic del usuario (requisito de iOS/Safari)
    try {
      if (!audioRef.current) audioRef.current = new AudioContext()
      audioRef.current.resume()
    } catch {}
    endAtRef.current = Date.now() + remaining * 1000
    setFinished(null)
    setRunning(true)
  }, [running, remaining])

  const reset = () => goToMode(mode)
  const skip = () => {
    setFinished(null)
    // Saltar no cuenta como ciclo completado
    goToMode(mode === "focus" ? "short" : "focus")
  }

  // Barra espaciadora = iniciar/pausar (salvo si se está escribiendo o sobre un botón)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== "Space") return
      const el = e.target as HTMLElement
      if (el.closest("input, textarea, select, button, a, iframe")) return
      e.preventDefault()
      toggle()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [toggle])

  // Tiempo restante en el título de la pestaña
  useEffect(() => {
    const original = document.title
    return () => {
      document.title = original
    }
  }, [])
  useEffect(() => {
    const inProgress = running || remaining !== durations[mode] * 60
    document.title = inProgress
      ? `${formatTime(remaining)} · ${t.modes[mode]} — FranesDev`
      : "Pomodoro online gratis + música para concentrarte | FranesDev"
  }, [remaining, running, mode, durations, t])

  const updateDuration = (key: Mode, value: number) => {
    const minutes = Math.min(120, Math.max(1, Math.round(value) || 1))
    const next = { ...durations, [key]: minutes }
    setDurations(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {}
    if (!running && key === mode) setRemaining(minutes * 60)
  }

  const restoreDefaults = () => {
    setDurations(DEFAULT_DURATIONS)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {}
    if (!running) setRemaining(DEFAULT_DURATIONS[mode] * 60)
  }

  const total = durations[mode] * 60
  const progress = total > 0 ? (total - remaining) / total : 0
  const isFocus = mode === "focus"
  const accent = isFocus ? "text-brand" : "text-brand-teal"
  const accentBg = isFocus ? "bg-brand hover:bg-brand-dark" : "bg-brand-teal hover:bg-brand-teal/85"
  const hasStarted = remaining !== total
  const cycleInRound = cycles % CYCLES_PER_LONG_BREAK

  return (
    <div
      className={`relative rounded-3xl border bg-brand-navy/60 p-5 sm:p-8 transition-colors duration-700 ${
        finished ? "border-brand/60 shadow-2xl shadow-brand/20" : "border-zinc-800"
      }`}
    >
      {/* Modos */}
      <div role="tablist" aria-label="Pomodoro" className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-zinc-950/60 mb-6">
        {(Object.keys(t.modes) as Mode[]).map((m) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => {
              setFinished(null)
              goToMode(m)
            }}
            className={`px-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              mode === m ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {t.modes[m]}
          </button>
        ))}
      </div>

      {/* Anillo + tiempo */}
      <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem] aspect-square">
        <svg viewBox="0 0 220 220" className="absolute inset-0 w-full h-full -rotate-90" aria-hidden="true">
          <circle cx="110" cy="110" r={RING_RADIUS} fill="none" strokeWidth="6" className="stroke-zinc-800" />
          <circle
            cx="110"
            cy="110"
            r={RING_RADIUS}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            stroke="currentColor"
            className={`${accent} transition-[stroke-dashoffset] duration-300 ease-linear`}
            strokeDasharray={RING_LENGTH}
            strokeDashoffset={RING_LENGTH * (1 - progress)}
          />
        </svg>
        {finished && <div className="absolute inset-4 rounded-full bg-brand/10 animate-ping" aria-hidden="true" />}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p
            className="text-6xl sm:text-7xl font-bold text-white font-mono tabular-nums tracking-tight"
            aria-live="off"
          >
            {formatTime(remaining)}
          </p>
          <p className={`mt-2 text-xs sm:text-sm font-semibold uppercase tracking-widest ${accent}`}>
            {t.modes[mode]}
          </p>
        </div>
      </div>

      {/* Aviso de fin */}
      <p aria-live="polite" className="min-h-[1.5rem] mt-4 text-center text-sm font-medium text-brand">
        {finished ? (finished === "focus" ? t.doneFocus : t.doneBreak) : ""}
      </p>

      {/* Controles */}
      <div className="mt-2 flex items-center justify-center gap-3 sm:gap-4">
        <button
          onClick={reset}
          aria-label={t.reset}
          title={t.reset}
          className="w-12 h-12 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-colors"
        >
          <RotateCcw className="h-5 w-5" />
        </button>
        <button
          onClick={toggle}
          className={`h-14 min-w-[9.5rem] px-8 rounded-full text-zinc-950 font-semibold text-lg inline-flex items-center justify-center gap-2 shadow-lg transition-colors ${accentBg}`}
        >
          {running ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" fill="currentColor" />}
          {running ? t.pause : hasStarted ? t.resume : t.start}
        </button>
        <button
          onClick={skip}
          aria-label={t.skip}
          title={t.skip}
          className="w-12 h-12 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-colors"
        >
          <SkipForward className="h-5 w-5" />
        </button>
      </div>

      {/* Ciclos */}
      <div className="mt-6 flex items-center justify-between gap-4 rounded-xl bg-zinc-950/50 px-4 py-3">
        <div>
          <p className="text-zinc-500 text-xs">{t.cycles}</p>
          <p className="text-2xl font-bold text-white tabular-nums">{cycles}</p>
        </div>
        <div className="text-right">
          <div className="flex gap-1.5 justify-end" aria-hidden="true">
            {Array.from({ length: CYCLES_PER_LONG_BREAK }).map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${i < cycleInRound ? "bg-brand" : "bg-zinc-700"}`}
              />
            ))}
          </div>
          <p className="text-zinc-500 text-xs mt-1.5">
            {CYCLES_PER_LONG_BREAK - cycleInRound} {t.untilLong}
          </p>
        </div>
      </div>

      {/* Ajustes */}
      <div className="mt-4">
        {showSettings ? (
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-white">{t.settings}</p>
              <button
                onClick={() => setShowSettings(false)}
                aria-label={t.close}
                className="text-zinc-500 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(t.modes) as Mode[]).map((m) => (
                <label key={m} className="text-xs text-zinc-400">
                  {t.modes[m]}
                  <div className="mt-1 flex items-center gap-1.5">
                    <input
                      type="number"
                      min={1}
                      max={120}
                      inputMode="numeric"
                      value={durations[m]}
                      onChange={(e) => updateDuration(m, Number(e.target.value))}
                      className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-2 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
                    />
                    <span className="text-zinc-500">{t.minutes}</span>
                  </div>
                </label>
              ))}
            </div>
            <button onClick={restoreDefaults} className="mt-3 text-xs text-zinc-500 hover:text-brand underline">
              {t.restoreDefaults}
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => setShowSettings(true)}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <Settings2 className="h-4 w-4" />
              {t.settings} ({durations.focus}/{durations.short}/{durations.long})
            </button>
            <p className="hidden sm:block text-xs text-zinc-600">{t.spaceHint}</p>
          </div>
        )}
      </div>
    </div>
  )
}
