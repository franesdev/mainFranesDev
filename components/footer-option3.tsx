"use client"

import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTiktok
} from "react-icons/fa"
import { Mail } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function Footer() {
  const { language } = useLanguageContext()

  const currentYear = new Date().getFullYear()

  return (
      <footer className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-400 py-12 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-lime-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-lime-500/3 rounded-full filter blur-3xl"></div>
        </div>

        {/* Top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent"></div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
            {/* Name and role */}
            <div className="text-center md:text-left">
              <div className="inline-block">
                <span className="text-xl font-bold bg-gradient-to-r from-lime-500 to-lime-400 text-transparent bg-clip-text">
                  Franklin Paute Machuca
                </span>
                <div className="mt-2 text-sm text-zinc-500">
                  {language === "en" ? "Teaching you to think like a programmer" : "Enseñándote a pensar como programador"}
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4">
              {[
                { icon: FaYoutube, href: "https://youtube.com/@franesdev", label: "YouTube", hoverColor: "hover:text-red-500" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/franesdev", label: "LinkedIn", hoverColor: "hover:text-blue-500" },
                { icon: FaInstagram, href: "https://instagram.com/franesdev", label: "Instagram", hoverColor: "hover:text-pink-500" },
                { icon: FaTiktok, href: "https://tiktok.com/@franesdev", label: "TikTok", hoverColor: "hover:text-white" },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-zinc-800/50 rounded-full scale-0 group-hover:scale-125 transition-transform duration-300 blur"></div>
                  <social.icon className={`h-5 w-5 text-zinc-400 relative z-10 transform group-hover:scale-110 transition-all duration-300 ${social.hoverColor}`} />
                </a>
              ))}
            </div>

            {/* Contact and copyright */}
            <div className="text-center md:text-right">
              <a
                href="mailto:franesdev@gmail.com"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/30 hover:bg-zinc-800/50 transition-all duration-300 mb-3"
              >
                <Mail className="h-4 w-4 text-zinc-400 group-hover:text-lime-500 transition-colors" />
                <span className="text-sm text-zinc-400 group-hover:text-lime-500 transition-colors">
                  franesdev@gmail.com
                </span>
              </a>
              <div className="mt-2 text-sm text-zinc-500">
                © {currentYear} {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800/30 to-transparent"></div>
      </footer>
  )
}