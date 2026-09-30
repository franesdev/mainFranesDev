import { YOUTUBE_CHANNEL_ID, YOUTUBE_SNAPSHOT } from "@/lib/site-config"

export type YoutubeVideo = {
  id: string
  title: string
  url: string
  published: string
}

export type LatestVideos = { videos: YoutubeVideo[]; shorts: YoutubeVideo[] }

const EMPTY: LatestVideos = { videos: [], shorts: [] }
const PER_LIST = 4

// Cada cuánto Vercel vuelve a consultar YouTube (segundos).
const REVALIDATE_SECONDS = 3600

// Playlists automáticas del canal: UULF = solo videos largos, UUSH = solo Shorts.
const channelKey = YOUTUBE_CHANNEL_ID.slice(2)
export const LONG_VIDEOS_PLAYLIST = `UULF${channelKey}`
export const SHORTS_PLAYLIST = `UUSH${channelKey}`

const hasBoth = (r: LatestVideos) => r.videos.length > 0 && r.shorts.length > 0

// Orden: YouTube Data API (si hay clave) → RSS → páginas públicas de YouTube → copia fija en site-config.
// Así la sección siempre muestra "último video + Shorts", aunque YouTube falle por alguna vía.
export async function getLatestVideos(): Promise<LatestVideos> {
  if (!YOUTUBE_CHANNEL_ID) return EMPTY
  for (const source of [fromDataApi, fromRss, fromYoutubePages]) {
    const result = await source()
    if (hasBoth(result)) return result
  }
  console.error("YouTube: ninguna fuente respondió; se usa YOUTUBE_SNAPSHOT")
  return {
    videos: YOUTUBE_SNAPSHOT.videos.map((v) => ({ ...v, url: `https://www.youtube.com/watch?v=${v.id}` })),
    shorts: YOUTUBE_SNAPSHOT.shorts.map((v) => ({ ...v, url: `https://www.youtube.com/shorts/${v.id}` })),
  }
}

// ---------- YouTube Data API v3 (clave privada en YOUTUBE_API_KEY; ~2 unidades/hora de 10.000 gratis al día) ----------

type PlaylistItemsResponse = {
  items?: {
    snippet: { title: string }
    contentDetails: { videoId: string; videoPublishedAt?: string }
  }[]
}

async function playlistFromApi(playlistId: string, key: string, isShort: boolean): Promise<YoutubeVideo[]> {
  const url =
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails` +
    `&maxResults=${PER_LIST + 2}&playlistId=${playlistId}&key=${key}`
  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } })
  if (!res.ok) {
    console.error(`YouTube API respondió ${res.status} para ${playlistId}`)
    return []
  }
  const data = (await res.json()) as PlaylistItemsResponse
  return (data.items ?? [])
    .filter((item) => item.contentDetails.videoPublishedAt) // excluye privados/eliminados
    .slice(0, PER_LIST)
    .map((item) => {
      const id = item.contentDetails.videoId
      return {
        id,
        title: item.snippet.title,
        url: isShort ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`,
        published: item.contentDetails.videoPublishedAt ?? "",
      }
    })
}

async function fromDataApi(): Promise<LatestVideos> {
  const key = process.env.YOUTUBE_API_KEY
  if (!key) return EMPTY
  try {
    const [videos, shorts] = await Promise.all([
      playlistFromApi(LONG_VIDEOS_PLAYLIST, key, false),
      playlistFromApi(SHORTS_PLAYLIST, key, true),
    ])
    return { videos, shorts }
  } catch (error) {
    console.error("YouTube API error:", error)
    return EMPTY
  }
}

// ---------- RSS público (sin clave; YouTube a veces lo deja en 404 por horas o días) ----------

const decodeEntities = (text: string) =>
  text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/g, "&")

const pick = (xml: string, pattern: RegExp) => xml.match(pattern)?.[1] ?? ""

async function fromRss(): Promise<LatestVideos> {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    })
    if (!res.ok) {
      console.error(`YouTube RSS respondió ${res.status}`)
      return EMPTY
    }

    const entries = (await res.text())
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
        }
      })
      .filter((video) => video.id)

    return {
      videos: entries.filter((v) => !v.url.includes("/shorts/")).slice(0, PER_LIST),
      shorts: entries.filter((v) => v.url.includes("/shorts/")).slice(0, PER_LIST),
    }
  } catch (error) {
    console.error("YouTube RSS error:", error)
    return EMPTY
  }
}

// ---------- Páginas públicas de YouTube (sin clave): playlist → IDs, página del video → título y fecha ----------

const BROWSER_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140 Safari/537.36",
  "Accept-Language": "es",
}

async function idsFromPlaylist(playlistId: string, count: number): Promise<string[]> {
  const res = await fetch(`https://www.youtube.com/playlist?list=${playlistId}`, {
    headers: BROWSER_HEADERS,
    next: { revalidate: REVALIDATE_SECONDS },
  })
  if (!res.ok) return []
  const html = await res.text()
  return [...new Set([...html.matchAll(/"videoId":"([\w-]{11})"/g)].map((m) => m[1]))].slice(0, count)
}

async function videoFromPage(id: string, isShort: boolean): Promise<YoutubeVideo | null> {
  const res = await fetch(`https://www.youtube.com/watch?v=${id}`, {
    headers: BROWSER_HEADERS,
    next: { revalidate: REVALIDATE_SECONDS },
  })
  if (!res.ok) return null
  const html = await res.text()
  const title = pick(html, /<meta name="title" content="([^"]*)"/)
  if (!title) return null
  return {
    id,
    title: decodeEntities(title),
    url: isShort ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`,
    published: pick(html, /"publishDate":"([^"]+)"/),
  }
}

async function fromYoutubePages(): Promise<LatestVideos> {
  try {
    const [videoIds, shortIds] = await Promise.all([
      idsFromPlaylist(LONG_VIDEOS_PLAYLIST, 1),
      idsFromPlaylist(SHORTS_PLAYLIST, 3),
    ])
    const [videos, shorts] = await Promise.all([
      Promise.all(videoIds.map((id) => videoFromPage(id, false))),
      Promise.all(shortIds.map((id) => videoFromPage(id, true))),
    ])
    const valid = (list: (YoutubeVideo | null)[]) => list.filter((v): v is YoutubeVideo => v !== null)
    return { videos: valid(videos), shorts: valid(shorts) }
  } catch (error) {
    console.error("YouTube páginas error:", error)
    return EMPTY
  }
}
