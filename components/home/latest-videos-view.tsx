"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play, PlayCircle, ExternalLink } from "lucide-react"
import { FaYoutube } from "react-icons/fa"
import { useLanguageContext } from "@/contexts/LanguageContext"
import { YOUTUBE_CHANNEL_URL } from "@/lib/site-config"
import { LONG_VIDEOS_PLAYLIST, SHORTS_PLAYLIST, type LatestVideos, type YoutubeVideo } from "@/lib/youtube"

const thumb = (id: string, size: "hq" | "mq" = "hq") => `https://i.ytimg.com/vi/${id}/${size}default.jpg`
const embed = (path: string) => `https://www.youtube-nocookie.com/embed/${path}`
const IFRAME_ALLOW = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

// Miniatura con botón de play; el iframe de YouTube solo se carga al hacer clic (página más liviana).
function LitePlayer({
  video,
  playing,
  onPlay,
  label,
  className,
}: {
  video: YoutubeVideo
  playing: boolean
  onPlay: () => void
  label: string
  className: string
}) {
  return (
    <div className={`relative overflow-hidden bg-zinc-900 ${className}`}>
      {playing ? (
        <iframe
          src={embed(`${video.id}?autoplay=1&rel=0`)}
          title={video.title}
          allow={IFRAME_ALLOW}
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button type="button" onClick={onPlay} aria-label={`${label}: ${video.title}`} className="group absolute inset-0 w-full h-full">
          <img
            src={thumb(video.id)}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-brand text-zinc-950 flex items-center justify-center shadow-lg shadow-brand/30 group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}

export default function LatestVideosView({ videos, shorts }: LatestVideos) {
  const { language } = useLanguageContext()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [playing, setPlaying] = useState(false)
  const [playingShort, setPlayingShort] = useState<string | null>(null)
  const playerRef = useRef<HTMLDivElement>(null)

  const content = {
    es: {
      label: "Lo último",
      title: "Lo último en video",
      subtitle: "Acertijos, mentalidad y vida de Papá Dev. Se actualiza solo cada vez que publico.",
      play: "Reproducir",
      more: "Más videos",
      shorts: "Shorts recientes",
      allShorts: "Ver todos los Shorts",
      channel: "Ver canal de YouTube",
      videosPlaylist: "Videos de FranesDev",
      shortsPlaylist: "Shorts de FranesDev",
    },
    en: {
      label: "Latest",
      title: "Latest videos",
      subtitle: "Puzzles, mindset, and Dad Dev life. Updates automatically every time I publish.",
      play: "Play",
      more: "More videos",
      shorts: "Recent Shorts",
      allShorts: "See all Shorts",
      channel: "Visit YouTube channel",
      videosPlaylist: "FranesDev videos",
      shortsPlaylist: "FranesDev Shorts",
    },
  }

  const t = content[language]

  const featured = videos.find((v) => v.id === activeId) ?? videos[0]
  const others = videos.filter((v) => v.id !== featured?.id)

  const formatDate = (iso: string) =>
    iso
      ? new Date(iso).toLocaleDateString(language === "es" ? "es-EC" : "en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : ""

  const playVideo = (id: string) => {
    setActiveId(id)
    setPlaying(true)
    playerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }

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

        {/* Videos largos: el último grande + 3 más a la derecha */}
        {featured ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div ref={playerRef} className="lg:col-span-3 scroll-mt-24">
              <LitePlayer
                key={featured.id}
                video={featured}
                playing={playing}
                onPlay={() => setPlaying(true)}
                label={t.play}
                className="aspect-video rounded-2xl border border-zinc-800"
              />
              <h3 className="text-white font-semibold mt-3 leading-snug">{featured.title}</h3>
              <p className="text-zinc-500 text-sm">{formatDate(featured.published)}</p>
            </div>

            {others.length > 0 && (
              <div className="lg:col-span-2">
                <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">{t.more}</p>
                <div className="space-y-3">
                  {others.map((video) => (
                    <button
                      key={video.id}
                      type="button"
                      onClick={() => playVideo(video.id)}
                      className="group w-full text-left flex gap-3 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-brand/30 transition-colors"
                    >
                      <div className="relative w-32 aspect-video rounded-lg overflow-hidden bg-zinc-800 shrink-0">
                        <img src={thumb(video.id, "mq")} alt="" loading="lazy" className="w-full h-full object-cover" />
                        <span className="absolute inset-0 flex items-center justify-center bg-zinc-950/30 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-5 w-5 text-white" fill="currentColor" />
                        </span>
                      </div>
                      <div className="min-w-0 flex flex-col justify-center">
                        <p className="text-white text-sm font-medium leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                          {video.title}
                        </p>
                        <p className="text-zinc-500 text-xs mt-1">{formatDate(video.published)}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          // Sin lista (YouTube no respondió): reproductor con la playlist de videos largos del canal
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            <iframe
              src={embed(`videoseries?list=${LONG_VIDEOS_PLAYLIST}`)}
              title={t.videosPlaylist}
              loading="lazy"
              allow={IFRAME_ALLOW}
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        )}

        {/* Shorts: 4 tarjetas verticales que se reproducen en la página */}
        <div className="mt-10">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h3 className="text-xl font-bold text-white">{t.shorts}</h3>
            <a
              href={`${YOUTUBE_CHANNEL_URL}/shorts`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-brand transition-colors"
            >
              {t.allShorts}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {shorts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {shorts.map((short) => (
                <div key={short.id}>
                  <LitePlayer
                    video={short}
                    playing={playingShort === short.id}
                    onPlay={() => setPlayingShort(short.id)}
                    label={t.play}
                    className="aspect-[9/16] rounded-2xl border border-zinc-800"
                  />
                  <p className="mt-2 text-sm text-zinc-300 leading-snug line-clamp-2">{short.title}</p>
                </div>
              ))}
            </div>
          ) : (
            // Sin lista: reproductor vertical con la playlist de Shorts del canal
            <div className="relative mx-auto w-full max-w-[18rem] aspect-[9/16] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
              <iframe
                src={embed(`videoseries?list=${SHORTS_PLAYLIST}`)}
                title={t.shortsPlaylist}
                loading="lazy"
                allow={IFRAME_ALLOW}
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
