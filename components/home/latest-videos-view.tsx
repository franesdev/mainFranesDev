"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, PlayCircle, ExternalLink } from "lucide-react"
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa"
import { useLanguageContext } from "@/contexts/LanguageContext"
import { bestReels, YOUTUBE_CHANNEL_URL } from "@/lib/site-config"
import type { YoutubeVideo } from "@/lib/youtube"

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

export default function LatestVideosView({ videos }: { videos: YoutubeVideo[] }) {
  const { language } = useLanguageContext()
  const [playing, setPlaying] = useState(false)

  const content = {
    es: {
      label: "Lo último",
      title: "Lo último en video",
      subtitle: "Acertijos, mentalidad y vida de Papá Dev. Se actualiza solo cada vez que publico.",
      play: "Reproducir video",
      shorts: "Shorts recientes",
      channel: "Ver canal de YouTube",
      empty: "Mira mis videos más recientes directamente en YouTube.",
      reels: "Mis mejores reels",
    },
    en: {
      label: "Latest",
      title: "Latest videos",
      subtitle: "Puzzles, mindset, and Dad Dev life. Updates automatically every time I publish.",
      play: "Play video",
      shorts: "Recent Shorts",
      channel: "Visit YouTube channel",
      empty: "Watch my latest videos directly on YouTube.",
      reels: "My best reels",
    },
  }

  const t = content[language]

  // Destacado: el video largo más reciente (o el último, si solo hay Shorts).
  const featured = videos.find((v) => !v.isShort) ?? videos[0]
  const shorts = videos.filter((v) => v.isShort && v.id !== featured?.id).slice(0, 3)

  const formatDate = (iso: string) =>
    iso
      ? new Date(iso).toLocaleDateString(language === "es" ? "es-EC" : "en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : ""

  return (
    <section id="videos" className="py-14 md:py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-medium mb-4">
              <PlayCircle className="h-3.5 w-3.5" />
              {t.label}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t.title}</h2>
            <p className="text-zinc-400 max-w-xl">{t.subtitle}</p>
          </div>
          <a
            href={`${YOUTUBE_CHANNEL_URL}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-brand/50 text-zinc-300 hover:text-white bg-zinc-900/60 font-medium px-5 py-3 rounded-xl transition-colors shrink-0"
          >
            <FaYoutube className="h-5 w-5 text-red-500" />
            {t.channel}
          </a>
        </motion.div>

        {featured ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
                {playing ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${featured.id}?autoplay=1&rel=0`}
                    title={featured.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label={`${t.play}: ${featured.title}`}
                    className="group absolute inset-0 w-full h-full"
                  >
                    <img
                      src={thumb(featured.id)}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-16 h-16 rounded-full bg-brand text-zinc-950 flex items-center justify-center shadow-lg shadow-brand/30 group-hover:scale-110 transition-transform">
                        <Play className="h-7 w-7 ml-1" fill="currentColor" />
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <h3 className="text-white font-semibold mt-3 leading-snug">{featured.title}</h3>
              <p className="text-zinc-500 text-sm">{formatDate(featured.published)}</p>
            </div>

            {shorts.length > 0 && (
              <div className="lg:col-span-2">
                <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">{t.shorts}</p>
                <div className="space-y-3">
                  {shorts.map((video) => (
                    <a
                      key={video.id}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-4 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-brand/30 transition-colors"
                    >
                      <div className="w-16 aspect-[3/4] rounded-lg overflow-hidden bg-zinc-800 shrink-0">
                        <img src={thumb(video.id)} alt="" loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0 flex flex-col justify-center">
                        <p className="text-white text-sm font-medium leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                          {video.title}
                        </p>
                        <p className="text-zinc-500 text-xs mt-1">Short · {formatDate(video.published)}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-brand/30 text-zinc-300 transition-colors"
          >
            <FaYoutube className="h-6 w-6 text-red-500" />
            {t.empty}
          </a>
        )}

        <h3 className="text-xl font-bold text-white mt-12 mb-4">{t.reels}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestReels.map((reel) => {
            const Icon = reel.platform === "instagram" ? FaInstagram : FaTiktok
            return (
              <a
                key={reel.thumbnail}
                href={reel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-zinc-800 hover:border-brand/40 bg-zinc-900 transition-colors"
              >
                <img
                  src={reel.thumbnail}
                  alt={reel.title[language]}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-950/70 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-white" />
                </span>
                <span className="absolute bottom-0 inset-x-0 p-3 flex items-end justify-between gap-2">
                  <span className="text-white text-sm font-medium leading-snug">{reel.title[language]}</span>
                  <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-brand shrink-0 transition-colors" />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
