"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguageContext()

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
