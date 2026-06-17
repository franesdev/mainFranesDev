"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { FaYoutube, FaInstagram } from "react-icons/fa"
import { useLanguageContext } from "@/contexts/LanguageContext"
import LanguageToggle from "@/components/language-toggle-option3"

export default function SiteHeader() {
  const { language } = useLanguageContext()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const content = {
    es: {
      tagline: "Piensa como programador. Vive mejor.",
      name: "FranesDev",
      youtube: "YouTube",
      instagram: "Instagram",
      contact: "Contacto",
    },
    en: {
      tagline: "Think like a programmer. Live better.",
      name: "FranesDev",
      youtube: "YouTube",
      instagram: "Instagram",
      contact: "Contact",
    },
  }

  const t = content[language]

  const navLinks = [
    {
      label: t.youtube,
      href: "https://youtube.com/@franesdev",
      icon: FaYoutube,
      external: true,
    },
    {
      label: t.instagram,
      href: "https://instagram.com/franesdev",
      icon: FaInstagram,
      external: true,
    },
    {
      label: t.contact,
      href: "#contact",
      external: false,
    },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith("#")) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg shadow-black/20"
          : "bg-zinc-950/60 backdrop-blur-md border-b border-zinc-800/40"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-[72px] gap-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 min-w-0 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative shrink-0">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden border-2 border-brand/40 ring-2 ring-brand/10 group-hover:border-brand/60 transition-colors">
                <Image
                  src="/logo.png"
                  alt="Franklin Paute Machuca"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-brand rounded-full border-2 border-zinc-950" />
            </div>
            <div className="min-w-0 hidden sm:block">
              <p className="text-white font-bold text-sm md:text-base leading-tight group-hover:text-brand transition-colors">
                {t.name}
              </p>
              <p className="text-zinc-500 text-[11px] md:text-xs leading-tight truncate max-w-[200px] lg:max-w-none">
                {t.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all duration-200"
                >
                  {link.icon && <link.icon className="h-4 w-4" />}
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all duration-200"
                >
                  {link.label}
                </button>
              )
            )}
            <div className="ml-2 pl-2 border-l border-zinc-800">
              <LanguageToggle />
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800/80 bg-zinc-950/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            <p className="text-brand text-xs font-medium px-3 py-2 mb-2 sm:hidden">{t.tagline}</p>
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
                >
                  {link.icon && <link.icon className="h-5 w-5 text-brand" />}
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors text-left"
                >
                  {link.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </header>
  )
}