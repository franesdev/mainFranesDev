import { useState, useEffect } from "react"

export type Language = "en" | "es"

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>("es")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get language from localStorage
    const storedLanguage = localStorage.getItem("language") as Language | null
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
    setIsLoaded(true)

    // Listen for language changes from other components
    const handleLanguageChange = (event?: Event) => {
      const newLanguage = localStorage.getItem("language") as Language | null
      if (newLanguage) {
        setLanguage(newLanguage)
      }
    }

    window.addEventListener("languageChange", handleLanguageChange)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange)
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    window.dispatchEvent(new Event("languageChange"))
  }

  return { language, setLanguage: changeLanguage, isLoaded }
}
