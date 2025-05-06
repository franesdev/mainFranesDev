"use client"

import { useState, useEffect } from "react"
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTiktok
} from "react-icons/fa"

export default function Footer() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  useEffect(() => {
    // Get language from localStorage
    const storedLanguage = localStorage.getItem("language") as "en" | "es" | null
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }

    // Listen for language changes
    const handleLanguageChange = () => {
      const newLanguage = localStorage.getItem("language") as "en" | "es" | null
      if (newLanguage) {
        setLanguage(newLanguage)
      }
    }

    window.addEventListener("languageChange", handleLanguageChange)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange)
    }
  }, [])

  const currentYear = new Date().getFullYear()

  return (
      <footer className="bg-zinc-950 text-zinc-400 py-8 px-4 border-t border-zinc-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>
                © {currentYear} Franes Dev. {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
              </p>
            </div>

            <div className="flex space-x-4">
              <a href="https://facebook.com/franesdev" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="h-5 w-5 text-zinc-400 hover:text-lime-500 transition-colors" />
              </a>
              <a href="https://twitter.com/franesdev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="h-5 w-5 text-zinc-400 hover:text-lime-500 transition-colors" />
              </a>
              <a href="https://linkedin.com/in/franesdev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5 text-zinc-400 hover:text-lime-500 transition-colors" />
              </a>
              <a href="https://instagram.com/franesdev" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="h-5 w-5 text-zinc-400 hover:text-lime-500 transition-colors" />
              </a>
              <a href="https://youtube.com/@franesdev" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="h-5 w-5 text-zinc-400 hover:text-lime-500 transition-colors" />
              </a>
              <a href="https://tiktok.com/@franesdev" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok className="h-5 w-5 text-zinc-400 hover:text-lime-500 transition-colors" />
              </a>
            </div>
          </div>

          <div className="mt-6 text-right">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-zinc-400 hover:text-lime-500 transition-colors text-sm"
            >
              {language === "en" ? "Back to top ↑" : "Volver arriba ↑"}
            </button>
          </div>
        </div>
      </footer>
  )
}