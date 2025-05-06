"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Youtube, Facebook, Twitter, Linkedin, Instagram, InstagramIcon as TiktokIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function SocialMedia() {
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

  const socialLinks = [
    {
      name: "YouTube",
      icon: <Youtube className="h-8 w-8" />,
      url: "https://youtube.com/franesdev",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-8 w-8" />,
      url: "https://linkedin.com/in/franesdev",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-8 w-8" />,
      url: "https://instagram.com/franesdev",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      name: "TikTok",
      icon: <TiktokIcon className="h-8 w-8" />,
      url: "https://tiktok.com/@franesdev",
      color: "bg-black hover:bg-zinc-800",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-8 w-8" />,
      url: "https://twitter.com/franesdev",
      color: "bg-sky-500 hover:bg-sky-600",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-8 w-8" />,
      url: "https://facebook.com/franesdev",
      color: "bg-blue-800 hover:bg-blue-900",
    },
  ]

  return (
    <section className="py-20 px-4 bg-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {language === "en" ? "Connect With Me" : "Conéctate Conmigo"}
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            {language === "en"
              ? "Follow me on social media to stay updated with my latest projects, tutorials, and tech insights."
              : "Sígueme en redes sociales para mantenerte actualizado con mis últimos proyectos, tutoriales y conocimientos tecnológicos."}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="h-full bg-zinc-800 border-zinc-700 hover:border-lime-500 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0">
                    <div
                      className={`flex flex-col items-center justify-center p-6 text-white ${social.color} h-full transition-transform duration-300 group-hover:scale-105`}
                    >
                      {social.icon}
                      <span className="mt-2 font-medium">{social.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
