"use client"

import { useState, useEffect } from "react"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, InstagramIcon as TiktokIcon, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-400 py-12 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">FranesDev</h3>
            <p className="mb-4">
              {language === "en"
                ? "Full Stack Developer passionate about creating innovative solutions and sharing knowledge."
                : "Desarrollador Full Stack apasionado por crear soluciones innovadoras y compartir conocimientos."}
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com/franesdev" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-lime-500 transition-colors" />
              </a>
              <a href="https://twitter.com/franesdev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-lime-500 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/franesdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-lime-500 transition-colors" />
              </a>
              <a
                href="https://instagram.com/franesdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-400 hover:text-lime-500 transition-colors" />
              </a>
              <a href="https://youtube.com/franesdev" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-400 hover:text-lime-500 transition-colors" />
              </a>
              <a href="https://tiktok.com/@franesdev" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <TiktokIcon className="h-5 w-5 text-gray-400 hover:text-lime-500 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {language === "en" ? "Quick Links" : "Enlaces Rápidos"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-lime-500 transition-colors">
                  {language === "en" ? "Home" : "Inicio"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition-colors">
                  {language === "en" ? "About" : "Acerca de"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition-colors">
                  {language === "en" ? "Projects" : "Proyectos"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition-colors">
                  {language === "en" ? "Blog" : "Blog"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition-colors">
                  {language === "en" ? "Contact" : "Contacto"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">{language === "en" ? "Newsletter" : "Boletín"}</h3>
            <p className="mb-4">
              {language === "en"
                ? "Subscribe to receive updates on my latest projects and tutorials."
                : "Suscríbete para recibir actualizaciones sobre mis últimos proyectos y tutoriales."}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={language === "en" ? "Your email" : "Tu email"}
                className="bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-lime-500"
              />
              <Button className="rounded-l-none bg-lime-500 hover:bg-lime-600 text-black">
                {language === "en" ? "Subscribe" : "Suscribir"}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {currentYear} FranesDev. {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
          </p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="mt-4 md:mt-0 bg-gray-800 border-gray-700 hover:bg-gray-700 hover:text-lime-500"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
