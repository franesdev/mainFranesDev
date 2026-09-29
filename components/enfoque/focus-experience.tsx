"use client"

import { useCallback, useState } from "react"
import FocusTimer from "@/components/enfoque/focus-timer"
import MusicPlayer from "@/components/enfoque/music-player"
import GuidePrompt from "@/components/enfoque/guide-prompt"
import { hasSubscribedToGuide } from "@/hooks/use-guide-signup"

// Máximo una vez por sesión del navegador
const PROMPT_SESSION_KEY = "franesdev:focus-guide-prompt"

export default function FocusExperience() {
  const [showPrompt, setShowPrompt] = useState(false)

  const handleFocusComplete = useCallback(() => {
    if (hasSubscribedToGuide()) return
    try {
      if (sessionStorage.getItem(PROMPT_SESSION_KEY)) return
      sessionStorage.setItem(PROMPT_SESSION_KEY, "1")
    } catch {}
    setShowPrompt(true)
  }, [])

  const closePrompt = useCallback(() => setShowPrompt(false), [])

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-5 lg:gap-6 items-start">
        <FocusTimer onFocusComplete={handleFocusComplete} />
        <MusicPlayer />
      </div>
      {showPrompt && <GuidePrompt onClose={closePrompt} />}
    </>
  )
}
