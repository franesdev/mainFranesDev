"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

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
      className="bg-gray-800/80 backdrop-blur-sm border-lime-500 hover:bg-gray-700 text-lime-500 font-medium rounded-full px-4"
    >
      {language === "en" ? "ES" : "EN"}
    </Button>
  )
}
