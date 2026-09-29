"use client"

import { memo, useState } from "react"
import { Headphones } from "lucide-react"
import { FaSpotify, FaYoutube } from "react-icons/fa"
import { useLanguageContext } from "@/contexts/LanguageContext"
import { HOLABEATS } from "@/lib/site-config"

type Source = "spotify" | "youtube"

const content = {
  es: { title: "Música para concentrarte", credit: "Música: HolaBeats 🎧", noCopyright: "Sin copyright" },
  en: { title: "Music to focus", credit: "Music: HolaBeats 🎧", noCopyright: "Copyright-free" },
}

// Independiente del temporizador: vive en su propio componente, así ninguno reinicia al otro.
function MusicPlayer() {
  const { language } = useLanguageContext()
  const t = content[language]
  const [source, setSource] = useState<Source>("spotify")

  const tabs: { id: Source; label: string; icon: typeof FaSpotify; color: string }[] = [
    { id: "spotify", label: "Spotify", icon: FaSpotify, color: "text-[#1DB954]" },
    { id: "youtube", label: "YouTube", icon: FaYoutube, color: "text-red-500" },
  ]

  return (
    <div className="rounded-3xl border border-zinc-800 bg-brand-navy/60 p-5 sm:p-6 flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="flex items-center gap-2 text-white font-semibold">
          <Headphones className="h-5 w-5 text-brand-teal" />
          {t.title}
        </h2>
        <div role="tablist" aria-label={t.title} className="flex gap-1 p-1 rounded-lg bg-zinc-950/60">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={source === tab.id}
              onClick={() => setSource(tab.id)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                source === tab.id ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <tab.icon className={`h-3.5 w-3.5 ${tab.color}`} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden bg-zinc-950">
        {source === "spotify" ? (
          <iframe
            key="spotify"
            src={HOLABEATS.spotifyEmbed}
            title="HolaBeats en Spotify"
            width="100%"
            height="352"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="block w-full h-[352px] border-0"
          />
        ) : (
          <div className="relative aspect-video">
            <iframe
              key="youtube"
              src={HOLABEATS.youtubeEmbed}
              title="HolaBeats en YouTube"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        )}
      </div>

      <p className="mt-4 text-sm text-zinc-400 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-zinc-300">{t.credit}</span>
        <a
          href={HOLABEATS.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <FaSpotify className="h-3.5 w-3.5 text-[#1DB954]" /> Spotify
        </a>
        <a
          href={HOLABEATS.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <FaYoutube className="h-3.5 w-3.5 text-red-500" /> YouTube
        </a>
        <span className="text-xs text-zinc-600">· {t.noCopyright}</span>
      </p>
    </div>
  )
}

export default memo(MusicPlayer)
