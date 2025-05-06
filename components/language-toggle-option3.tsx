"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  useEffect(() => {
    // Set language in localStorage
    localStorage.setItem("language", language)
    // Dispatch a custom event so other components can react to language changes
    window.dispatchEvent(new Event("languageChange"))
  }, [language])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="bg-zinc-900/70 backdrop-blur-sm border-lime-500/50 hover:bg-zinc-800 hover:border-lime-500 text-lime-500"
    >
      <Globe className="h-4 w-4 mr-2" />
      {language === "en" ? "ES" : "EN"}
    </Button>
  )
}
