"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get language from localStorage on client mount
    const storedLanguage = localStorage.getItem("language") as Language | null
    const initialLanguage = storedLanguage || "es"
    setLanguageState(initialLanguage)
    setIsLoaded(true)

    // Immediately dispatch event to update all listeners
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: initialLanguage }))
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)
    // Dispatch event to all listeners
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: newLanguage }))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguageContext must be used within LanguageProvider")
  }
  return context
}
