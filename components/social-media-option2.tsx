"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Youtube, Facebook, Twitter, Linkedin, Instagram, InstagramIcon as TiktokIcon } from "lucide-react"

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
      color: "from-red-600 to-red-700",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-8 w-8" />,
      url: "https://linkedin.com/in/franesdev",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-8 w-8" />,
      url: "https://instagram.com/franesdev",
      color: "from-pink-600 to-purple-600",
    },
    {
      name: "TikTok",
      icon: <TiktokIcon className="h-8 w-8" />,
      url: "https://tiktok.com/@franesdev",
      color: "from-black to-gray-800",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-8 w-8" />,
      url: "https://twitter.com/franesdev",
      color: "from-sky-500 to-sky-600",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-8 w-8" />,
      url: "https://facebook.com/franesdev",
      color: "from-blue-800 to-blue-900",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-900">
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
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {language === "en"
              ? "Follow me on social media to stay updated with my latest projects, tutorials, and tech insights."
              : "Sígueme en redes sociales para mantenerte actualizado con mis últimos proyectos, tutoriales y conocimientos tecnológicos."}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="transform transition-all duration-300"
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div
                  className={`h-full rounded-xl bg-gradient-to-br ${social.color} p-6 flex flex-col items-center justify-center text-white shadow-lg`}
                >
                  {social.icon}
                  <span className="mt-2 font-medium">{social.name}</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 rounded-xl overflow-hidden shadow-2xl"
        >
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
        </motion.div>
      </div>
    </section>
  )
}
