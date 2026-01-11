"use client"

import { Button } from "@/components/ui/button"
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
      className="bg-gray-800/80 backdrop-blur-sm border-lime-500 hover:bg-gray-700 text-lime-500 font-medium rounded-full px-4"
    >
      {language === "en" ? "ES" : "EN"}
    </Button>
  )
}
