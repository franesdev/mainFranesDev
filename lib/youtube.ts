import { YOUTUBE_CHANNEL_ID } from "@/lib/site-config"

export type YoutubeVideo = {
  id: string
  title: string
  url: string
  published: string
  isShort: boolean
}

// Cada cuánto Vercel vuelve a leer el feed (segundos).
const REVALIDATE_SECONDS = 3600

const decodeEntities = (text: string) =>
  text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")

const pick = (xml: string, pattern: RegExp) => xml.match(pattern)?.[1] ?? ""

// Lee el RSS público del canal (sin API key). Si falla, devuelve [] y la sección muestra solo el fallback.
export async function getLatestVideos(): Promise<YoutubeVideo[]> {
  if (!YOUTUBE_CHANNEL_ID) return []

  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    })
    if (!res.ok) return []

    const xml = await res.text()
    return xml
      .split("<entry>")
      .slice(1)
      .map((entry) => {
        const id = pick(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/)
        const url = pick(entry, /<link rel="alternate" href="([^"]+)"/)
        return {
          id,
          title: decodeEntities(pick(entry, /<title>([^<]*)<\/title>/)),
          url: url || `https://www.youtube.com/watch?v=${id}`,
          published: pick(entry, /<published>([^<]+)<\/published>/),
          isShort: url.includes("/shorts/"),
        }
      })
      .filter((video) => video.id)
  } catch (error) {
    console.error("YouTube RSS error:", error)
    return []
  }
}
