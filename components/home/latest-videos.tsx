import { getLatestVideos } from "@/lib/youtube"
import LatestVideosView from "@/components/home/latest-videos-view"

// Componente de servidor: lee el RSS de YouTube (cacheado 1 h) y pasa los datos a la vista.
export default async function LatestVideos() {
  const videos = await getLatestVideos()
  return <LatestVideosView videos={videos} />
}
